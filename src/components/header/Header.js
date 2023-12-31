import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";

const Header = ({userName}) => {
    return(
        <Navbar bg="dark" variant="dark" expand="lg"> 
            <Container fluid>
                <Navbar.Brand href="/" style={{"color":"gold"}}>
                    <FontAwesomeIcon icon={faBowlFood}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{maxheight:"100px"}}
                    navbarScroll
                    >
                        <NavLink className="nav-link" to="/">All recipes</NavLink>
                        <NavLink className="nav-link" to="/add-new-recipe">Add new recipe</NavLink>
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </Nav>
                    <NavLink className="nav-link" to="/" style={{"color":"white"}}>{userName}</NavLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
