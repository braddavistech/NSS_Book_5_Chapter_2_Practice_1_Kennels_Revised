import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import "./Kennel.css";

class Kennel extends Component {

  employeesFromAPI = [
    { id: 1, name: "Jessica Davis" },
    { id: 2, name: "Jordan Nelson" },
    { id: 3, name: "Zoe LeBlanc" },
    { id: 4, name: "Blaise Roberts" }
  ]

  locationsFromAPI = [
    { id: 1, name: "Nashville North", address: "500 Puppy Way", city: "Nashville", state: "Tennessee", zip: "37207", phone: "(615)-862-8600"},
    { id: 2, name: "Nashville South", address: "400 Dog Park", city: "Nashville", state: "Tennessee", zip: "36892", phone: "(615)-862-8600"}
  ]

  state = {
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI
  }

  render() {
    return (
      <article className="kennel">
        <LocationList locations={this.state.locations} />
        <EmployeeList employees={this.state.employees} />
      </article>
    );
  }
}

export default Kennel