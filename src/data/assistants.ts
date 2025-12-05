export interface Assistant {
    id: string;
    name: string;
    role: "Assistant Coordinator" | "Admin" | "Division A" | "Division B" | "Division C";
    image?: string;
}

export const assistants: Assistant[] = [
    // Assistant Coordinator (1 person)
    {
        id: "coord-1",
        name: "NAME",
        role: "Assistant Coordinator",
    },
    // Admin (2 persons)
    {
        id: "admin-1",
        name: "NAME",
        role: "Admin",
    },
    {
        id: "admin-2",
        name: "NAME",
        role: "Admin",
    },
    // Division A (3 persons)
    {
        id: "div-a-1",
        name: "NAME",
        role: "Division A",
    },
    {
        id: "div-a-2",
        name: "NAME",
        role: "Division A",
    },
    {
        id: "div-a-3",
        name: "NAME",
        role: "Division A",
    },
    // Division B (3 persons)
    {
        id: "div-b-1",
        name: "NAME",
        role: "Division B",
    },
    {
        id: "div-b-2",
        name: "NAME",
        role: "Division B",
    },
    {
        id: "div-b-3",
        name: "NAME",
        role: "Division B",
    },
    // Division C (3 persons)
    {
        id: "div-c-1",
        name: "NAME",
        role: "Division C",
    },
    {
        id: "div-c-2",
        name: "NAME",
        role: "Division C",
    },
    {
        id: "div-c-3",
        name: "NAME",
        role: "Division C",
    },
];
