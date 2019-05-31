import React from 'react';
import { Form } from 'semantic-ui-react'


export default class StepTwo extends React.Component {
  render() {
    const { onAction } = this.props;
    const { to } = this.props.wizardContext;
    return (
      <div>
        <h6>Enter From Address</h6>
        <Form.Field>
          <label>Name</label>
          <input
            placeholder='Name'
            onChange={onAction}
            data-id="name"
            data-step="to"
            value={this.props.wizardContext.to.name}
          />
        </Form.Field>
        <Form.Field>
          <label>Street</label>
          <input
            placeholder='Street'
            onChange={onAction}
            data-id="street"
            data-step="to"
            value={this.props.wizardContext.to.street}
          />
        </Form.Field>
        <div style={{"display":"flex", "margin": "10px"}}>
          <Form.Field style={{"width":"33.33%"}}>
            <label>City</label>
            <input
            placeholder='City'
            onChange={onAction}
            data-id="city"
            data-step="to"
            value={this.props.wizardContext.to.city}
          />
          </Form.Field>
          <Form.Field style={{"width":"33.33%"}}>
            <label>State</label>
            <input
              placeholder='State'
              onChange={onAction}
              data-id="state"
              data-step="to"
              value={this.props.wizardContext.to.state}
            />
          </Form.Field>
          <Form.Field style={{"width":"33.33%"}}>
            <label>Zip</label>
            <input
              placeholder='Zip'
              onChange={onAction}
              data-id="zip"
              data-step="to"
              value={this.props.wizardContext.to.zip}
            />
          </Form.Field>
          </div>
      </div>
    );
  }
}

StepTwo.defaultProps = {
  wizardContext: {},
  onAction: () => {}
};
