import { Navbar ,Container ,Nav ,NavDropdown ,Row ,Col } from 'react-bootstrap';
import Project from "../assets/coding.png";
import Content from "../assets/content.png";



const HomePage = () => { 

  return (
    <div className="homepages">
    <div className="homepages-header min-vh-100">
    <Container>
    <Row className="header-box d-flex align-items-center"> 
      <Col lg="6">
        <h1>Title</h1>
        <p>Hildan Rizki portofolio</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda neque rem unde magnam ex error.</p>
      </Col>
      <Col lg="6">
        <img src={Project} alt="" />
      </Col>
    </Row>
    </Container>
    </div>
    <div className="content min-vh-100">
    <Row className="d-flex align-items-center">
      <Col lg="6">
        <img src={Content} alt="" />
      </Col>
      <Col lg="6">
        <h1>title</h1>
        <h5>title</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, odit.</p>
      </Col>
    </Row>
    </div>
    </div>
    )
}
export default HomePage