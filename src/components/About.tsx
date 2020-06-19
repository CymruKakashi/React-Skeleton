import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../constants/routes.json";

export default class About extends React.Component {
    public render() {
        return (
        <>
            <Container>
                <h1>Hello About</h1>
                <Link to={routes.ABOUT}>Home</Link>
            </Container>
        </>
        );
    }
}