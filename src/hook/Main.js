import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'reactstrap';
import { Tabs, Tab } from 'react-bootstrap';
import CardTour from './CardTour';
import tour from './data';
import './main.css';

export default function Main() {
    const allTourCate = Array.from(new Set(tour.map((item) => item.category)));
    const [key, setKey] = useState("tab0");

    return (
        <div>
            <Container className="mt-5 tour-tab">
                <div className="headline-tour">
                    <h3>Perfect destination</h3>
                    <h2>Trending destinations</h2>
                </div>
                <Tabs
                    className="border-0 justify-content-center"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                >
                    {allTourCate.map((item, index) => (
                        <Tab key={index} eventKey={"tab" + index} title={item} className="mt-5">
                            <Row>
                                {tour.map(
                                    (tour, indexTour) =>
                                        tour.category === item && (
                                            <Col lg={3} md={6} key={indexTour} className="mb-4">
                                                <CardTour
                                                    title={tour.title}
                                                    img={tour.img}
                                                    cate={tour.category}
                                                    price={tour.price}
                                                ></CardTour>
                                            </Col>
                                        )
                                )}
                            </Row>
                        </Tab>
                    ))}
                </Tabs>
            </Container>
        </div>
    );
}
