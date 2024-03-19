import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Daily ({ events }) {
    const hours = Array.from({ length: 24 }, (_, i) => i);

    // Function to get events for a particular hour
    const getEventsForHour = (hour) => {
        return events.filter(event => event.startTime <= hour && event.endTime > hour);
    };

    return (
        <div className="p-0 m-0">
            {hours.map(hour => (
                <Row key={hour}>
                    <Col className="p-0 m-0">
                        <div className="px-1 py-0" style={{ border: "1px solid #ddd", minHeight: "60px" }}>
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
        </div>
    );
};

export default Daily;
