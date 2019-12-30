import React, { useState, useEffect } from "react";
import { PageHeader, ListGroup } from "react-bootstrap";
import "./Home.css";

export default function Home(props) {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    /**
    Rendering the lander or the list of notes based on props.isAuthenticated.

    Store our notes in the state. Currently, it’s empty but we’ll be calling our API for it.

    Once we fetch our list we’ll use the renderNotesList method to render the items in the list.
     * @param {*} notes 
     */
    function renderNotesList(notes) {
        return null;
    }

    function renderLander() {
        return (
            <div className="lander">
                <h1>SeeMee Demo</h1>
                <p>A simple note taking app to structure the SeeMee: Elevator Pitch Demo App. 12/30/2019</p>
            </div>
        );
    }

    function renderNotes() {
        return (
            <div className="notes">
                <PageHeader>Your SeeMee Notes</PageHeader>
                <ListGroup>
                    {!isLoading && renderNotesList(notes)}
                </ListGroup>
            </div>
        );
    }

    return (
        <div className="Home">
            {props.isAuthenticated ? renderNotes() : renderLander()}
        </div>
    );
}