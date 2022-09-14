import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import {
  getAllCurrencies,
  getConversionRate,
} from "./../services/currencyConverterService";

class ConverterForm extends Form {
  state = {
    data: {
      from: "",
      to: "",
      amountToConvert: 1,
    },
    amountConverted: "",
    errors: {},
    availableCurrencies: [],
  };

  schema = {
    from: Joi.string().required().label("From"),
    to: Joi.string().required().label("To"),
    amountToConvert: Joi.number().min(0).label("Amount to Convert"),
  };

  async populateCurrencies() {
    const { data: availableCurrencies } = await getAllCurrencies();
    this.setState({ availableCurrencies });
  }

  async componentDidMount() {
    await this.populateCurrencies();
  }

  doSubmit = async () => {
    const { from, to, amountToConvert } = this.state.data;
    const { data: rate } = await getConversionRate(from, to);
    let convertedAmount = (amountToConvert * rate).toFixed(2);
    const amountConverted = `${to} ${convertedAmount}`;
    this.setState({ amountConverted });
  };

  render() {
    const { availableCurrencies,amountConverted } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderSelect("from", "From", availableCurrencies)}
          {this.renderSelect("to", "To", availableCurrencies)}
          {this.renderInput("amountToConvert", "Amount", "number")}
          {this.renderButton("convert")}
        </form>
          <input className="form-control mt-2" value={amountConverted} disabled/>
      </div>
    );
  }
}

export default ConverterForm;
