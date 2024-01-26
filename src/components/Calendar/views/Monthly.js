import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

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
    const totalCells = daysInMonth + firstDayOfMonth + daysToAddFromNextMonth;
    

    // Create an array representing the days of the month
    const calendarDays = Array.from({ length: totalCells }, (_, i) => {
        const day = i - firstDayOfMonth + 1;
        return day > 0 ? day : null;
    });

    // Function to determine if the day is 'today'
    const isToday = (day) => {
        return displayYear === currentYear && displayMonth === currentMonth && day === currentDay;
    };    

    // Function to get events for a particular day
    const getEventsForDay = (day) => {
        return events.filter(event => new Date(event.date).getDate() === day &&
                                      new Date(event.date).getMonth() + 1 === displayMonth &&
                                      new Date(event.date).getFullYear() === displayYear);
    };

    return (
        <Container>
            <Row>
                <Col xs={6} md={2} lg={1} className='days d-flex justify-content-center'>Sun</Col>
                <Col xs={6} md={2} lg={1} className='days d-flex justify-content-center'>Mon</Col>
                <Col xs={6} md={2} lg={1} className='days d-flex justify-content-center'>Tues</Col>
                <Col xs={6} md={2} lg={1} className='days d-flex justify-content-center'>Wed</Col>
                <Col xs={6} md={2} lg={1} className='days d-flex justify-content-center'>Thur</Col>
                <Col xs={6} md={2} lg={1} className='days d-flex justify-content-center'>Fri</Col>
                <Col xs={6} md={2} lg={1} className='days d-flex justify-content-center'>Sat</Col>
            </Row>            
            <Row>
                {calendarDays.map((day, index) => (
                    <Col key={index} xs={6} md={2} lg={1} className="mb-4">
                        <div style={{ minHeight: "100px", border: "1px solid #ddd" }}>
                            {day && <div>{day}</div>}
                            {day && getEventsForDay(day).map(event => (
                                <div key={event.id} style={{ background: "#f0f0f0", margin: "5px 0" }}>
                                    {event.title}
                                </div>
                            ))}
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};    

export default Monthly;