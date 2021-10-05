import React from "react";
import Card from "./Card";
import { Container, Row, Col } from "react-bootstrap";

const CardList = (props) => (
  <Row>
    {props.profiles.map((profile) => (
      <Col>
        <Card {...profile} />
      </Col>
    ))}
  </Row>
);

export default CardList;
