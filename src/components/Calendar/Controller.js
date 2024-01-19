import React, { useState, useEffect } from 'react';

import MenuBar from './views/MenuBar';
import Widget from './views/Widget';
import Daily from './views/Daily';
import Weekly from './views/Weekly';
import Monthly from './views/Monthly';

import './Calendar.css';

function Calendar({ view = 'Monthly', year, month, ...props}){
    // Default to current month and year if not specified
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // getMonth() returns 0-11
    const currentDay = currentDate.getDate();
    
    const [displayYear, setDisplayYear] = useState(year || currentYear);
    const [displayMonth, setDisplayMonth] = useState(month || currentMonth);

    useEffect(() => {
        // If year and month props change, update the internal state
        if (year) setDisplayYear(year);
        if (month) setDisplayMonth(month);
    }, [year, month]);

    // Array of month names
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];

    // Fetching the month name from the array
    const monthName = monthNames[displayMonth - 1];    

    const showView = (view) => {
        switch(view){
            case "Daily":
                return <Daily year={year} month={month} {...props} />;
            case "Weekly":
                return <Weekly year={year} month={month} {...props} />;
            default:
                return <Monthly year={year} month={month} {...props} />;
        }
    }

    return (
        <div class="d-flex flex-column">
            <div><MenuBar year={year} monthName={monthName} /></div>
            <div class="d-flex flex-row">
                <div><Widget /></div>
                <div>{showView(view)}</div>
            </div>
        </div>
    )

}

export default Calendar;