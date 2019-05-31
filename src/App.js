import React from 'react';
import Header from './features/shipping-label-maker/Header.js';
import Wizard from './core/components/wizard/wizard.js';
import steps from './features/shipping-label-maker/steps/Actions.js';
import shippingInfo from './features/shipping-label-maker/ShippingInfo.js';
import ShippingLabel from './features/shipping-label-maker/ShippingLabel';

export default class ShippingLabelMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false
    };
    this.makeLabel = this.makeLabel.bind(this);
  }

  makeLabel(val) {
    this.setState({
      finished: true,
      info: val
    });
  }
  render() {
    return (
      <div>
        {this.state.finished ? (
          <ShippingLabel info={this.state.info} />
        ) : (
          <Wizard
            header={Header}
            steps={steps}
            wizardContext={shippingInfo}
            onComplete={this.makeLabel}
          />
        )}
      </div>
    );
  }
}
