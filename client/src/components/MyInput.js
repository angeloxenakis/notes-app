import React, { useEffect, useState } from "react"
import {Editor, EditorState} from 'draft-js'

const MyInput = () => {
  const [value, setValue] = useState('');
  const onChange = (evt) => {
    setValue(evt.target.value)
    console.log(evt.target.value)
  };

  return <input value={value} onChange={onChange} />;
};

export default MyInput

