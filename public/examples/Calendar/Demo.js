//*******************/
// REQUIRED IMPORTS */
//*******************/
//import { Calendar, momentLocalizer } from 'react-big-calendar';
//import moment from 'moment';
//import 'react-big-calendar/lib/css/react-big-calendar.css';
//import { Container, Row, Col } from 'react-bootstrap';

const localizer = momentLocalizer(moment);

function App({ events }) {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: '80vh', width: '100%' }}
                    />
                </Col>
            </Row>
        </Container>
    );
}