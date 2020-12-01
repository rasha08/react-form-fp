import {
  SET_ACTIVE_STEP,
  SET_WIZARD_STEPS,
  SET_WIZARD_VISIBILITY,
  WizardActionDispatcher,
  WizardContextState,
  WizardStep
} from './types'

type SetActiveStep = (activeStep: number) => void
type SetWizardVisibilityAction = (showWizard: boolean) => void
type SetWizardStepsAction = (steps: WizardStep[]) => void

type UserWizardActions = {
  setActiveStepAction: SetActiveStep
  setWizardVisibilityAction: SetWizardVisibilityAction
  setWizardStepsAction: SetWizardStepsAction
}

type WizardActions = (
  state: WizardContextState,
  dispatch: WizardActionDispatcher
) => UserWizardActions

export const useWizardActions: WizardActions = (state, dispatch) => {
  const setActiveStepAction: SetActiveStep = (activeStep) => {
    if (state.activeStep === activeStep) {
      return
    }

    dispatch({
      type: SET_ACTIVE_STEP,
      payload: activeStep
    })
  }

  const setWizardVisibilityAction: SetWizardVisibilityAction = (showWizard) => {
    dispatch({
      type: SET_WIZARD_VISIBILITY,
      payload: showWizard
    })
  }

  const setWizardStepsAction: SetWizardStepsAction = (steps) => {
    dispatch({
      type: SET_WIZARD_STEPS,
      payload: steps
    })
  }

  return {
    setActiveStepAction,
    setWizardVisibilityAction,
    setWizardStepsAction
  }
}
