export interface Room {
    type: 'SGL' | 'DBL' | 'TWN' | 'TRP' | 'DBL_CHD';
    guests: Guest[];
}

export interface Guest {
    firstName: string;
    lastName: string;
    birthDate?: string;
} 