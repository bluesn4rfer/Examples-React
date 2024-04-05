import React, { useState, useEffect } from 'react';

import MenuBar from './views/MenuBar';
import Widget from './views/Widget';
import Daily from './views/Daily';
import Weekly from './views/Weekly';
import Monthly from './views/Monthly';

import './Calendar.css';

function Calendar({ view = 'monthly', year, month, day, ...props}){
    // Default to current month and year if not specified
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // getMonth() returns 0-11
    const currentDay = currentDate.getDate();
    
    const [displayYear, setDisplayYear] = useState(year || currentYear);
    const [displayMonth, setDisplayMonth] = useState(month || currentMonth);
    const [displayDay, setDisplayDay] = useState(day || currentDay);
    const [displayView, setDisplayView] = useState(view.toLowerCase());

    useEffect(() => {
        // If year and month props change, update the internal state
        if(year){
            setDisplayYear(year);
        }

        if(month){
            setDisplayMonth(month);
        }

        if(day){
            setDisplayDay(day);
        }
        
    }, [year, month, day]);

    useEffect(() => {
        if(view){
            setDisplayView(view.toLowerCase());
        } 
    }, [view]);

    const onViewChange = (view) => {
        if(view){
            console.log('Calendar/Controller.js onViewChange: ', view)
            setDisplayView(view);
        }
    }

    const btnPrevious = () => {
        switch(displayView){
            case "daily":
                const prevDay = new Date(displayYear, displayMonth - 1, currentDay - 1);
                setDisplayYear(prevDay.getFullYear());
                setDisplayMonth(prevDay.getMonth() + 1);
                break;
            case "weekly":
                alert('Previous Week');
                break;
            default: // monthly
                let newYear = displayMonth === 1 ? displayYear - 1 : displayYear;
                let newMonth = displayMonth === 1 ? 12 : displayMonth - 1;
                setDisplayYear(newYear);
                setDisplayMonth(newMonth);
        }
    }

    const btnNext = () => {
        switch(displayView){
            case "daily":
                const nextDay = new Date(displayYear, displayMonth - 1, currentDay + 1);
                setDisplayYear(nextDay.getFullYear());
                setDisplayMonth(nextDay.getMonth() + 1);
                break;
            case "weekly":
                alert('Next Week');
                break;
            default: // monthly
                let newYear = displayMonth === 12 ? displayYear + 1 : displayYear;
                let newMonth = displayMonth === 12 ? 1 : displayMonth + 1;
                setDisplayYear(newYear);
                setDisplayMonth(newMonth);
        }
    }

    const btnToday = () => {
        setDisplayYear(currentYear);
        setDisplayMonth(currentMonth);
        setDisplayDay(currentDay);
    }

    const changeDate = (year, month, day) => {
        console.log('changeDate: year = ', year, ' month = ', month, ' day = ', day);
        setDisplayYear(year);
        setDisplayMonth(month);
        setDisplayDay(day);
    }

    return (
        <div className="d-flex flex-column px-2">
            <div className="d-flex flex-row">
                <div className='px-4'><Widget onDayClick={changeDate} year={displayYear} month={displayMonth} day={displayDay} /></div>
                <div className='calendar-view px-4'>
                    <MenuBar className='mx-0 my-1' year={displayYear} month={displayMonth} view={displayView} onViewChange={onViewChange} btnToday={btnToday} btnPrevious={btnPrevious} btnNext={btnNext} />
                {
                    (() => {
                        switch(displayView){
                            case "daily":
                                return <Daily year={displayYear} month={displayMonth} day={displayDay} {...props} />;
                            case "weekly":
                                return <Weekly year={displayYear} month={displayMonth} day={displayDay} {...props} />;
                            default:
                                return <Monthly year={displayYear} month={displayMonth} day={displayDay} {...props} />;
                        }
                    })()
                }                    
                </div>
            </div>
        </div>
    )

}

export default Calendar;