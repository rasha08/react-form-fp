import {
  SET_ACTIVE_STEP,
  SET_WIZARD_STEPS,
  SET_WIZARD_VISIBILITY,
  SetActiveStepAction,
  SetWizardStepsAction,
  SetWizardVisibilityAction,
  WizardContextState
} from './types'

type WizardReducer = (
  state: WizardContextState,
  action: SetWizardVisibilityAction | SetActiveStepAction | SetWizardStepsAction
) => WizardContextState
export const wizardReducer: WizardReducer = (state, action) => {
  switch (action.type) {
    case SET_WIZARD_VISIBILITY:
      return { ...state, ...{ showWizard: action.payload } }
    case SET_ACTIVE_STEP:
      return { ...state, ...{ activeStep: action.payload } }
    case SET_WIZARD_STEPS:
      return { ...state, ...{ steps: [...action.payload] } }
    default:
      return state
  }
}
