import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Mini({ year, month }){
    // Default to current month and year if not specified
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1; // getMonth() returns 0-11

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

    return (
        <Container style={{maxWidth: '200px'}}>
            
            <Row className="mb-4">
                <Col xs={8} className='p-0'>
                    <h6>{monthName} {displayYear}</h6>
                </Col>
                <Col className="d-flex justify-content-end p-0">
                    <button className='p-1' onClick={null}>&lt;</button>
                    <button className='p-1' onClick={null}>&gt;</button>
                </Col>
            </Row>
            <Row>
                {calendarDays.map((day, index) => (
                    <Col key={index} xs={6} md={2} lg={1} className="mb-4">
                        {day && <Button className='p-1'>{day}</Button>}
                    </Col>
                ))}
            </Row>
        </Container>
    );
};    

export default Mini;