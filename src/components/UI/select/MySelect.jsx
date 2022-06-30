import React from 'react'
import classes from "./MySelect.module.css"

const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
    <select 
    className={classes.MySelect} 
    value={value}
    onChange={event => onChange(event.target.value)}
    >
            <option disabled value="">{defaultValue}</option>
    {options.map(i => {
        return <option key={i.value} value={i.value}> {i.name} </option>
    })}
    </select>
  )
}

export default MySelect