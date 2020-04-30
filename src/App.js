import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header, Modal, Plan, Footer, Spinner, AddMeal } from './components';
import { Body, Settings } from './containers';
import { AddMealModalContext } from './context';
import './App.css';
import generateStartingData from './generate-starting-data';

class App extends Component {
  state = {
    days: null,
    planType: 'Today',
    showPlan: false,
    addMeal: false,
    addMealContext: null,
  };

  componentDidMount() {
    const days = JSON.parse(localStorage.getItem('days'));
    if (typeof days === 'object' && days) {
      this.setState({ days });
    } else {
      const days = generateStartingData();
      this.setState({ days });
    }
  }

  addMealHandler = (day, meal, newMeal) => {
    const days = { ...this.state.days };
    days[day][meal].push(newMeal);
    localStorage.setItem('days', JSON.stringify(days));
    this.setState({ days, addMeal: false });
  };
  removeMealHandler = (day, meal, choice) => {
    const days = { ...this.state.days };
    days[day][meal].splice(days[day][meal].indexOf(choice), 1);
    localStorage.setItem('days', JSON.stringify(days));
    this.setState({ days });
  };
  changePlanHandler = (type) => {
    this.setState({ planType: type });
  };
  generatePlanHandler = () => {
    this.setState((prevState) => ({ showPlan: !prevState.showPlan }));
  };
  isMealAddingHandler = (day = null, meal = null) => {
    const addMealContext = day && meal ? { day, meal } : null;
    this.setState((prevState) => ({
      addMeal: !prevState.addMeal,
      addMealContext,
    }));
  };

  render() {
    return (
      <BrowserRouter>
        <Modal
          config="Generate"
          show={this.state.showPlan}
          clicked={this.generatePlanHandler}
        >
          {this.state.days ? (
            <Plan meals={this.state.days} type={this.state.planType} />
          ) : (
            <Spinner />
          )}
        </Modal>
        <Modal
          config="AddMeal"
          show={this.state.addMeal}
          clicked={this.isMealAddingHandler}
        >
          {this.state.addMealContext ? (
            <AddMeal
              context={this.state.addMealContext}
              addMeal={this.addMealHandler}
              existingMeals={
                this.state.days[this.state.addMealContext.day][
                  this.state.addMealContext.meal
                ]
              }
            />
          ) : (
            <Spinner />
          )}
        </Modal>
        <Header
          changePlan={this.changePlanHandler}
          generatePlan={this.generatePlanHandler}
        />
        <AddMealModalContext.Provider value={this.isMealAddingHandler}>
          <Route
            path="/"
            exact
            render={(props) =>
              !!this.state.days ? (
                <Body
                  {...props}
                  days={this.state.days}
                  addingMeal={this.isMealAddingHandler}
                  removeMeal={this.removeMealHandler}
                />
              ) : (
                <Spinner />
              )
            }
          />
        </AddMealModalContext.Provider>

        <Route
          path="/settings"
          exact
          render={(props) =>
            !!this.state.days ? <Settings {...props} /> : <Spinner />
          }
        />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
