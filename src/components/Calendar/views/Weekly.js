import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Weekly({ events, date = new Date().toISOString().split('T')[0] }) {
    // Parse the provided date string or today's date to a Date object
    let startDate = new Date(date);

    // Adjust the startDate so the week starts on Sunday
    startDate.setDate(startDate.getDate() - startDate.getDay());

    const daysOfWeek = Array.from({ length: 7 }, (_, i) => {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        return `${date.toLocaleString('en-us', { weekday: 'short' })} ${date.getDate()}`;
    });

    const hours = Array.from({ length: 24 }, (_, i) => i);

    const getEventsForHourAndDay = (hour, day) => {
        const dayIndex = daysOfWeek.findIndex(d => d.startsWith(day.split(' ')[0]));
        const eventDate = new Date(startDate);
        eventDate.setDate(startDate.getDate() + dayIndex);
        const eventDateString = eventDate.toISOString().split('T')[0];
        return events.filter(event => event.date === eventDateString && event.startTime <= hour && event.endTime > hour);
    };

    return (
        <div className='calendar-weekly'>
            <Row>
            {daysOfWeek.map(day => (
                <Col key={day}>
                    <h2 className='theme-primary'>{day}</h2>
                    {hours.map(hour => (
                        <Row key={`${day}-${hour}`} className="mb-2">
                            <Col>
                                <div style={{ border: "1px solid #ddd", minHeight: "60px", padding: "10px" }}>
                                    <div>{`${hour}:00`}</div>
                                    {getEventsForHourAndDay(hour, day.split(' ')[0]).map(event => (
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
