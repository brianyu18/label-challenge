import React from 'react';
import { Button } from 'semantic-ui-react'

const hidden = {
    display: 'none'
}

const Navigation = (props) => {
  return(
    <div style={props.showNav ? {} : hidden}>
      <Button style={props.previous ? {} : hidden} onClick={props.prevClick}>Previous</Button>
      <Button style={props.next ? {} : hidden} onClick={props.nextClick}>Next</Button>
    </div>
  )
}

export default Navigation;
