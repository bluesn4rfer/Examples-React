import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

function Widget({ year, month, onMonthChange, onDayClick }){
    const {currentYear, currentMonth, currentDay} = useMemo(() => {
        const currentDate = new Date();
        return {
            currentYear: currentDate.getFullYear(),
            currentMonth: currentDate.getMonth() + 1,
            currentDay: currentDate.getDate(),
        };
    }, []);
    
    // Default to current month and year if not specified
    const [displayYear, setDisplayYear] = useState(year || currentYear);
    const [displayMonth, setDisplayMonth] = useState(month || currentMonth);

    useEffect(() => {
        // If year and month props change, update the internal state
        if (year) setDisplayYear(year);
        if (month) setDisplayMonth(month);
    }, [year, month]);

    // Array of month names
    const monthNames = useMemo(() => ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"], []);

    const { monthName, daysInMonth, firstDayOfMonth, daysToAddFromNextMonth, totalCells } = useMemo(() => {
        // Fetching the month name from the array
        const monthName = monthNames[displayMonth - 1];

        const daysInMonth = new Date(displayYear, displayMonth, 0).getDate();
        const firstDayOfMonth = new Date(displayYear, displayMonth - 1, 1).getDay();
        const lastDayOfMonthWeekday = new Date(displayYear, displayMonth - 1, daysInMonth).getDay();
        const daysToAddFromNextMonth = 14 - lastDayOfMonthWeekday - 1;
        const totalCells = daysInMonth + firstDayOfMonth + daysToAddFromNextMonth;

        return { monthName, daysInMonth, firstDayOfMonth, daysToAddFromNextMonth, totalCells };
    }, [monthNames, displayYear, displayMonth]);    

    // Create an array representing the days of the month
    const calendarDays = Array.from({ length: totalCells }, (_, i) => {
        const day = i - firstDayOfMonth + 1;
        return day > 0 ? day : null;
    });

    // Function to determine if the day is 'today'
    const isToday = (day) => {
        return displayYear === currentYear && displayMonth === currentMonth && day === currentDay;
    };    

     // Function to navigate to the previous month
    const previousMonth = () => {
        setDisplayMonth(prevMonth => {
            const newMonth = prevMonth === 1 ? 12 : prevMonth - 1;
            if (prevMonth === 1) {
                setDisplayYear(prevYear => prevYear - 1);
            }
            if (onMonthChange) {
                onMonthChange(prevMonth === 1 ? displayYear - 1 : displayYear, newMonth);
            }
            return newMonth;
        });
    };
    
    // Function to navigate to the next month
    const nextMonth = () => {
        setDisplayMonth(prevMonth => {
            const newMonth = prevMonth === 12 ? 1 : prevMonth + 1;
            if (prevMonth === 12) {
                setDisplayYear(prevYear => prevYear + 1);
            }
            if (onMonthChange) {
                onMonthChange(prevMonth === 12 ? displayYear + 1 : displayYear, newMonth);
            }
            return newMonth;
        });
    };

    const handleClick = useCallback((year, month, day) => {
        console.debug('Widget: handleClick() year = ', year);
        console.debug('Widget: handleClick() month = ', month);
        console.debug('Widget: handleClick() day = ', day);

        if (onDayClick) {
            onDayClick(year, month, day);
        }
    }, [onDayClick]);

    return (
        <div className='widget'>   
            <Row className=''>
                <Col xs={8} className='p-0'>
                    <h6>{monthName} {displayYear}</h6>
                </Col>
                <Col className='nav d-flex justify-content-end p-0'>
                    <Button className='p-1' onClick={previousMonth}>&lt;</Button>
                    &nbsp;
                    <Button className='p-1' onClick={nextMonth}>&gt;</Button>
                </Col>
            </Row>
            <Row>
                <Col xs={6} md={2} lg={1} className='days d-flex justify-content-center'>Su</Col>
                <Col xs={6} md={2} lg={1} className='days d-flex justify-content-center'>Mo</Col>
                <Col xs={6} md={2} lg={1} className='days d-flex justify-content-center'>Tu</Col>
                <Col xs={6} md={2} lg={1} className='days d-flex justify-content-center'>We</Col>
                <Col xs={6} md={2} lg={1} className='days d-flex justify-content-center'>Th</Col>
                <Col xs={6} md={2} lg={1} className='days d-flex justify-content-center'>Fr</Col>
                <Col xs={6} md={2} lg={1} className='days d-flex justify-content-center'>Sa</Col>
            </Row>
            <Row>
            {calendarDays.map((day, index) => {
                const isPreviousMonth = index < firstDayOfMonth;
                const isNextMonth = index >= daysInMonth + firstDayOfMonth;

                const btnMonth = displayMonth;
                const btnYear = displayYear;

                let displayDay;
                if (isPreviousMonth) {
                    const prevMonthDays = new Date(displayYear, displayMonth - 1, 0).getDate();
                    displayDay = prevMonthDays - (firstDayOfMonth - index - 1);  
                    if(btnMonth - 1 === 0){
                        btnMonth = 12;
                        btnYear -= 1;
                    }
                    else{
                        btnMonth -= 1;
                    }                                      
                } else if (isNextMonth) {
                    displayDay = index - daysInMonth - firstDayOfMonth + 1;
                    if(btnMonth + 1 === 13){
                        btnMonth = 1;
                        btnYear += 1;
                    }
                    else{
                        btnMonth += 1;
                    }                     
                } else {
                    displayDay = day;
                }

                const  btnDay = displayDay;

                const dayClass = `days ${!isPreviousMonth && !isNextMonth ? 'current-month' : 'other-month'} d-flex justify-content-center`;
                const btnClass = `${isToday(displayDay) && !isPreviousMonth && !isNextMonth ? 'btn-success' : ''}`;

                return (
                    <Col key={index} xs={6} md={2} lg={1} className={dayClass}>                        
                        <Button 
                            className={btnClass}
                            onClick={() => handleClick(btnYear, btnMonth, btnDay)} 
                        >{displayDay}</Button>                        
                    </Col>
                );
            })}
            </Row>
        </div>
    );
};    

export default Widget;