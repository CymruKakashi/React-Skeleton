import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    set,
    clear,
    selectText,
  } from "./textSlice";
import { Container, Row, Button } from "react-bootstrap";

export default function Text() {
    const dispatch = useDispatch();
    const value = useSelector(selectText);
    return (
        <Container>
            <h2>Value: {value}</h2>
            <Row>
                <Button onClick={() => {
                    dispatch(set());
                }}>Set</Button>
            </Row>
            <Row>
                <Button onClick={() => {
                    dispatch(clear());
                }}>Clear</Button>
            </Row>
        </Container>
    );
}