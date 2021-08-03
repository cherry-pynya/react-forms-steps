import { useState } from "react";
import Form from "./Form/Form";
import handleData from './handleData';

export default function Steps() {
  const [data, setData] = useState([{
    date: '01.02.2021',
    distance: '14',
  }]);
  console.log(data)

  const uploadData = (obj) => {
    const arr = handleData(data, obj);
    console.log(arr);
    setData(arr);
  };

  return (
    <div className='Steps'>
      <Form upload={uploadData}/>
    </div>
  );
}