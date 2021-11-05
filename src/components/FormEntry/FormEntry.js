import { Component } from "react";
import Employee from "../Employee/Employee";
import FormSubmit from "../FormSubmit/FormSubmit";

export default class FormEntry extends Component {
  state = { name: "", department: "", rating: 0, staffArray: [] };
  updateStaff = (tempArray) => this.setState({ staffArray: tempArray });
  resetValues = () => this.setState({ name: "", department: "", rating: 0 });
  render() {
    return (
      <>
        <h1>EMPLOY FEEDBACK FORM</h1>
        <form action="">
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <br />
          <label htmlFor="department">Department :</label>
          <input
            type="text"
            name="department"
            id="department"
            value={this.state.department}
            onChange={(e) => this.setState({ department: e.target.value })}
          />
          <br />
          <label htmlFor="rating">Rating :</label>
          <input
            type="number"
            name="rating"
            id="rating"
            value={this.state.rating}
            min="1"
            max="5"
            onChange={(e) => this.setState({ rating: e.target.value })}
          />
          <br />
          <FormSubmit
            staffDetails={this.state}
            updateStaff={this.updateStaff}
            resetValues={this.resetValues}
          />
        </form>
        <Employee staffDetails={this.state.staffArray} />
      </>
    );
  }
}
