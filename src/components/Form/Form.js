import { Component } from "react";
import Employee from "../Employee/Employee";

class Form extends Component {
  state = {
    name: "",
    department: "",
    rating: 0,
    person: [],
  };
  person = (e) => {
    e.preventDefault();
    const details = {
      id: this.state.person.length,
      name: this.state.name,
      department: this.state.department,
      rating: this.state.rating,
    };
    this.setState({ name: "", department: "", rating: 0 });
    const wholeDetails = [...this.state.person];
    wholeDetails.push(details);
    this.setState({ person: wholeDetails });
  };

  render() {
    const btnDisable =
      this.state.name === "" ||
      this.state.department === "" ||
      this.state.rating <= 0 ||
      this.state.rating > 5;
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

          <button type="submit" onClick={this.person} disabled={btnDisable}>
            Submit
          </button>
        </form>
        <Employee person={this.state.person} />
      </>
    );
  }
}
export default Form;
