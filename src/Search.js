
import './Search.css';
import { /*Button, Navbar, Nav, NavDropdown, Form, FormControl, ListGroup,*/ Spinner, Alert, Card, Button, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/HashLoader";

function Search(props) {

    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div className="all-cards-and-alert">
            <Alert variant={'info'}>News are related to "{props.searchText}" listed.</Alert>
            <div className="all-cards">

                {/* <ListGroup>{props.news.hits ? props.news.hits.map(item => (<ListGroup.Item key={item.objectId}>{item.title}<a href={item.url}><button>See</button></a></ListGroup.Item>)) : <Spinner className="spinner" animation="border" />}
            </ListGroup> */}



                {props.news.hits ? props.news.hits.slice(1, 5).map(item =>
                (<Card>
                    <Card.Header><Badge variant="secondary">Author: {item.author}</Badge></Card.Header>
                    <Card.Body key={item.objectId} invisible="true">
                        <Card.Title>{item.title}</Card.Title>

                        <Card.Text>Created at: {item.created_at}</Card.Text>

                        <Button variant="outline-info">Read More<a href={item.url}>.</a></Button>
                    </Card.Body>
                </Card>
                )
                ) : <div className="spinner">
                        <PacmanLoader color={"#36D7B7"} loading={true} css={""} size={70} />
                    </div>}


            </div>
        </div>
    );
}

export default Search;