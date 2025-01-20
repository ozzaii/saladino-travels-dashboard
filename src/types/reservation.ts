export interface Reservation {
    reference: string;
    tourType: 'SUPER_TURKEY' | 'IST_CAP' | 'TURKEY_DUBAI';
    startDate: string;
    endDate: string;
    paxCount: number;
} 