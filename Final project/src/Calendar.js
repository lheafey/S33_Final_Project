import React from 'react';
import { useHistory } from 'react-router-dom';

const Calendar = () => {
    const history = useHistory();

    const navigateToHome = () => {
        history.push('/');
    };

    const createCalendar = () => {
        const daysInMonth = 30; // Simplified for demo
        let days = [];
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(
                <div key={day} className="day p-4 border border-gray-300 text-center">
                    {day}
                </div>
            );
        }
        return days;
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Interactive Calendar</h1>
            <button
                onClick={navigateToHome}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mb-4"
            >
                Back to Home
            </button>
            <div
                id="calendar"
                className="grid grid-cols-7 gap-2"
            >
                {createCalendar()}
            </div>
        </div>
    );
};

export default Calendar;
