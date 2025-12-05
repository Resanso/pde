export interface Lecturer {
    id: string;
    name: string;
    role: "Head of Research Laboratory" | "Member" | "Research Assistant";
    nip: string;
    image?: string;
    details: {
        researchFocus: string[];
        publications: string[];
        achievements: string[];
    };
}

export const lecturers: Lecturer[] = [
    {
        id: "muhammad-iqbal",
        name: "Dr. Muhammad Iqbal, S.T., M.T.",
        role: "Head of Research Laboratory",
        nip: "198001012005011001",
        details: {
            researchFocus: [
                "Product Design & Development",
                "Ergonomics & Human Factors",
                "Sustainable Manufacturing",
            ],
            publications: [
                "Design of Ergonomic Chair for Office Workers (2023)",
                "Analysis of Cognitive Workload in assembly lines (2022)",
                "Sustainable Product Lifecycle Management: A Review (2021)",
            ],
            achievements: [
                "Best Researcher Award 2023",
                "Grant Recipient for National Research Innovation 2022",
            ],
        },
    },
    {
        id: "agus-kusnayat",
        name: "Agus Kusnayat, S.T., M.T.",
        role: "Member",
        nip: "198202022006021002",
        details: {
            researchFocus: ["Industrial Design", "CAD/CAM"],
            publications: ["Optimizing production flow using simulation (2023)"],
            achievements: ["Best Lecturer 2021"],
        },
    },
    {
        id: "dino-caesaron",
        name: "Dino Caesaron, S.T., M.T.",
        role: "Member",
        nip: "198503032008031003",
        details: {
            researchFocus: ["Occupational Health & Safety", "Biomechanics"],
            publications: ["Ergonomic assessment of manual material handling (2023)"],
            achievements: [],
        },
    },
    {
        id: "hilma-raimona",
        name: "Hilma Raimona Zadry, S.T., M.T., Ph.D.",
        role: "Member",
        nip: "197804042003042004",
        details: {
            researchFocus: ["Macroergonomics", "Safety Culture"],
            publications: ["Safety culture maturity model in manufacturing (2022)"],
            achievements: ["Research Grant 2023"],
        },
    },
    {
        id: "difana-meilani",
        name: "Difana Meilani, S.T., M.T.",
        role: "Member",
        nip: "198105052005052005",
        details: {
            researchFocus: ["Quality Engineering", "Product Quality"],
            publications: ["Quality control implementation in SMEs (2023)"],
            achievements: [],
        },
    },
    {
        id: "elita-amrina",
        name: "Elita Amrina, S.T., M.T., Ph.D.",
        role: "Member",
        nip: "198306062006062006",
        details: {
            researchFocus: ["Sustainable Supply Chain", "Performance Measurement"],
            publications: ["Green supply chain management indicators (2021)"],
            achievements: ["Best Paper Award 2022"],
        },
    },
];
