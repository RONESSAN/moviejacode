import React, { Component } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

class Main extends Component {
  state = {};
  render() {
    return (
      <>
        <Container
          style={{
            paddingTop: 50,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minWidth: 300,
          }}
        >
          <h1 style={{ color: "#fff", fontFamily: "ubuntu", marginTop: 20 }}>
            Movie Now
          </h1>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              style={{
                width: 250,
                margin: 10,
              }}
            >
              <Card.Img
                variant="top"
                style={{
                  width: 230,
                  height: 280,
                  alignSelf: "center",
                  paddingTop: 10,
                  cursor: "pointer",
                }}
                src="https://img.elo7.com.br/product/600x380/4159ED2/quadro-breaking-bad-serie-capa-poster-c-moldura-45x33-a3-quadro.jpg"
              />
              <Card.Body
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Card.Title>Card Title</Card.Title>
                <Card.Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  style={{
                    width: "100%",
                  }}
                  variant="outline-dark"
                >
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>

            <Card
              style={{
                width: 250,
                margin: 10,
              }}
            >
              <Card.Img
                variant="top"
                style={{
                  width: 230,
                  height: 280,
                  alignSelf: "center",
                  paddingTop: 10,
                  cursor: "pointer",
                }}
                src="https://img.elo7.com.br/product/600x380/4159ED2/quadro-breaking-bad-serie-capa-poster-c-moldura-45x33-a3-quadro.jpg"
              />
              <Card.Body
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Card.Title>Card Title</Card.Title>
                <Card.Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button
                  style={{
                    width: "100%",
                  }}
                  variant="outline-dark"
                >
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </>
    );
  }
}

export default Main;
