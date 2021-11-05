import React from "react";
import { Component } from "react";

export default class FormSubmit extends Component {
  addFeedBack = (e) => {
    e.preventDefault();
    const details = {
      id: this.props.staffDetails.staffArray.length,
      name: this.props.staffDetails.name,
      department: this.props.staffDetails.department,
      rating: this.props.staffDetails.rating,
    };
    this.props.resetValues();
    const temp = [...this.props.staffDetails.staffArray];
    temp.push(details);
    this.props.updateStaff(temp);
  };
  render() {
    const btnDisable =
      this.props.staffDetails.name === "" ||
      this.props.staffDetails.department === "" ||
      this.props.staffDetails.rating <= 0 ||
      this.props.staffDetails.rating > 5;
    return (
      <button type="submit" onClick={this.addFeedBack} disabled={btnDisable}>
        Submit
      </button>
    );
  }
}
