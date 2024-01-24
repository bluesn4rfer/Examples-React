import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Monthly({ events, year, month, onPrevMonth, onNextMonth }){
    // Default to current month and year if not specified
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1; // getMonth() returns 0-11

    const displayYear = year || currentYear;
    const displayMonth = month || currentMonth;

    const daysInMonth = new Date(displayYear, displayMonth, 0).getDate();
    const firstDayOfMonth = new Date(displayYear, displayMonth - 1, 1).getDay();
    const totalCells = daysInMonth + firstDayOfMonth;

    // Create an array representing the days of the month
    const calendarDays = Array.from({ length: totalCells }, (_, i) => {
        const day = i - firstDayOfMonth + 1;
        return day > 0 ? day : null;
    });

    // Function to get events for a particular day
    const getEventsForDay = (day) => {
        return events.filter(event => new Date(event.date).getDate() === day &&
                                      new Date(event.date).getMonth() + 1 === displayMonth &&
                                      new Date(event.date).getFullYear() === displayYear);
    };

    return (
        <Container>
            <h1>Monthly Calendar - {displayYear}/{displayMonth}</h1>
            <Row className="mb-4">
                {onPrevMonth && (
                    <Col>
                        <Button onClick={onPrevMonth}>Previous</Button>
                    </Col>
                )}
                {onNextMonth && (
                    <Col className="text-right">
                        <Button onClick={onNextMonth}>Next</Button>
                    </Col>
                )}
            </Row>
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