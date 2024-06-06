import { Accordion, AccordionTab } from "primereact/accordion";
import { Divider } from "primereact/divider";
import { ProjectAreaSystemDetails, ProjectAreas } from "../../../interfaces/project.interface";
import { useAppDispatch, useAppSelector } from "../../../store/store.utils";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProjectDetail, updateProjectData, updatebuildingAreaData } from "../../../store/fearure/project-detail.slice";
import { updateCurrentStep, updateIsStepVisible } from "../../../store/fearure/project-step.slice";
import { Button } from "primereact/button";

const ProjectStructureComponent = () => {
    const projectDetailState = useAppSelector(
        (state) => state.projectDetailState
    );
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const defaultIndoorAreas: ProjectAreas[] = [
        {
            name: "House",
            internalName: "house",
            description: "test",
            isSelected: false,
            floors: [
                {
                    name: "Basement",
                    isSelected: false,

                    floorRooms: [
                        {
                            name: "Bedroom",
                            isSelected: false,
                            functions: [],
                            systemDetails: {} as ProjectAreaSystemDetails,
                        },
                        {
                            name: "Living Room",
                            isSelected: true,
                            functions: [],
                            systemDetails: {} as ProjectAreaSystemDetails,
                        },
                        {
                            name: "Kitchen",
                            isSelected: false,
                            functions: [],
                            systemDetails: {} as ProjectAreaSystemDetails,
                        },
                        {
                            name: "Guest Bedroom",
                            isSelected: true,
                            functions: [],
                            systemDetails: {} as ProjectAreaSystemDetails,
                        }
                    ],
                },
                {
                    name: "Lower Ground",
                    isSelected: false,

                    floorRooms: [],
                },
                {
                    name: "Ground Floor",
                    isSelected: false,

                    floorRooms: [],
                },
                {
                    name: "First Floor",
                    isSelected: true,

                    floorRooms: [],
                },
                {
                    name: "Second Floor",
                    isSelected: true,

                    floorRooms: [],
                },
                {
                    name: "Third Floor",
                    isSelected: false,

                    floorRooms: [],
                },
            ],
        },
        {
            name: "Garage",
            internalName: "garage",
            description: "test",
            isSelected: false,
            floors: [],
        },
        {
            name: "Shed",
            internalName: "shed",
            description: "test",
            isSelected: false,
            floors: [],
        },
    ];

    const defaultOutDoorAreas: ProjectAreas[] = [
        {
            name: "Front Garden",
            internalName: "Front Garden",
            description: "",
            isSelected: false,
            floors: [],
        },
        {
            name: "Back Garden",
            internalName: "back",
            description: "",
            isSelected: false,
            floors: [],
        },
        {
            name: "Terrace",
            internalName: "Terrace",
            description: "",
            isSelected: false,
            floors: [],
        },
        {
            name: "Right of House",
            internalName: "Right of House",
            description: "",
            isSelected: false,
            floors: [],
        },
        {
            name: "Left of House",
            internalName: "Left of House",
            description: "",
            isSelected: false,
            floors: [],
        },
        {
            name: "Balcony",
            internalName: "Balcony",
            description: "",
            isSelected: false,
            floors: [],
        },
    ];
    useEffect(() => {
        dispatch(updateCurrentStep(1));
        dispatch(updateIsStepVisible(true))

        if (id) {
            dispatch(fetchProjectDetail(""));
        } else {
            dispatch(
                updateProjectData([
                    { name: 'Indoor Area', areas: defaultIndoorAreas },
                    { name: 'OutDoor Area', areas: defaultOutDoorAreas }
                ])
            );
        }
    }, []);
    return (
        <div className="flex justify-content-around mt-3">
            <div>
                <section className="mt-4">
                    <div className="m-auto max-w-max text-4xl font-semibold">Define building areas</div>
                    <p className="text-500 text-lg mt-3">
                        Choose the areas included in your building by selecting from the
                        options below. These are grouped by Indoor and Outdoor locations.
                    </p>
                </section>
                {
                    projectDetailState?.projectDetail?.buildingAreas?.map((buildingArea, buildingAreaIndex) => (
                        <section className="flex w-full justify-content-center p-5" key={buildingArea.name}>

                            <div style={{ width: "58rem" }}>
                                <div className="w-full">
                                    <span className="text-2xl font-semibold">{buildingArea.name}</span>

                                    <Divider className="m-0 mt-4" />
                                </div>
                                <div className="flex flex-column w-full mt-3">
                                    {buildingArea?.areas?.map(
                                        (area, index) => {
                                            return (
                                                <div
                                                    className="flex justify-content-between align-items-center  h-4rem"
                                                    key={area.name + "_" + index}
                                                >
                                                    <div className="w-14rem">
                                                        <Checkbox
                                                            onChange={(e) => {
                                                                dispatch(
                                                                    updatebuildingAreaData({
                                                                        buildingAreaIndex,
                                                                        index,
                                                                        value: { ...area, isSelected: e.checked },
                                                                    })
                                                                );
                                                            }}
                                                            checked={area.isSelected || false}
                                                        ></Checkbox>
                                                        <span className="text-xl font-semibold text-600">
                                                            {" "}
                                                            {area.internalName}
                                                        </span>
                                                    </div>
                                                    <InputText
                                                        placeholder={area.name}
                                                        value={area.name}
                                                        onChange={(e) =>
                                                            dispatch(
                                                                updatebuildingAreaData({
                                                                    buildingAreaIndex,
                                                                    index,
                                                                    value: { ...area, name: e.target?.value },
                                                                })
                                                            )
                                                        }
                                                        autoFocus
                                                    />
                                                    <InputText
                                                        className="w-18rem"
                                                        placeholder="Additional Comment (Optional)"
                                                        value={area.description}
                                                        onChange={(e) =>
                                                            dispatch(
                                                                updatebuildingAreaData({
                                                                    buildingAreaIndex,
                                                                    index,
                                                                    value: { ...area, description: e.target?.value },
                                                                })
                                                            )
                                                        }
                                                    />
                                                </div>
                                            );
                                        }
                                    )}
                                    <b className="text-primary mt-3">
                                        <i className="pi pi-plus" /> Add another
                                    </b>
                                </div>
                            </div>
                        </section>)
                    )

                }
                <div className="flex justify-content-between">
                    <div>
                        <Button label="Back" icon="pi pi-angle-left" rounded  severity="secondary" size="large"/>
                    </div>
                    <div>
                        {
                            [1,2,3].map(v => (
                                <div  style={{
                                    height: '0.625rem',
                                    width: '0.625rem',
                                    borderRadius: '50%',
                                    background:'blue'
                                }}></div>
                            ))
                        }
                    </div>
                    <div>
                        <Button label="Define Floors" icon="pi pi-angle-right" rounded iconPos="right" size="large"/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProjectStructureComponent