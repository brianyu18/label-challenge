import React from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import FinalStep from './ConfirmPage';

const steps = [
  <StepOne wizardContext={'from'} onAction={'getNested'} />,
  <StepTwo wizardContext={'to'} onAction={'getNested'} />,
  <StepThree wizardContext={'weight'} onAction={'currentState'} />,
  <StepFour wizardContext={'shippingOption'} onAction={'currentState'} />,
  <FinalStep wizardContext={'wizardContext'} onAction={'confirmVal'} />
];

export default steps;
