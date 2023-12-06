type Project = {
    id: number;
    title: string;
    content: string;
    techStack: string[];
    demoUrl: string;
    gitHubUrl?: string;
    image: string;
    teamSize?: number | null;
    createdAt?: Date | null;
    updatedAt?: Date | null;
    published: boolean;
};

type Certificate = {
    id: number;
    title: string;
    content: string;
    url: string;
    image: string;
    createdAt?: Date | null;
    updatedAt?: Date | null;
    published: boolean;
};
