import React, {useState} from 'react'
import { Tooltip } from 'antd'
import './index.css'
import {
  SingleLineCSSEllipsis,
  MultiLinesCSSEllipsis,
  SingleLineEllipsis,
} from './TextAutoEllipsis'

const Test = () => {
  const [inputValue, setInputValue] = useState('123123')
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <div
      style={{
        width: 300,
        height: 300,
        border: '1px solid red',
      }}
    >
      <SingleLineCSSEllipsis>
        12345678901234567890123456789012345678901234567890123456789012345678901234567890
      </SingleLineCSSEllipsis>
      <MultiLinesCSSEllipsis>
        1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
      </MultiLinesCSSEllipsis>
      <SingleLineEllipsis
        overFlowCallback={() => {
          console.log('overflow')
        }}
        tooltipWrapper={Tooltip}
      >
        {inputValue}
      </SingleLineEllipsis>
      <input onChange={handleChange} />
    </div>
  )
}

export default Test
