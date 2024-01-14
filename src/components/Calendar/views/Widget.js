import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Widget({ year, month }){
    // Default to current month and year if not specified
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // getMonth() returns 0-11
    const currentDay = currentDate.getDate();

    const displayYear = year || currentYear;
    const displayMonth = month || currentMonth;

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

    return (
        <Container className='widget'>   
            <Row className=''>
                <Col xs={8} className='p-0'>
                    <h6>{monthName} {displayYear}</h6>
                </Col>
                <Col className='nav d-flex justify-content-end p-0'>
                    <Button className='p-1' onClick={null}>&lt;</Button>
                    &nbsp;
                    <Button className='p-1' onClick={null}>&gt;</Button>
                </Col>
            </Row>
            <Row>
                {calendarDays.map((day, index) => (
                    <Col key={index} xs={6} md={2} lg={1} className='days'>
                        {day && <Button className={`p-1 ${isToday(day) ? 'today' : ''}`}>{day}</Button>}
                    </Col>
                ))}
            </Row>
        </Container>
    );
};    

export default Widget;