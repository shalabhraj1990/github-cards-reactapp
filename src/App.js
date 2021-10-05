import logo from "./logo.svg";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import CardList from "./Components/CardList";
import GitHubForm from "./Components/GitHubForm";
class App extends React.Component {
  constructor(props) {
    const testData = [
      {
        name: "Dan Abramov",
        avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
        company: "@facebook",
      },
      {
        name: "Sophie Alpert",
        avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
        company: "Humu",
      },
      {
        name: "Sebastian Markbåge",
        avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
        company: "Facebook",
      },
    ];
    super(props);
    this.state = {
      profiles: testData,
    };
    
  }
  addNewProfiles = (profile) => {
    this.setState(preState => ({
      profiles :[...preState.profiles,profile]
    }));
  }
  render() {
    return (
      <div>
        <div></div>
        <Container>
          <Row>
            <Col>{this.props.title}</Col>
          </Row>
          <Row>
            <GitHubForm onFormSubmit={this.addNewProfiles} />
          </Row>
          <br />
          <hr/>
          <CardList profiles={this.state.profiles} />
        </Container>
      </div>
    );
  }
}

export default App;
