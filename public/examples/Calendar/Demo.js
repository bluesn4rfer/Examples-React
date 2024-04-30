/*
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Container, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
*/

const localizer = momentLocalizer(moment);

// Utility function to generate event dates for a specific month and year
const generateEventDates = (events, year, month) => {
    return events.map(event => {
        // Extract day and time from the original start datetime
        const startOriginalDate = new Date(event.start);
        const startDay = startOriginalDate.getDate();
        const startTime = event.start.split('T')[1]; // Assumes time is in 'HH:MM:SS' format

        // Extract day and time from the original end datetime
        const endOriginalDate = new Date(event.end);
        const endDay = endOriginalDate.getDate();
        const endTime = event.end.split('T')[1]; // Assumes time is in 'HH:MM:SS' format

        // Create new start and end datetimes
        const newStartDate = new Date(year, month, startDay);
        const newStartDateTime = newStartDate.toISOString().split('T')[0] + 'T' + startTime;

        const newEndDate = new Date(year, month, endDay);
        const newEndDateTime = newEndDate.toISOString().split('T')[0] + 'T' + endTime;

        return { ...event, start: newStartDateTime, end: newEndDateTime };
    });
};

// Template for your events
const eventsTemplate = [
    {
        "id": 1,
        "title": "Meeting",
        "start": "2024-06-03T09:00:00",
        "end": "2024-06-03T10:00:00"
    },
    {
        "id": 2,
        "title": "Workshop: Digital Marketing",
        "start": "2024-06-03T11:00:00",
        "end": "2024-06-03T13:00:00"
    },
    {
        "id": 3,
        "title": "Yoga Class",
        "start": "2024-06-04T07:00:00",
        "end": "2024-06-04T08:00:00"
    },
    {
        "id": 4,
        "title": "Team Lunch",
        "start": "2024-06-05T12:00:00",
        "end": "2024-06-05T13:30:00"
    },
    {
        "id": 5,
        "title": "Webinar: Future of AI",
        "start": "2024-06-06T15:00:00",
        "end": "2024-06-06T16:30:00"
    },
    {
        "id": 6,
        "title": "Anniversary Dinner",
        "start": "2024-06-07T19:00:00",
        "end": "2024-06-07T21:00:00"
    },
    {
        "id": 7,
        "title": "Parent-Teacher Conference",
        "start": "2024-06-08T10:00:00",
        "end": "2024-06-08T11:00:00"
    },
    {
        "id": 8,
        "title": "Networking Event",
        "start": "2024-06-09T18:00:00",
        "end": "2024-06-09T20:00:00"
    },
    {
        "id": 9,
        "title": "Concert: The Lumineers",
        "start": "2024-06-10T20:00:00",
        "end": "2024-06-10T23:00:00"
    },
    {
        "id": 10,
        "title": "Flight to New York",
        "start": "2024-06-11T09:00:00",
        "end": "2024-06-11T12:00:00"
    },
    {
        "id": 11,
        "title": "Vacation in New York",
        "start": "2024-06-12T00:00:00",
        "end": "2024-06-12T23:59:00"
    },
    {
        "id": 12,
        "title": "Doctor's Appointment",
        "start": "2024-06-15T08:00:00",
        "end": "2024-06-15T09:00:00"
    },
    {
        "id": 13,
        "title": "Dentist Appointment",
        "start": "2024-06-15T10:30:00",
        "end": "2024-06-15T11:30:00"
    },
    {
        "id": 14,
        "title": "Return Flight from New York",
        "start": "2024-06-16T13:00:00",
        "end": "2024-06-16T16:00:00"
    },
    {
        "id": 15,
        "title": "Book Club Meeting",
        "start": "2024-06-17T17:00:00",
        "end": "2024-06-17T18:30:00"
    },
    {
        "id": 16,
        "title": "Gym Membership Renewal",
        "start": "2024-06-18T10:00:00",
        "end": "2024-06-18T10:30:00"
    },
    {
        "id": 17,
        "title": "Software Update",
        "start": "2024-06-19T22:00:00",
        "end": "2024-06-19T23:00:00"
    },
    {
        "id": 18,
        "title": "Car Service Appointment",
        "start": "2024-06-20T08:00:00",
        "end": "2024-06-20T10:00:00"
    },
    {
        "id": 19,
        "title": "Coffee with Mentor",
        "start": "2024-06-21T16:00:00",
        "end": "2024-06-21T17:00:00"
    },
    {
        "id": 20,
        "title": "Quarterly Review Meeting",
        "start": "2024-06-22T14:00:00",
        "end": "2024-06-22T16:00:00"
    }
    // Add more events as needed...
];

function App() {
    const [date, setDate] = useState(new Date());
    const [view, setView] = useState('month');

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth(); // 0-indexed (0 is January, 11 is December)

    const [events] = useState(generateEventDates(eventsTemplate, currentYear, currentMonth));
    console.log('Calendar App events = ', events);
    
    const handleDateChange = (event) => {
        const [year, month, day] = event.target.value.split('-');
        const utcDate = new Date(Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day)));
        setDate(utcDate);
    };

    const goToBack = () => {
        const newDate = moment(date).subtract(1, view).toDate();
        setDate(newDate);
    };

    const goToNext = () => {
        const newDate = moment(date).add(1, view).toDate();
        setDate(newDate);
    };

    return (
        <Container fluid>
            <Row>
                <Col xs={3}>
                    <Form.Group>
                        <Form.Label>Select Date</Form.Label>
                        <DatePicker
                            selected={date}
                            onChange={date => setDate(date)}
                            inline // This makes the date picker always visible
                        />
                    </Form.Group>
                    <Button onClick={goToBack}>Back</Button>
                    <Button onClick={goToNext}>Next</Button>
                </Col>
                <Col>
                    <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: '80vh', width: '100%' }}
                        date={date}
                        onNavigate={setDate}
                        view={view}
                        onView={setView}
                    />
                </Col>
            </Row>
        </Container>
    );
}