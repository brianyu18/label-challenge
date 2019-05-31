import React from 'react';
import { Button, List } from 'semantic-ui-react'

const shippingRate = .4
const shipType = { ground: 1, priority: 2 }

export default class ConfirmPage extends React.Component {

  shippingOption(option){
    return (option === 1)? "Ground":"Express"
  }

  shippingCost(weight, shippingOption){
    return weight * shippingRate * (shippingOption === shipType.ground ? 1 : 1.5);
  }

  constructor(props) {
    super(props);
    this.state = this.props.wizardContext;
    this.confirmInfo = this.confirmInfo.bind(this);
  }

  getKey(key) {
    return Object.keys(this.state[key]).map((val, i) => {
      return (
        <List.Item
          as='li'
          key={i}
        >
        {' '}
        {val} : {this.state[key][val]}{' '}
        </List.Item>
      );
    });
  }

  totalShippingCost() {
    if (typeof parseFloat(this.state.weight) !== 'number') {
      return <span> Not a number </span>;
    }
    return (
      <span>
        {' '}
        {this.shippingCost(this.state.weight, this.state.shippingOption)}{' '}
      </span>
    );
  }

  confirmInfo() {
    this.props.onAction(this.state);
  }

  render() {
    return (
      <div>
        <h3> Confirm your information </h3>
        <p> From Information </p>
        <List as='ul'>
          {this.getKey('from')}
        </List>
        <p> To Information </p>
        <List as='ul'>
          {this.getKey('to')}
        </List>
        <p> Shipping Weight: {this.state.weight} </p>
        <p> Shipping Method: {this.shippingOption()} </p>
        <p> Shipping Cost: ${this.totalShippingCost()} </p>
        <p>
          {' '}
          To confirm <Button onClick={this.confirmInfo}>Confirm</Button>{' '}
        </p>
        <p> To update information click previous below </p>
      </div>
    );
  }
}
