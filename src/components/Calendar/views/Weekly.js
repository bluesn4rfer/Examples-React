import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Weekly({ events, date = new Date().toISOString().split('T')[0] }) {
    let startDate = new Date(date);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    const daysOfWeek = Array.from({ length: 7 }, (_, i) => {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        return {
            day: date.toLocaleString('en-us', { weekday: 'short' }),
            date: date.getDate(),
        };
    });

    const hours = Array.from({ length: 24 }, (_, i) => i);

    const getEventsForHourAndDay = (hour, { day, date }) => {
        const dayIndex = daysOfWeek.findIndex(d => d.day === day);
        const eventDate = new Date(startDate);
        eventDate.setDate(startDate.getDate() + dayIndex);
        const eventDateString = eventDate.toISOString().split('T')[0];
        return events.filter(event => event.date === eventDateString && event.startTime <= hour && event.endTime > hour);
    };

    return (
        <div className='calendar-weekly'>
            <Row>
                <Col className="border border-1" style={{ maxWidth: '50px' }}>
                    {/* Time labels column */}
                    {hours.map(hour => (
                        <div key={hour} style={{ minHeight: "45px" }}>
                            <div>{`${hour}:00`}</div>
                        </div>
                    ))}
                </Col>
                {daysOfWeek.map(({ day, date }) => (
                    <Col key={`${day}-${date}`} className="border border-1">
                        {/* Day header */}
                        <div className='theme-primary row'>
                            <div className='d-flex justify-content-center'>{day}</div>
                            <div className='d-flex justify-content-center'>{date}</div>
                        </div>
                        {/* Hour rows without time labels */}
                        {hours.map(hour => (
                            <Row key={`${day}-${hour}`}>
                                <Col>
                                    <div style={{ minHeight: "45px" }}>
                                        {getEventsForHourAndDay(hour, { day, date }).map(event => (
                                            <div key={event.id} style={{ background: "#f0f0f0", margin: "5px 0" }}>
                                                {event.title}
                                            </div>
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                        ))}
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Weekly;
