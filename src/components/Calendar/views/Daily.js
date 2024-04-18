import React from 'react';
import { Row, Col } from 'react-bootstrap';

import getDayOfWeek from '../utils/getDayOfWeek';

function Daily ({ events, year, month, day }) {  
    // Format the date from year, month, day
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    // Get the day of the week
    const dayOfWeek = getDayOfWeek(year, month, day);

    const hours = Array.from({ length: 24 }, (_, i) => i);

    // Function to get events for a particular hour
    const getEventsForHour = (hour) => {
        return events.filter(event => {
            // Extract the hour part from startTime and endTime
            const startHour = parseInt(event.startTime.split(':')[0], 10);
            const endHour = parseInt(event.endTime.split(':')[0], 10);

            // Check if the event's date matches the component's date and the hour matches
            return event.date === formattedDate && startHour <= hour && endHour > hour;
        });
    };

    const calculateRowSpan = (event) => {
        const startHour = parseInt(event.startTime.split(':')[0], 10);
        const endHour = parseInt(event.endTime.split(':')[0], 10);
        return endHour - startHour;
    };

    return (
        <div>
            <div>{dayOfWeek}</div>
            <div>{day}</div>
            {hours.map(hour => (
            <Row className="p-0 m-0" style={{ border: "1px solid #ddd", minHeight: "60px" }}>
                <Col xs={1} className="p-0 m-0">
                        <div key={hour} className="px-1 py-0">
                            {`${hour}:00`}
                        </div>
                </Col>
                <Col xs={11} className="p-0 m-0">
                        <div key={hour} className="px-1 py-0">
                            {getEventsForHour(hour).map(event => (
                                <div key={event.id} style={{
                                    background: "#f0f0f0",
                                    margin: "5px 0",
                                    gridRow: `span ${calculateRowSpan(event)}`
                                }}>
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
