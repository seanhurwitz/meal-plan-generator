import React, { Component, Fragment } from 'react';
import classes from './Settings.module.css';
import { Radio, Spinner, Button } from '../../components/UI';
import { daysCapital } from '../../days';

class Settings extends Component {
  state = null;
  componentDidMount() {
    if (!this.state) {
      setTimeout(() => this.setState({ ...this.props.settings }), 500);
    }
  }
  planTypeHandler = (planType) => {
    this.setState({ planType });
  };
  dayStartHander = (event) => {
    this.setState({ startDay: event.target.value });
  };
  updateSettingsHandler = () => {
    this.props.update(this.state);
    this.props.history.push('/');
  };
  render() {
    const data = this.state ? (
      <Fragment>
        <table>
          <tbody>
            <tr>
              <th>Plan Type</th>
              <td>
                <Radio
                  options={['Today', 'Weekly']}
                  config="PlanTypeSetting"
                  change={this.planTypeHandler}
                  select={this.state.planType}
                />
              </td>
            </tr>
            <tr>
              <th>Starting Day</th>
              <td>
                <select
                  id="days"
                  defaultValue={this.state.startDay}
                  onChange={this.dayStartHander}
                >
                  {daysCapital.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <Button
          disabler={
            !this.state ||
            (this.state &&
              JSON.stringify(this.state) ===
                JSON.stringify(this.props.settings))
          }
          clicked={this.updateSettingsHandler}
        >
          Save!
        </Button>
      </Fragment>
    ) : (
      <Spinner />
    );
    return <div className={classes.Settings}>{data}</div>;
  }
}

export default Settings;
