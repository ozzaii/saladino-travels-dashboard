import React from 'react';
import ReservationForm from './components/ReservationForm';

export default function App() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-12">
                    ✈️ RouteFlow - Saladino Travels
                </h1>
                <ReservationForm />
            </div>
        </div>
    );
} 