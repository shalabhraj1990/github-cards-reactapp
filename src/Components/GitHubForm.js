import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
class GitHubForm extends React.Component {
  state = {
    userName: "",
  };
  handleSubmit = async (event) => {
      event.preventDefault();
const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
this.props.onFormSubmit(resp.data);
this.setState({userName:""});
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}> 
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="Github User Id"
              value={this.state.userName}
              onChange={(event) =>
                this.setState({ userName: event.target.value })
              }
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default GitHubForm;
