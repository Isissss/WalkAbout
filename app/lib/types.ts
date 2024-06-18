export type HikingTrail = {
  id: number;
  created_at: string;
  difficulty: number | null;
  distance: number | null;
  image: string | null;
  accessibility: string | null;
  facilities: string | null;
  description: string | null;
  name: string;
  start_location: string;
};

export type Event = {
  id: number;
  created_at: string;
  name: number | null;
  date: string | null;
  time: string | null;
  start_location: string;
  image: string | null;
  limit: number | null;
  description: string | null;
};
