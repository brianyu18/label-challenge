import React from 'react';
import { Form } from 'semantic-ui-react'

export default class StepFour extends React.Component {
  render() {
    const { onAction } = this.props;
    const { shippingOption } = this.props;

    const options = [
      {key: 'g', text: 'Ground', value:'1'},
      {key: 'e', text: 'Express', value:'2'}
    ]

    return (
      <div>
        <h3>Enter shipping option</h3>
        <Form.Select
          options={options}
          onChange={onAction}
          placeholder=''
          value={shippingOption}
          data-id="shippingOption"
        />
      </div>
    );
  }
}
