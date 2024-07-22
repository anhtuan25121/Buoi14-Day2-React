import React from "react";
import { Card } from "react-bootstrap";

const CardTour = (props) => {
    return (
        <div>
            <Card className="border-0 box-shadow">
                <div className="position-relative">
                    <Card.Img variant="top" src={props.img} />
                    <span className="position-absolute top-0 start-0 bg-danger text-white mt-2 ms-2 py-1 px-2 h6 rounded">
                        12 off
                    </span>
                </div>
                <Card.Body>
                    <p className="text-gray font-light">
                        <i className="fa-solid fa-map-pin"></i> {props.cate}
                    </p>
                    <Card.Title className="text-third mb-3">{props.title}</Card.Title>
                    <Card.Text>
                        From
                        <span className="font-bold text-primary mx-2">${props.price}</span>
                        <span className="text-decoration-line-through text-gray fs-08">
                            $250.00
                        </span>
                    </Card.Text>
                    <div>
                        <div className="fs-08 text-yellow">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star-half-stroke"></i>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardTour;
