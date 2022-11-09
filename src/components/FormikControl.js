import React from 'react'
import CheckBoxOption from './CheckBoxOption'
import DatePicker from './DatePicker'
import Input from './Input'
import RadioOption from './RadioOption'
import SelectOption from './SelectOption'
import Textarea from './Textarea'

function FormikControl(props) {
    const { control, ...rest } = props
    switch(control){
    case 'input': return <Input {...rest} />
    case 'textarea': return <Textarea {...rest} />
    case 'select': return <SelectOption {...rest} />
    case 'radio': return <RadioOption {...rest} />
    case 'checkbox':return <CheckBoxOption {...rest} />
    case 'date': return <DatePicker {...rest} />
    default: return null
    }
  
}

export default FormikControl