import React from "react";
import Form from "./common/form";
import Joi from "joi";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  Joi = require("joi");

  schema = Joi.object({
    username: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
    password: Joi.string().min(3).max(30).required(),
    name: Joi.string().required().label("Name"),
  });

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div className="">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
