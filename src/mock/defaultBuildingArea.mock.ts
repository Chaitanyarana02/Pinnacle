import { ProjectAreas } from "../interfaces/project.interface";

export const defaultIndoorAreas: ProjectAreas[] = [
    {
        name: "House new",
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
                        
                    },
                    {
                        name: "Living Room",
                        isSelected: true,
                        functions: [],
                        
                    },
                    {
                        name: "Kitchen",
                        isSelected: false,
                        functions: [],
                        
                    },
                    {
                        name: "Guest Bedroom",
                        isSelected: true,
                        functions: [],
                        
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
                isSelected: true,

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

export const defaultOutDoorAreas: ProjectAreas[] = [
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