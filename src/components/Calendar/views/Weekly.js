import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Weekly({ events, year, month, day }) {
    console.debug('Calendar/views/Weekly.js month = ', month);
    console.debug('Calendar/views/Weekly.js day = ', day);
    console.debug('Calendar/views/Weekly.js year = ', year);

    let startDate = new Date(year, month - 1, day);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    const daysOfWeek = Array.from({ length: 7 }, (_, i) => {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        return {
            day: date.toLocaleString('en-us', { weekday: 'short' }),
            date: date.getDate(),
        };
    });

    // Generate hours array in 12-hour format with AM/PM for display
    const hours = Array.from({ length: 24 }, (_, i) => {
        const hour = i % 12 === 0 ? 12 : i % 12; // Adjust 0, 12, 24 to 12 for display
        const amPm = i < 12 ? 'AM' : 'PM';
        return `${hour} ${amPm}`;
    });

    const getEventsForHourAndDay = (hour, { day, date }) => {
        const dayIndex = daysOfWeek.findIndex(d => d.day === day);
        const eventDate = new Date(startDate);
        eventDate.setDate(startDate.getDate() + dayIndex);
        const eventDateString = eventDate.toISOString().split('T')[0];
        // Events are still filtered based on the 24-hour format
        return events.filter(event => event.date === eventDateString && event.startTime <= hour && event.endTime > hour);
    };

    return (
        <div className='calendar-weekly'>
            <Row className="align-items-end">
                <Col className="border border-1" style={{ maxWidth: '80px' }}>
                    {/* Leave the first cell empty to align with the day headers */}
                    <div style={{ minHeight: "45px" }}></div>
                </Col>
                {daysOfWeek.map(({ day, date }) => (
                    <Col key={`${day}-${date}`} className="border border-1">
                        {/* Day and date header */}
                        <div className='theme-primary row' style={{ minHeight: "45px" }}>
                            <div className='d-flex justify-content-center'>{day}</div>
                            <div className='d-flex justify-content-center'>{date}</div>
                        </div>
                    </Col>
                ))}
            </Row>
            <Row>
                <Col className="border border-1 text-end text-nowrap" style={{ maxWidth: '80px' }}>
                    {/* Time labels in 12-hour format */}
                    {hours.map(hour => (
                        <div key={hour} style={{ minHeight: "45px" }}>
                            <div>{hour}</div>
                        </div>
                    ))}
                </Col>
                {daysOfWeek.map(({ day, date }) => (
                    <Col key={`${day}-${date}`} className="border border-1">
                        {hours.map((hour, index) => (
                            <div key={`${day}-${hour}`} style={{ minHeight: "45px" }}>
                                {getEventsForHourAndDay(`${index}:00`, { day, date }).map(event => (
                                    <div key={event.id} style={{ background: "#f0f0f0", margin: "5px 0" }}>
                                        {event.title}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Weekly;
