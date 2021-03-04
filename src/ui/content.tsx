import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import React from "react";
import { Button, Card, Container } from "react-bootstrap";

export default function MainContent() {
  const { instance } = useMsal();

  return (
    <>
      <p></p>
      <Container>
        <AuthenticatedTemplate>
          YOU ARE LOGGED IN WITH GITHUB!
          <Button onClick={() => instance.logout()}>sign out</Button>
        </AuthenticatedTemplate>

        <UnauthenticatedTemplate>
          <Container fluid="md">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Authorization required</Card.Title>
                <Card.Text>Please login with your azure account</Card.Text>
                <Button onClick={() => instance.loginPopup()}>sign in</Button>
              </Card.Body>
            </Card>
          </Container>
        </UnauthenticatedTemplate>
      </Container>
    </>
  );
}
