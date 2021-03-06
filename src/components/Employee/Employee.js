import { Component } from "react";
import "./Employee.css";
function Entrys(props) {
  return (
    <li className="entry-list-item">
      <span>
        Name :{props.item.name} &emsp;|&emsp; Department :
        {props.item.department} &emsp;| &emsp; Rating :{props.item.rating}
      </span>
    </li>
  );
}

class Employee extends Component {
  render() {
    return (
      <ul className="entry-list">
        {this.props.staffDetails.map((item) => {
          return <Entrys key={item.id} item={item} />;
        })}
      </ul>
    );
  }
}
export default Employee;
