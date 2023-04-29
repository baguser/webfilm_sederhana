import { Container, Row, Col, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className=" text-center text-white d-flex justify-content-center align-items-center ">
        <Row>
          <Col>
            <div className="title">NONTON GRATIS</div>
            <div className="title">GAK PAKE KARCIS</div>
            <div className="mt-4">
              <Button variant="warning" type="submit">
                Lihat list film
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
