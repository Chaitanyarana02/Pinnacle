const AddEditHeaderComponent = ({ projectName, isVisible, currentStep }: { projectName: string, isVisible: boolean, currentStep: number }) => {
    const getStep = (number: number) => {
        return (
            <div className={`border-circle border-1 w-3rem h-3rem flex align-items-center justify-content-center font-bold text-500  ${(currentStep > number ? 'text-white bg-green-500 border-white' : 'surface-border')} ${(currentStep === number ? ' surface-300 text-primary' : '')}`}>
                {
                    currentStep > number ? <i className="pi pi-check"></i> : number
                }
            </div>
        )
    }
    return (
        <>
            <div className="flex justify-content-between shadow-1 p-4 align-items-center">
                <div>
                    <span className="font-semibold text-3xl">{projectName}</span>
                </div>
                {isVisible ?

                    <div className="flex  justify-content-between w-6 flex-wrap">
                        <div className="flex align-items-center">

                            {getStep(1)}
                            <span className="ml-3 font-medium text-xl text-700">Project Structure</span>

                        </div>

                        <div className="flex align-items-center">

                            {getStep(2)}
                            <span className="ml-3 font-medium text-xl text-700">Project Functions</span>

                        </div>
                        <div className="flex align-items-center">
                            {getStep(3)}
                            <span className="ml-3 font-medium text-xl text-700">Project Detailings</span>

                        </div>
                    </div>
                    : null}
                <div>
                    <i className="pi pi-times text-4xl text-500"></i>
                </div>
            </div>
        </>
    )
};
export default AddEditHeaderComponent