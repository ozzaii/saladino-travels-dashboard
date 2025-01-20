import React, { useState } from 'react';
import { Reservation } from '../types/reservation';

const generateReference = () => {
    return `RES-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
};

export default function ReservationForm() {
    const [formData, setFormData] = useState<Partial<Reservation>>({
        tourType: 'SUPER_TURKEY',
        paxCount: 1,
        reference: generateReference()
    });

    const [errors, setErrors] = useState<Partial<Record<keyof Reservation, string>>>({});

    const validateForm = (): boolean => {
        const newErrors: Partial<Record<keyof Reservation, string>> = {};
        
        if (!formData.startDate) newErrors.startDate = "Start date is required";
        if (!formData.endDate) newErrors.endDate = "End date is required";
        if (formData.paxCount < 1) newErrors.paxCount = "Must have at least 1 passenger";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('🎉 Form submitted:', formData);
            // Here you'd typically send this to your backend
        }
    };

    // ... rest of your form JSX stays the same ...
} 