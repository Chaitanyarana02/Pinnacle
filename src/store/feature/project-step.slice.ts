import { createAppSlice } from "../store.utils";
interface ProjectStepState { 
    projectName: string, 
    isVisible: boolean, 
    currentStep: number ,
    currentSubStepOfOne: number,
    currentSubStepOfLastStep?: number
}
const initialState: ProjectStepState = {
    projectName: '',
    isVisible: false,
    currentStep: 1,
    currentSubStepOfOne: 1,
    currentSubStepOfLastStep: 1
}
const projectStepSlice = createAppSlice({
    name: 'projectStep',
    initialState,
    reducers: (create) => ({
        updateProjectStepProjectName: create.reducer<string>((state , action) => {
            state.projectName = action.payload;
        }),
        updateCurrentStep: create.reducer<number>((state, action) => {
            state.currentStep = action.payload;
        }),
        updateCurrentSubStepOne: create.reducer<number>((state, action) => {
            state.currentSubStepOfOne = action.payload;
        }),
        updateCurrentSubStepOfLastStep: create.reducer<number>((state, action) => {
            state.currentSubStepOfLastStep = action.payload;
        }),
        updateIsStepVisible: create.reducer<boolean>((state, action) => {
            state.isVisible = action.payload;
        })
    })

});

export const {updateCurrentStep , updateIsStepVisible, updateProjectStepProjectName, updateCurrentSubStepOne, updateCurrentSubStepOfLastStep} = projectStepSlice.actions
export default projectStepSlice.reducer;
