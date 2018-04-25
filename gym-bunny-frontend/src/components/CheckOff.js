import React from 'react';
import { PropTypes } from 'prop-types';
import {emojify} from 'react-emojione';


function CheckOff(props) {
  const content = props.checked ? ':rabbit:' : 'Finished With Set';
  return (
    <span onClick={props.onClick}>
      {content}
    </span>
  )
}

CheckOff.propTypes = {
  checked: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

export default CheckOff
