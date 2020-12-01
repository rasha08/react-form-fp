import React, {
  ComponentProps,
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useContext,
  useReducer,
  useState
} from 'react'
import { is, isNil } from 'ramda'
import { wizardReducer } from './reducer'
import { useWizardActions } from './actions'
import { WizardContextState, WizardStep } from './types'

type ChangeStep = (step?: number) => void
type SetVisibility = (isVisible: boolean) => void
type SetSteps = (steps: WizardStep[]) => void
type StepValidator = () => boolean
type NextHandler = () => Promise<boolean>

type WizardContext = {
  state: WizardContextState
  changeStep: ChangeStep
  setVisibility: SetVisibility
  setSteps: SetSteps
  setValidator: Dispatch<StepValidator>
  setOnNextHandle: Dispatch<NextHandler>
}

const WizardContext = createContext({} as WizardContext)

export const useWizardContext = (): WizardContext => useContext(WizardContext)

export interface Props extends ComponentProps<FC> {
  steps: WizardStep[]
  activeStep?: number
}

export const WizardContextProvider: FC<Props> = ({
  steps,
  activeStep = 0,
  children
}) => {
  const [state, dispatch] = useReducer(wizardReducer, {
    showWizard: true,
    steps,
    activeStep
  })

  const [stepValidator, setStepValidator]: [
    StepValidator,
    Dispatch<SetStateAction<() => boolean>>
  ] = useState<() => boolean>(() => () => true)
  const [nextCallback, setNextCallback]: [
    NextHandler,
    Dispatch<SetStateAction<() => Promise<boolean>>>
  ] = useState<() => Promise<boolean>>(() => () => Promise.resolve(true))
  const {
    setActiveStepAction,
    setWizardVisibilityAction,
    setWizardStepsAction
  } = useWizardActions(state, dispatch)

  const setSteps: SetSteps = (steps) => {
    setWizardStepsAction(steps)
  }

  const setValidator = (callback: () => boolean): void => {
    setStepValidator(() => () => callback())
  }

  const setOnNextHandle = useCallback(
    (callback: () => Promise<boolean>): void => {
      setNextCallback(() => () => callback())
    },
    [setNextCallback]
  )

  const changeStep: ChangeStep = async (step) => {
    if (!stepValidator()) {
      return
    }

    if (!(await nextCallback())) {
      return
    }

    if (!isNil(step) && is(Number, step)) {
      setActiveStepAction(step)
    } else {
      setActiveStepAction(state.activeStep + 1)
    }
  }

  const setVisibility: SetVisibility = (isVisible) => {
    setWizardVisibilityAction(isVisible)
  }

  return (
    <WizardContext.Provider
      value={{
        state,
        setSteps,
        changeStep,
        setVisibility,
        setValidator,
        setOnNextHandle
      }}
    >
      {children}
    </WizardContext.Provider>
  )
}
