import React from 'react';
import { Input, Button, Form } from 'semantic-ui-react'


export default class StepOne extends React.Component {
  render() {
    const { onAction } = this.props;
    return(
      <div>
        <h3>Enter To Address</h3>
        <Form.Field>
          <label>Name</label>
          <input
            placeholder='Name'
            onChange={onAction}
            data-id="name"
            data-step="from"
            value={this.props.wizardContext.from.name}
          />
        </Form.Field>
        <Form.Field>
          <label>Street</label>
          <input
            placeholder='Street'
            onChange={onAction}
            data-id="street"
            data-step="from"
            value={this.props.wizardContext.from.street}
          />
        </Form.Field>
        <div style={{"display":"flex", "margin": "10px"}}>
          <Form.Field style={{"width":"33.33%"}}>
            <label>City</label>
            <input
            placeholder='City'
            onChange={onAction}
            data-id="city"
            data-step="from"
            value={this.props.wizardContext.from.city}          />
          </Form.Field>
          <Form.Field style={{"width":"33.33%"}}>
            <label>State</label>
            <input
              placeholder='State'
              onChange={onAction}
              data-id="state"
              data-step="from"
              value={this.props.wizardContext.from.state}
            />
          </Form.Field>
          <Form.Field style={{"width":"33.33%"}}>
            <label>Zip</label>
            <input
              placeholder='Zip'
              onChange={onAction}
              data-id="zip"
              data-step="from"
              value={this.props.wizardContext.from.zip}
            />
          </Form.Field>
        </div>
      </div>
    )
  }
}

StepOne.defaultProps = {
  wizardContext: {},
  onAction: () => {}
};
