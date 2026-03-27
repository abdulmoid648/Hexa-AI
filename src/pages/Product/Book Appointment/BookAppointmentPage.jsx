import React from 'react';
import BookAppointmentHero from './BookAppointmentHero';
import AI from './AI';
import AppointmentStep from './AppointmentStep';
import Industries from './Industries';

const BookAppointmentPage = () => {
    return (
        <div className="bg-white">
            <BookAppointmentHero />
            <AI />
            <AppointmentStep />
            <Industries />
        </div>
    );
};

export default BookAppointmentPage;
