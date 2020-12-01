export const SET_ACTIVE_STEP = 'SET_ACTIVE_STEP'
export const SET_WIZARD_VISIBILITY = 'SET_WIZARD_VISIBILITY'
export const SET_WIZARD_STEPS = 'SET_WIZARD_STEPS'

export type SetActiveStepAction = {
  type: typeof SET_ACTIVE_STEP
  payload: number
}

export type SetWizardVisibilityAction = {
  type: typeof SET_WIZARD_VISIBILITY
  payload: boolean
}

export type SetWizardStepsAction = {
  type: typeof SET_WIZARD_STEPS
  payload: WizardStep[]
}

export type WizardStep = {
  subtitle: string
  formName: string
}

export type WizardContextState = {
  activeStep: number
  showWizard: boolean
  steps: WizardStep[]
}

export type WizardActionDispatcher = (
  action: SetActiveStepAction | SetWizardVisibilityAction | SetWizardStepsAction
) => void
