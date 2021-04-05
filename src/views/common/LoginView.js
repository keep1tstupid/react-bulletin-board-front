import React, { useState, useRef } from "react";
import { Container } from 'react-bootstrap';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";


import AuthService from "../../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });

  const inputChanged = (event) => {
    setUserData({...userData, [event.target.name]: event.target.value});
  };

  const handleLogin = (event) => {
    event.preventDefault();

    setMessage("");
    setLoading(true);

    //form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(userData.username, userData.password).then(
        () => {
          props.history.push("/home");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      <Container className={'mt-5 p-3'}>
        <h3> Login to BB </h3>
      </Container>
      <Container className={'mt-3 p-3'}>
        <div className="card card-container">

          <Form onSubmit={handleLogin} ref={form}>
            <div className="form-group m-3">
              <label htmlFor="username">Username: </label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={userData.username}
                onChange={inputChanged}
                validations={[required]}
              />
            </div>

            <div className="form-group m-3">
              <label htmlFor="password">Password: </label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={userData.password}
                onChange={inputChanged}
                validations={[required]}
              />
            </div>

            <div className="form-group m-3">
              <button className="btn btn-primary btn-block" disabled={loading}>
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
            <div>
              <CheckButton style={{ display: "none" }} ref={checkBtn}  />
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Login;
