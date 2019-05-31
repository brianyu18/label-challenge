import React from 'react'
import '../../../App.css'

import Header from '../../../features/shipping-label-maker/Header.js'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import ProgressBar from '../../../features/shipping-label-maker/ProgressBar.js'
import ShippingInfo from '../../../features/shipping-label-maker/ShippingInfo.js'
import Navigation from '../../../features/shipping-label-maker/Navigation.js'

import PropTypes from 'prop-types';

const shippingRate = 0.40

export default class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevBtn: false,
      nextBtn: true,
      confirmBtn: false,
      page: 1,
      showNav: true,
      wizardContext: this.props.wizardContext
    };
  }

  currentState=(e)=>{
    const key = e.target.getAttribute('data-id'),
      value = e.target.value;
    this.setState({
      wizardContext: { ...this.state.wizardContext, [key]: value }
    });
  }

  getNested=(e)=>{
    const key = e.target.getAttribute('data-id'),
      stage = e.target.getAttribute('data-step'),
      value = e.target.value;
    this.setState(prevState => ({
      ...prevState,
      wizardContext: {
        ...prevState.wizardContext,
        [stage]: {
          ...prevState.wizardContext[stage],
          [key]: value
        }
      }
    }));
  }

  confirmVal=(val)=>{
    this.props.onComplete(val);
  }

  nextClick=()=>{
    this.setState((prevState, props) => {
      return {
        page: prevState.page + 1,
        prevBtn: true,
        nextBtn:
          prevState.page + 1 === props.steps.length ? false : true
      };
    });
  }

  prevClick=()=>{
    if (this.state.page > 1) {
      this.setState({
        page: this.state.page - 1,
        nextBtn: true
      });
    }
    if(this.state.page - 1 < 2){
      this.setState({
        prevBtn: false
      })
    };
  }

  render() {
    return (
      <div className="center">
        <Form className="form">
          <Header as="h1">Shipping Label Maker</Header>
          <ProgressBar
            step={this.state.page}
            length={this.props.steps.length}
          />
          {React.cloneElement(this.props.steps[this.state.page - 1], {
            onAction: this[
              this.props.steps[this.state.page - 1].props.onAction
            ],
            wizardContext: this.state.wizardContext
          })}
          <Navigation
            previous={this.state.prevBtn}
            next={this.state.nextBtn}
            nextClick={this.nextClick}
            prevClick={this.prevClick}
            showNav={this.state.showNav}
          />
        </Form>
      </div>
    )
  }
}

Wizard.propTypes = {
  header: PropTypes.func.isRequired,
  steps: PropTypes.array.isRequired,
  wizardContext: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired
};
