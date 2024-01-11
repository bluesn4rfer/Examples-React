import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Mini({ events, year, month, onPrevMonth, onNextMonth }){
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
                {calendarDays.map((day, index) => (
                    <Col key={index} xs={6} md={2} lg={1} className="mb-4">
                        <div style={{ minHeight: "100px", border: "1px solid #ddd" }}>
                            {day && <div>{day}</div>}
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};    

export default Mini;