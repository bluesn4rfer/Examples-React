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
