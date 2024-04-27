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
        const originalDate = new Date(event.date);
        const day = originalDate.getDate();
        const date = new Date(year, month, day);
        const dateString = date.toISOString().split('T')[0]; // Converts to 'YYYY-MM-DD' format
        return { ...event, date: dateString };
    });
};

// Template for your events
const eventsTemplate = [
    { id: 1, title: "Meeting", date: "2024-06-03", startTime: "09:00", endTime: "10:00" },
    { id: 2, title: "Workshop: Digital Marketing", date: "2024-06-03", startTime: "11:00", endTime: "13:00" },
    { id: 3, title: "Yoga Class", date: "2024-06-04", startTime: "07:00", endTime: "08:00" },
    { id: 4, title: "Team Lunch", date: "2024-06-05", startTime: "12:00", endTime: "13:30" },
    { id: 5, title: "Webinar: Future of AI", date: "2024-06-06", startTime: "15:00", endTime: "16:30" },
    { id: 6, title: "Anniversary Dinner", date: "2024-06-07", startTime: "19:00", endTime: "21:00" },
    { id: 7, title: "Parent-Teacher Conference", date: "2024-06-08", startTime: "10:00", endTime: "11:00" },
    { id: 8, title: "Networking Event", date: "2024-06-09", startTime: "18:00", endTime: "20:00" },
    { id: 9, title: "Concert: The Lumineers", date: "2024-06-10", startTime: "20:00", endTime: "23:00" },
    { id: 10, title: "Flight to New York", date: "2024-06-11", startTime: "09:00", endTime: "12:00" },
    { id: 11, title: "Vacation in New York", date: "2024-06-12", startTime: "00:00", endTime: "23:59" },
    { id: 12, title: "Doctor's Appointment", date: "2024-06-15", startTime: "08:00", endTime: "09:00" },
    { id: 13, title: "Dentist Appointment", date: "2024-06-15", startTime: "10:30", endTime: "11:30" },
    { id: 14, title: "Return Flight from New York", date: "2024-06-16", startTime: "13:00", endTime: "16:00" },
    { id: 15, title: "Book Club Meeting", date: "2024-06-17", startTime: "17:00", endTime: "18:30" },
    { id: 16, title: "Gym Membership Renewal", date: "2024-06-18", startTime: "10:00", endTime: "10:30" },
    { id: 17, title: "Software Update", date: "2024-06-19", startTime: "22:00", endTime: "23:00" },
    { id: 18, title: "Car Service Appointment", date: "2024-06-20", startTime: "08:00", endTime: "10:00" },
    { id: 19, title: "Coffee with Mentor", date: "2024-06-21", startTime: "16:00", endTime: "17:00" },
    { id: 20, title: "Quarterly Review Meeting", date: "2024-06-22", startTime: "14:00", endTime: "16:00" }
    // More events...
];

function App({ events }) {
    const [date, setDate] = useState(new Date());
    const [view, setView] = useState('month');

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