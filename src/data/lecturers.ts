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
        name: "Dr. Muhammad Iqbal, S.T., M.T., M.M.",
        role: "Head of Research Laboratory",
        nip: "08820072",
        image: "/lecturer/1.png",
        details: {
            researchFocus: [
                "Product Design & Development",
                "Ergonomics & Human Factors",
                "Sustainable Manufacturing",
            ],
            publications: [
                "Design of Ergonomic Chair for Office Workers (2023)",
                "Analysis of Cognitive Workload in assembly lines (2022)",
            ],
            achievements: ["Best Researcher Award 2023"],
        },
    },
    {
        id: "agus-kusnayat",
        name: "Agus Kusnayat, S.T., M.T.",
        role: "Member",
        nip: "20690006",
        image: "/lecturer/2.png",
        details: {
            researchFocus: ["Industrial Design", "CAD/CAM"],
            publications: ["Optimizing production flow using simulation (2023)"],
            achievements: [],
        },
    },
    {
        id: "dino-caesaron",
        name: "Dino Caesaron, S.T., M.T., Ph.D",
        role: "Member",
        nip: "22860004",
        image: "/lecturer/3.png",
        details: {
            researchFocus: ["Occupational Health & Safety", "Biomechanics"],
            publications: ["Ergonomic assessment of manual material handling (2023)"],
            achievements: [],
        },
    },
    {
        id: "mira-rahayu",
        name: "Mira Rahayu, S.T., M.T.",
        role: "Member",
        nip: "08820059",
        image: "/lecturer/4.png",
        details: {
            researchFocus: ["Supply Chain Management", "Logistics"],
            publications: [],
            achievements: [],
        },
    },
    {
        id: "yusuf-nugroho",
        name: "Dr. Yusuf Nugroho Doyo Yekti S.T., M.T.",
        role: "Member",
        nip: "14840018",
        image: "/lecturer/5.png",
        details: {
            researchFocus: ["Manufacturing Systems", "Process Optimization"],
            publications: [],
            achievements: [],
        },
    },
    {
        id: "ilma-mufidah",
        name: "Ilma Mufidah S.T., M.T., MBA., Ph.D",
        role: "Member",
        nip: "15890066",
        image: "/lecturer/6.png",
        details: {
            researchFocus: ["Business Management", "Technopreneurship"],
            publications: [],
            achievements: [],
        },
    },
    {
        id: "sheila-amalia",
        name: "Sheila Amalia Salma, S.T., M.T.",
        role: "Member",
        nip: "23940023",
        image: "/lecturer/7.png",
        details: {
            researchFocus: ["Industrial Engineering", "System Analysis"],
            publications: [],
            achievements: [],
        },
    },
    {
        id: "susmitha-canny",
        name: "Susmitha Canny S.T., MBA., Ph.D",
        role: "Member",
        nip: "24970016",
        details: {
            researchFocus: ["Engineering Management", "Economics"],
            publications: [],
            achievements: [],
        },
    },
    {
        id: "bagus-anugrah",
        name: "Bagus Anugrah Ramadhan, S.T., M.T",
        role: "Member",
        nip: "24960019",
        details: {
            researchFocus: ["Product Design", "Innovation"],
            publications: [],
            achievements: [],
        },
    },
];
