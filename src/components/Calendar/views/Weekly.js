import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Weekly({ events }){
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const hours = Array.from({ length: 24 }, (_, i) => i);

    // Function to get events for a particular hour and day
    const getEventsForHourAndDay = (hour, day) => {
        return events.filter(event => event.day === day && event.startTime <= hour && event.endTime > hour);
    };

    return (
        <Container>
            {daysOfWeek.map(day => (
                <Row key={day}>
                    <Col>
                        <h2>{day}</h2>
                        {hours.map(hour => (
                            <Row key={`${day}-${hour}`} className="mb-2">
                                <Col>
                                    <div style={{ border: "1px solid #ddd", minHeight: "60px", padding: "10px" }}>
                                        <div>{`${hour}:00`}</div>
                                        {getEventsForHourAndDay(hour, day).map(event => (
                                            <div key={event.id} style={{ background: "#f0f0f0", margin: "5px 0" }}>
                                                {event.title}
                                            </div>
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                        ))}
                    </Col>
                </Row>
            ))}
        </Container>
    );
};

export default Weekly;