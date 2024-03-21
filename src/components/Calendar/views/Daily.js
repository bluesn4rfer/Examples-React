import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Daily ({ events, year, month, day }) {
    // Create a new Date object
    const date = new Date(year, month - 1, day); // Adjust month - 1 because JavaScript months are 0-indexed

    // Array of week days
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Get the day of the week
    const dayOfWeek = weekDays[date.getDay()];

    const hours = Array.from({ length: 24 }, (_, i) => i);

    // Function to get events for a particular hour
    const getEventsForHour = (hour) => {
        return events.filter(event => event.startTime <= hour && event.endTime > hour);
    };

    return (
        <div>
            <div>{dayOfWeek}</div>
            <div>{day}</div>
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
        </div>
    );
};

export default Daily;
