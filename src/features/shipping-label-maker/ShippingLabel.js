import React from 'react';

import { Container, Header, Button, Checkbox, Form } from 'semantic-ui-react'

const shipType = { ground: 1, priority: 2 }

export default class ShippingLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.info;
  }

  shippingOption=(option)=>{
    return (option === 1)? "Ground":"Express"
  }

  shippingCost=(weight, shippingOption)=>{
    const shippingRate = .4
    return weight * shippingRate * (shippingOption === shipType.ground ? 1 : 1.5);
  }

  render() {
    return (
      <Container className="shippinglabel">
        <Header as="h2">Shipping Label</Header>
        <div className="info">
          <span className="block">
            Shipping Type: {this.shippingOption(this.state.shippingOption)}
          </span>
          <span className="block">
            {' '}Shipping Cost
            ${this.shippingCost(
              this.state.weight,
              this.shippingOption(this.shippingOption)
            )}{' '}
            {' '}
          </span>
        </div>
        <div className="from">
          <span>{this.state.from.name}</span>
          <span>{this.state.from.street}</span>
          <span>
            {this.state.from.city}, {this.state.from.state}{' '}
            {this.state.from.zip}{' '}
          </span>
        </div>
        <div className="to">
          <span>{this.state.to.name}</span>
          <span>{this.state.to.street}</span>
          <span>
            {this.state.to.city}, {this.state.to.state} {this.state.to.zip}
          </span>
        </div>
      </Container>
    );
  }
}
