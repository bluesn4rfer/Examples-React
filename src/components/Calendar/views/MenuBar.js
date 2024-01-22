import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function MenuBar({ year, monthName, onViewChange = () => {} }){

    return (
        <Container className='m-0 p-0'>
            <Row>
                <Col className='p-0'>
                    <h1 className='m-0 text-nowrap'>{monthName} {year}</h1>
                </Col>
                <Col className='p-0'>
                    <Button className='ms-0'>Today</Button>
                    &nbsp;
                    <Button>&lt;</Button>
                    &nbsp;
                    <Button>&gt;</Button>
                </Col>
                <Col className='d-flex justify-content-end'>
                    <select onChange={(e) => onViewChange(e.target.value)}>
                        <option value='daily'>Daily</option>
                        <option value='weekly'>Weekly</option>
                        <option value='monthly'>Monthly</option>
                    </select>
                </Col>
            </Row>
        </Container>
    );
}

export default MenuBar;