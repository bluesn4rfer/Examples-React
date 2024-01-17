import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Widget({ year, month, onMonthChange }){
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
    const totalCells = daysInMonth + firstDayOfMonth;

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
            if (prevMonth === 1) {
                setDisplayYear(prevYear => prevYear - 1);
                return 12;
            } else {
                return prevMonth - 1;
            }
        });
        if (onMonthChange) onMonthChange(displayYear, displayMonth - 1);
    };

    // Function to navigate to the next month
    const nextMonth = () => {
        setDisplayMonth(prevMonth => {
            if (prevMonth === 12) {
                setDisplayYear(prevYear => prevYear + 1);
                return 1;
            } else {
                return prevMonth + 1;
            }
        });
        if (onMonthChange) onMonthChange(displayYear, displayMonth + 1);
    };

    return (
        <Container className='widget'>   
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
                <Col xs={6} md={2} lg={1} className='days d-flex justify-content-center'>S</Col>
                <Col xs={6} md={2} lg={1} className='days d-flex justify-content-center'>M</Col>
                <Col xs={6} md={2} lg={1} className='days d-flex justify-content-center'>T</Col>
                <Col xs={6} md={2} lg={1} className='days d-flex justify-content-center'>W</Col>
                <Col xs={6} md={2} lg={1} className='days d-flex justify-content-center'>T</Col>
                <Col xs={6} md={2} lg={1} className='days d-flex justify-content-center'>F</Col>
                <Col xs={6} md={2} lg={1} className='days d-flex justify-content-center'>S</Col>
            </Row>
            <Row>
            {calendarDays.map((day, index) => {
                const currentWeek = Math.floor((index + 1) / 7);
                const nextMonthStartIndex = daysInMonth + firstDayOfMonth;
                const isPreviousMonth = index < firstDayOfMonth;
                const isNextMonth = index >= nextMonthStartIndex;
                const isVisible = !isNextMonth || currentWeek === 0;

                if((isPreviousMonth) || (isNextMonth)){
                    return (
                        <Col key={index} xs={6} md={2} lg={1} className="days d-flex justify-content-center">
                        {<Button className={`${isToday(day) ? 'today' : ''}`}>{index}</Button>}
                        </Col>
                    );
                }

                return (
                    isVisible && (
                        <Col key={index} xs={6} md={2} lg={1} className="days d-flex justify-content-center">
                        {day && <Button className={`${isToday(day) ? 'today' : ''}`}>{day}</Button>}
                        </Col>
                    )
                );
            })}
            </Row>
        </Container>
    );
};    

export default Widget;