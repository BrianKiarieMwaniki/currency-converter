import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class ConverterForm extends Form {
  state = {
    data: {
      from: "",
      to: "",
      amountToConvert: "",
    },
    errors: {},
    availableCurrencies: [],
  };

  schema = {
    from: Joi.string().required().label("From"),
    to: Joi.string().required().label("To"),
    amountToConvert: Joi.number().min(0).label("Amount to Convert"),
  };

  render() {
    return <div>
        <h1>Convert</h1>
        <form onSubmit={this.handleSubmit}>
            {this.renderSelect("from", "From", this.state.availableCurrencies)}
            {this.renderSelect("to", "To", this.state.availableCurrencies)}
            {this.renderButton("Convert")}
        </form>
    </div>;
  }
}

export default ConverterForm;
