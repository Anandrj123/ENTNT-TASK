import React, { Component } from "react";
import Client from "./Client";
import FloatingAddButton from "./FloatingAddButton";

class ClientView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 4,
      flag: true,
      person: [],
    };
  }

  addData = () => {
    const newObject = {
      id: this.state.count + 1,
      fname: "",
      lname: "",
      location: "",
      appointments: "",
    };

    this.setState({
      person: [...this.state.person, newObject],
      count: this.state.count + 1,
    });
  };

  updateData = (id, newObj) => {
    const updatedList = this.state.person.map((obj) =>
      obj.id === id ? newObj : obj
    );
    this.setState(
      {
        person: updatedList,
      },
      () => {
        console.log(this.state.person);
      }
    );
  };

  deleteData = (id) => {
    const newArray = this.state.person.filter((obj) => obj.id !== id);
    this.setState({
      person: newArray,
    });
  };

  back = () => {
    this.setState({
      flag: true,
    });
  };

  render() {
    return (
      <div>
        {this.state.person.map((x) => (
          <Client
            key={x.id}
            id={x.id}
            fname={x.fname}
            lname={x.lname}
            location={x.location}
            appointments={x.appointments}
            update={this.updateData}
            delete={this.deleteData}
          />
        ))}
        <FloatingAddButton addData={this.addData} />
      </div>
    );
  }
}

export default ClientView;
