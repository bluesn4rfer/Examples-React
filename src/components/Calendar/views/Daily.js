import React from 'react';
import { Row, Col } from 'react-bootstrap';
import getDayOfWeek from '../utils/getDayOfWeek';

function Daily({ events, year, month, day }) {
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    const dayOfWeek = getDayOfWeek(year, month, day);
    const hours = Array.from({ length: 24 }, (_, i) => i);

    const getEventsForHour = (hour) => {
        return events.filter(event => {
            const startHour = parseInt(event.startTime.split(':')[0], 10);
            // Include events only if they start at this hour
            return event.date === formattedDate && startHour === hour;
        });
    };

    const calculateRowSpan = (event) => {
        const startHour = parseInt(event.startTime.split(':')[0], 10);
        const endHour = parseInt(event.endTime.split(':')[0], 10);
        return (endHour - startHour) * 60; // Each hour is 60px
    };

    return (
        <div>
            <div>{dayOfWeek} - {formattedDate}</div>
            {hours.map(hour => (
                <Row key={hour} className="p-0 m-0" style={{ position: 'relative', minHeight: "60px", border: "1px solid #ddd" }}>
                    <Col xs={1} className="p-0 m-0">
                        <div className="px-1 py-0">
                            {`${hour}:00`}
                        </div>
                    </Col>
                    <Col xs={11} className="p-0 m-0 position-relative">
                        {getEventsForHour(hour).map(event => (
                            <div key={event.id} style={{
                                position: 'absolute',
                                top: 0, // Start from the top of the row
                                left: 0,
                                right: 0,
                                height: `${calculateRowSpan(event)}px`,
                                background: "#f0f0f0",
                                margin: "5px 0",
                                zIndex: 1  // Ensure it's above the row
                            }}>
                                {event.title}
                            </div>
                        ))}
                    </Col>
                </Row>
            ))}
        </div>
    );
};

export default Daily;
