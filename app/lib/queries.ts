import client from "~/lib/postgres-client";
import { HikingTrail } from "./types";

export const fetchHikingTrails = async (): Promise<HikingTrail[]> => {
    try {
        const res = await client.query<HikingTrail>(
            'SELECT * FROM hiking_trails'
        );
        return res.rows;
    } catch (err) {
        console.error("Unexpected error:", err);
        throw new Error("Failed to load hiking trails");
    }
};
