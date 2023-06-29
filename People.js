import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

// import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import './People.css'
import { Link } from 'react-router-dom';
const People = () => {
  
  const url =
  "https://api.themoviedb.org/3/trending/person/day?api_key=fa487829a1dff8fe3207aabd5211cba0&language=en-US";

//   const [popular, setPopular] = useState([]);
//   const [activeIndex, setActiveIndex] = useState();
  const [query, setQuery] = useState([]);


 
useEffect(() => {
//   fetchPopular();
}, []);

// const fetchPopular = async () => {
//   const data = await fetch(url);
//   const movies = await data.json();
  
// //   setPopular(movies.results);
// }
// const handleSelect = (selectedIndex, e) => {
//   setActiveIndex(selectedIndex);
// };


useEffect(() => {
  const fetchData = async () => {
      const response = await fetch(url)
      const movies = await response.json()
      setQuery(movies.results)
  }
  fetchData()
}, [])
    
  return (
    <div>
       <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">NETFLIX</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"> <Link to="/" className="nav-link">Home</Link></Nav.Link>
            <Nav.Link href="#action2"><Link to="/tvshow" className="nav-link">TV Show</Link></Nav.Link>
            <Nav.Link href="#action1"> <Link to="/people" className="nav-link">people</Link></Nav.Link>
           
            
          </Nav>
          <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              // value={searchResults}
              // onChange={(e) => setQuery(e.target.value)}
            />
            <Button variant="outline-success" type='submit'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    {/* <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
        {popular.map((movie, index) => (
          <Carousel.Item key={index}>
            
            <img
              className="d-block w-100"
              src={`https://image.tmdb.org/t/p/w500/${movie.profile_path}`}
              alt={movie.title}
              style={{height:'600px'}}
            />
            <Carousel.Caption>
              <h3>{movie.name}</h3>
              <p>{movie.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel> */}

<section>
{query.map((item) => (
                    <Card style={{ width: '18rem' }} key={item.id}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}  />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>{item.media_type}</Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card> 
                ))}
</section>



      
     
    </div>
  )
}

export default People

