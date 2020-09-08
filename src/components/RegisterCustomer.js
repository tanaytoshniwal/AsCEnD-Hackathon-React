import React, { Component } from "react";

export class RegisterCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerId: "",
      customerName: "",
      country: "",
    };
  }

  isNum = (str) => {
    return /^-?\d+$/.test(str);
  };

  validate = (obj) => {
    const { customerId, customerName, country } = obj;

    //---validation starts here---

    let res = true;
    // 1. check if empty
    if (customerId === "") {
      alert("Please enter Customer Id");
      res = false;
    }
    if (customerName === "") {
      alert("Please enter Customer Name");
      res = false;
    }
    if (country === "Select Country") {
      alert("Please enter Country");
      res = false;
    }

    // 2. check id to be numeric
    if (!this.isNum(customerId)) {
      alert("Customer Id must be a number");
      res = false;
    }
    return res;

    //---validation ends here---
  };

  formSubmitHandler = async (event) => {
    event.preventDefault();

    const { customerId, customerName, country } = event.target.elements;

    const newCustomerObj = {
      customerId: customerId.value,
      customerName: customerName.value,
      country: country.value,
    };

    const isValid = this.validate(newCustomerObj);

    if (isValid) {
      await this.setState({
        customerId: customerId.value,
        customerName: customerName.value,
        country: country.value,
      });

      //---print state to console---
      console.log("State:", this.state);

      // alert updated state
      alert(`${customerId.value}-${customerName.value}-${country.value}`);
    }
  };

  render() {
    return (
      <form onSubmit={this.formSubmitHandler}>
        <div>
          <div>
            <label htmlFor="customerId">Enter Customer Id:</label>
          </div>
          <div>
            <input id="customerId" type="text" name="customerId" />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="customerName">Enter Customer Name:</label>
          </div>
          <div>
            <input id="customerName" type="text" name="customerName" />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="country">Enter Country:</label>
          </div>
          <div>
            <select id="country" name="country" defaultValue="Select Country">
              <option>Select Country</option>
              <option>India</option>
              <option>USA</option>
            </select>
          </div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default RegisterCustomer;
