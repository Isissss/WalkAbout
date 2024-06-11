export type HikingTrail = {
    id: number;
    created_at: string;
    difficulty: number | null;
    distance: number | null;
    image: string | null;
    name: string;
    start_location: string;
};