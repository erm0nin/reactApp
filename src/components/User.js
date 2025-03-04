import React from "react";
import {
  IoCloseCircleSharp,
  IoOptions,
  IoShieldCheckmarkOutline,
} from "react-icons/io5";
import AddUser from "./AddUser";
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editForm: false}
  }
  user = this.props.user;
  render() {
    return (
      <div className="user">
        <IoCloseCircleSharp
          onClick={() => this.props.onDelete(this.user.id)}
          className="delete-icon"
        />
        <IoOptions onClick={()=>{
          this.setState({
            editForm: !this.state.editForm})
        }} className="edit-icon" />
        <IoShieldCheckmarkOutline className="edit-icon" />
        <h3>
          {this.user.first_name} {this.user.last_name}
        </h3>
        <p>{this.user.email}</p>
        <p>{this.user.age}</p>
        <b>{this.user.isHappy ? "Is Happy" : "Is not Happy"}</b>
        {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit} />}
      </div>
    );
  }
}

export default User;
