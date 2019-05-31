import React from 'react';
import { Form } from 'semantic-ui-react'


export default class StepThree extends React.Component {
  render() {
    const { onAction } = this.props;
    const { weight } = this.props.wizardContext;
    return (
      <div>
        <h3>Enter Weight</h3>
        <div>
          <Form.Field>
            <label>Weight</label>
            <input
              placeholder='Weight'
              onChange={onAction}
              data-id="weight"
              data-step="to"
              value={weight}
            />
          </Form.Field>
        </div>
      </div>
    );
  }
}
