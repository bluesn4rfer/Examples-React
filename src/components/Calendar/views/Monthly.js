import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

function Monthly({ events, year, month, onPrevMonth, onNextMonth }){
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

    const daysInMonth = new Date(displayYear, displayMonth, 0).getDate();
    const firstDayOfMonth = new Date(displayYear, displayMonth - 1, 1).getDay();
    const lastDayOfMonthWeekday = new Date(displayYear, displayMonth - 1, daysInMonth).getDay();
    const daysToAddFromNextMonth = 14 - lastDayOfMonthWeekday - 1; // "-1" because the last day itself counts
    const totalRows = Math.ceil((daysInMonth + firstDayOfMonth) / 7);
    const totalCells = totalRows * 7;    
    //const totalCells = daysInMonth + firstDayOfMonth + daysToAddFromNextMonth;
    

    // Create an array representing the days of the month
    // const calendarDays = Array.from({ length: totalCells }, (_, i) => {
    //     const day = i - firstDayOfMonth + 1;
    //     return day > 0 ? day : null;
    // });
    const calendarDays = Array.from({ length: totalCells }, (_, i) => {
        const day = i - firstDayOfMonth + 1;
        return day > 0 && day <= daysInMonth ? day : null;
    });

    // Function to determine if the day is 'today'
    const isToday = (day) => {
        return displayYear === currentYear && displayMonth === currentMonth && day === currentDay;
    };    

    // Function to get events for a particular day
    const getEventsForDay = (day) => {
        console.log('Monthly getEventsForDay() day = ', day);
        const dayEvents = events.filter(event => {
            console.log('event.date = ', event.date);
            const eventDate = new Date(event.date);
            return eventDate.getUTCDate() === day && eventDate.getUTCMonth() + 1 === displayMonth && eventDate.getUTCFullYear() === displayYear
        });
        console.log('Monthly getEventsForDay() dayEvents[] = ', dayEvents);
        return dayEvents;
    };

    // Function to split calendar days into weeks
    const splitIntoWeeks = (days) => {
        const weeks = [];
        for (let i = 0; i < days.length; i += 7) {
            weeks.push(days.slice(i, i + 7));
        }
        return weeks;
    };

    const weeks = splitIntoWeeks(calendarDays);

    return (
        <div className='calendar-monthly'>
            <Row>
                <Col xs={6} md={2} lg={1} className='theme-primary days d-flex flex-fill justify-content-center'>Sun</Col>
                <Col xs={6} md={2} lg={1} className='theme-primary days d-flex flex-fill justify-content-center'>Mon</Col>
                <Col xs={6} md={2} lg={1} className='theme-primary days d-flex flex-fill justify-content-center'>Tues</Col>
                <Col xs={6} md={2} lg={1} className='theme-primary days d-flex flex-fill justify-content-center'>Wed</Col>
                <Col xs={6} md={2} lg={1} className='theme-primary days d-flex flex-fill justify-content-center'>Thur</Col>
                <Col xs={6} md={2} lg={1} className='theme-primary days d-flex flex-fill justify-content-center'>Fri</Col>
                <Col xs={6} md={2} lg={1} className='theme-primary days d-flex flex-fill justify-content-center'>Sat</Col>
            </Row>  
            {weeks.map((week, weekIndex) => (
                <Row key={weekIndex}>
                    {week.map((day, dayIndex) => {          
                    //{calendarDays.map((day, index) => {
                        // const isPreviousMonth = index < firstDayOfMonth;
                        // const isNextMonth = index >= daysInMonth + firstDayOfMonth;

                        // Determine if the day is from the previous or next month
                        const isPreviousMonth = weekIndex === 0 && dayIndex < firstDayOfMonth;
                        const isNextMonth = weekIndex === weeks.length - 1 && dayIndex > lastDayOfMonthWeekday;

                        let displayDay;
                        if (isPreviousMonth) {
                            const prevMonthDays = new Date(displayYear, displayMonth - 1, 0).getDate();
                            displayDay = prevMonthDays - (firstDayOfMonth - dayIndex - 1);
                        } else if (isNextMonth) {
                            displayDay = (weekIndex * 7) + dayIndex - daysInMonth - firstDayOfMonth + 1;
                        } else {
                            displayDay = day;
                        }

                        return (
                            <Col key={dayIndex} xs={6} md={2} lg={1} className="days d-flex flex-fill p-0">
                                <div className="d-flex flex-fill overflow-hidden" style={{ minHeight: "100px" }}>
                                    {displayDay && <div className="p-1">{displayDay}</div>}
                                    <div className='d-flex flex-fill flex-column'>
                                    {displayDay && getEventsForDay(day).map(event => (
                                        <div key={event.id} className="text-nowrap overflow-hidden mt-0 mb-1 mx-0" style={{ background: "#f0f0f0" }}>
                                            {event.title}
                                        </div>
                                    ))}
                                    </div>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            ))}
        </div>
    );
};    

export default Monthly;