import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1>Contact</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <h5>Email : zapple0123@gmail.com</h5>
              <h5>Phone : 091-7512142</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
