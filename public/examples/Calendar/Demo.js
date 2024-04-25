/*
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Container, Row, Col } from 'react-bootstrap';
*/

const localizer = momentLocalizer(moment);

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