import React from 'react'
import { Progress } from 'semantic-ui-react'

const ProgressBar = (props) => <Progress value={props.step} total='5' progress='ratio' />

export default ProgressBar
