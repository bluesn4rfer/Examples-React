import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Daily ({ events }) {
    const hours = Array.from({ length: 24 }, (_, i) => i);

    // Function to get events for a particular hour
    const getEventsForHour = (hour) => {
        return events.filter(event => event.startTime <= hour && event.endTime > hour);
    };

    return (
        <Container>
            {hours.map(hour => (
                <Row key={hour} className="mb-2">
                    <Col>
                        <div style={{ border: "1px solid #ddd", minHeight: "60px", padding: "10px" }}>
                            <div>{`${hour}:00`}</div>
                            {getEventsForHour(hour).map(event => (
                                <div key={event.id} style={{ background: "#f0f0f0", margin: "5px 0" }}>
                                    {event.title}
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            ))}
        </Container>
    );
};

export default Daily;
