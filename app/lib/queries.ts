import client from '~/lib/postgres-client';
import { HikingTrail } from './types';

// Fetch all hiking trails
export const fetchHikingTrails = async (): Promise<HikingTrail[]> => {
  try {
    const res = await client.query<HikingTrail>('SELECT * FROM hiking_trails');
    return res.rows;
  } catch (err) {
    console.error('Unexpected error:', err);
    throw new Error('Failed to load hiking trails');
  }
};

// Fetch a single hiking trail by ID
export const fetchHikingTrailById = async (
  id: number
): Promise<HikingTrail> => {
  try {
    const res = await client.query<HikingTrail>(
      'SELECT * FROM hiking_trails WHERE id = $1',
      [id]
    );
    if (res.rows.length === 0) {
      throw new Error('Trail not found');
    }
    return res.rows[0];
  } catch (err) {
    console.error('Unexpected error:', err);
    throw new Error('Failed to load hiking trail');
  }
};

// Fetch all hiking trails
export const fetchEvents = async (): Promise<Event[]> => {
  try {
    const res = await client.query<HikingTrail>(
      'SELECT * FROM events ORDER BY date'
    );
    return res.rows;
  } catch (err) {
    console.error('Unexpected error:', err);
    throw new Error('Failed to load events');
  }
};

export const fetchEventById = async (id: number): Promise<HikingTrail> => {
  try {
    const res = await client.query<HikingTrail>(
      'SELECT * FROM events WHERE id = $1',
      [id]
    );
    if (res.rows.length === 0) {
      throw new Error('Event not found');
    }
    return res.rows[0];
  } catch (err) {
    console.error('Unexpected error:', err);
    throw new Error('Failed to load events');
  }
};
