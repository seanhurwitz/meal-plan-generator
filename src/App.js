import React, { Fragment, Component } from 'react';
import axios from './axios-instances';
import { Header, Modal, Plan } from './components';
import { Body } from './containers';
import './App.css';

class App extends Component {
  state = {
    days: {
      monday: {
        breakfast: ['Bran Flakes and Milo'],
        lunch: ['Fruit and Veg'],
        supper: ['Tuna Lasagne', 'Spaghetti Bolognaise'],
      },
      tuesday: {
        breakfast: ['Bran Flakes and Milo'],
        lunch: ['Fruit and Veg'],
        supper: ['Tuna Lasagne', 'Spaghetti Bolognaise'],
      },
      wednesday: {
        breakfast: ['Bran Flakes and Milo'],
        lunch: ['Fruit and Veg'],
        supper: ['Tuna Lasagne', 'Spaghetti Bolognaise'],
      },
      thursday: {
        breakfast: ['Bran Flakes and Milo'],
        lunch: ['Fruit and Veg'],
        supper: ['Tuna Lasagne', 'Spaghetti Bolognaise'],
      },
      friday: {
        breakfast: ['Bran Flakes and Milo'],
        lunch: ['Fruit and Veg'],
        supper: ['Tuna Lasagne', 'Spaghetti Bolognaise'],
      },
      saturday: {
        breakfast: ['Chocolate Muesli', 'Berry Muesli', 'Biscuits and Nosh'],
        lunch: ['Fruit and Veg'],
        supper: ['Tuna Lasagne', 'Spaghetti Bolognaise'],
      },
      sunday: {
        breakfast: ['Bran Flakes and Milo'],
        lunch: ['Fruit and Veg'],
        supper: ['Tuna Lasagne', 'Spaghetti Bolognaise'],
      },
    },
    planType: 'Today',
    showPlan: false,
  };

  // componentDidMount() {
  //   axios.get('/data.json').then((res) => {
  //     const days = Object.values(res.data)[0].days;
  //     this.setState({ days });
  //   });
  // }

  addMealHandler = (day, meal, newMeal) => {
    const days = { ...this.state.days };
    days[day][meal].push(newMeal);
    this.setState({ days });
  };
  removeMealHandler = (day, meal, choice) => {
    const days = { ...this.state.days };
    days[day][meal].splice(days[day][meal].indexOf(choice), 1);
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
      <Fragment>
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
        <div>Footer</div>
      </Fragment>
    );
  }
}

export default App;
