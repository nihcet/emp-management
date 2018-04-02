import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Segment, Form, Checkbox, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { loginRequest } from '../actions/auth';

const Login = ({ dispatch }) => {
  let username;
  let password;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest({
      username: username.value,
      password: password.value
    }));
    username.value = '';
    password.value = '';
  };

  return (
    <Grid centered columns={3} verticalAlign="middle" style={{ height: '80vh' }}>
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <Form onSubmit={handleSubmit}>
              <Form.Field>
                <label htmlFor="username">Username
                  <input id="username" placeholder="Username" ref={(node) => { username = node; }} />
                </label>
              </Form.Field>
              <Form.Field>
                <label htmlFor="password">Password
                  <input id="password" type="password" placeholder="Password" ref={(node) => { password = node; }} />
                </label>
              </Form.Field>
              <Form.Field>
                <Checkbox label="Remember me" />
              </Form.Field>
              <Button type="submit">Submit</Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

Login.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(Login);
