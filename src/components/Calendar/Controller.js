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
    const [displayView, setDisplayView] = useState(view);

    useEffect(() => {
        // If year and month props change, update the internal state
        if(year){
            setDisplayYear(year);
        }

        if(month){
            setDisplayMonth(month);
        }
    }, [year, month]);

    useEffect(() => {
        if(view){
            setDisplayView(view.toLowerCase());
        } 
    }, [view])

    // Array of month names
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];

    // Fetching the month name from the array
    const monthName = monthNames[displayMonth - 1];    

    const onViewChange = (view) => {
        if(view){
            console.log('Calendar/Controller.js onViewChange: ', view)
            setDisplayView(view);
        }
    }

    const btnPrevious = () => {
        switch(displayView){
            case "daily":
                alert('Previous Day');
                break;
            case "weekly":
                alert('Previous Week');
                break;
            default:
                alert('Previous Month');
        }
    }

    const btnNext = () => {
        switch(displayView){
            case "daily":
                alert('Next Day');
                break;
            case "weekly":
                alert('Next Week');
                break;
            default:
                alert('Next Month');
        }
    }

    const btnToday = () => {
        alert('Today');
    }

    return (
        <div className="d-flex flex-column">
            <div><MenuBar year={displayYear} monthName={monthName} onViewChange={onViewChange} btnToday={btnToday} btnPrevious={btnPrevious} btnNext={btnNext} /></div>
            <div className="d-flex flex-row">
                <div><Widget /></div>
                <div class='calendar-view'>
                {
                    (() => {
                        switch(displayView){
                            case "daily":
                                return <Daily year={displayYear} month={displayMonth} {...props} />;
                            case "weekly":
                                return <Weekly year={displayYear} month={displayMonth} {...props} />;
                            default:
                                return <Monthly year={displayYear} month={displayMonth} {...props} />;
                        }
                    })()
                }                    
                </div>
            </div>
        </div>
    )

}

export default Calendar;