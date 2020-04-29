import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Header, Modal, Plan, Footer } from "./components";
import { Body } from "./containers";
import "./App.css";
import generateStartingData from "./generate-starting-data";

class App extends Component {
  state = {
    days: generateStartingData(),
    planType: "Today",
    showPlan: false,
  };

  componentDidMount() {
    const days = JSON.parse(localStorage.getItem("days"));
    if (typeof days === "object" && days) {
      this.setState({ days });
    }
  }

  addMealHandler = (day, meal, newMeal) => {
    const days = { ...this.state.days };
    days[day][meal].push(newMeal);
    localStorage.setItem("days", JSON.stringify(days));
    this.setState({ days });
  };
  removeMealHandler = (day, meal, choice) => {
    const days = { ...this.state.days };
    days[day][meal].splice(days[day][meal].indexOf(choice), 1);
    localStorage.setItem("days", JSON.stringify(days));
    this.setState({ days });
  };
  changePlanHandler = (type) => {
    this.setState({ planType: type });
  };
  generatePlanHandler = () => {
    this.setState((prevState) => ({ showPlan: !prevState.showPlan }));
  };

  render() {
    return (
      <BrowserRouter>
        <Modal show={this.state.showPlan} clicked={this.generatePlanHandler}>
          <Plan meals={this.state.days} type={this.state.planType} />
        </Modal>
        <Header
          changePlan={this.changePlanHandler}
          generatePlan={this.generatePlanHandler}
        />
        <Body
          days={this.state.days}
          addMeal={this.addMealHandler}
          removeMeal={this.removeMealHandler}
        />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
