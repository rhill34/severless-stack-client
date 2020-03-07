import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { API } from "aws-amplify";
import "./Home.css";
import SeeMeeLogo from "../assets/demologo.png";

export default function Home(props) {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    /**
     make a request to our /notes API to get the list of notes when our component first loads. But only if the user is authenticated. Since our hook relies on props.isAuthenticated, we need to pass it in as the second argument in the useEffect call as an element in the array. 
     */
    useEffect(() => {
        async function onLoad() {
          if (!props.isAuthenticated) {
            return;
          }
      
          try {
            const notes = await loadNotes();
            setNotes(notes);
          } catch (e) {
            alert(e);
          }
      
          setIsLoading(false);
        }
      
        onLoad();
      }, [props.isAuthenticated]);
      
      function loadNotes() {
        return API.get("notes", "/notes");
      }

    /**
    Rendering the lander or the list of notes based on props.isAuthenticated.

    Store our notes in the state. Currently, it’s empty but we’ll be calling our API for it.

    Once we fetch our list we’ll use the renderNotesList method to render the items in the list.
     * @param {*} notes 
     */
    function renderNotesList(notes) {
        return [{}].concat(notes).map((note, i) =>
          i !== 0 ? (
            <LinkContainer key={note.notesId} to={`/notes/${note.notesId}`}>
              <ListGroupItem header={note.content.trim().split("\n")[0]}>
                {"Created: " + new Date(note.createdAt).toLocaleString()}
              </ListGroupItem>
            </LinkContainer>
          ) : (
            <LinkContainer key="new" to="/notes/new">
              <ListGroupItem>
                <h4>
                  <b>{"\uFF0B"}</b> Create a new note
                </h4>
              </ListGroupItem>
            </LinkContainer>
          )
        );
      }

    function renderLander() {
        return (
            <div className="lander">
                <img src={SeeMeeLogo} alt="SeeMee Logo" />
                <h1>SeeMee Demo</h1>
                <p>A simple note taking app to structure the SeeMee: Pitch Demo App. 03/07/2020</p>
              <div>
              <Link to="/login" className="btn btn-info btn-lg">
                Login
              </Link>
              <Link to="/signup" className="btn btn-success btn-lg">
                Signup
              </Link>
              </div>
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