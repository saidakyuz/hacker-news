import './App.css';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Search from './Search';


function App() {
  const [news, setNews] = useState([]);
  const [searchText, setSearchText] = useState("javascript");
  
  useEffect(() => {
    handleSearch(searchText);
    console.log("UseEffect Called");
  }, [searchText]); 

  // const [timer, setTimer] = useState(0);
  // useEffect(() => {
  //   let interval = null;
  //   interval = setInterval(prev => setTimer(prev+1), 1000);
  //   return () => {

  //   }
  // }, []);
  //console.log(timer);
  function handleSearch(val) {
    let interval = setInterval(() => {
      fetch(`http://hn.algolia.com/api/v1/search?query=${val}&tags=story`)
        .then(res => res.json())
        .then(json => setNews(json))
        .catch(e => console.log('Request failed: ', e));
    }, 2000);
    console.log("handleSearch called");
    return () => clearInterval(interval);
  }

  return (
    <div className="main">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Hacker News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Form inline onSubmit={(e) => e.preventDefault()}>
            <span className="search-span">Search:</span><FormControl 
            onChange={(event) => setSearchText(event.target.value)} 
            type="text" value={searchText} 
            placeholder="Search" 
            className="mr-sm-2" />
            {/* <Button onClick={() => handleSearch({searchText})} variant="outline-success">Search</Button> */}
          </Form>
        </Navbar.Collapse>
      </Navbar>
      {/* <div><h3>{timer}</h3></div> */}
      
        <Search news={news} searchText={searchText} />
      
      {/* <ListGroup>{news.hits ? news.hits.map(item => (<ListGroup.Item key={item.objectId}>{item.title}</ListGroup.Item>)) : <div><Spinner animation="border" /><h4> Thpe on search box to see the relevant news</h4><div>}
      </ListGroup> */}
    </div>

  );
}

export default App;
