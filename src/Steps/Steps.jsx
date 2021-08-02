import { useState } from "react";
import Form from "./Form/Form";
import handleData from './handleData';

export default function Steps() {
  const [data, setData] = useState([]);

  const uploadData = (obj) => {
    console.log(handleData(data, obj))
  };

  return (
    <div className='Steps'>
      <Form upload={uploadData}/>
    </div>
  );
}