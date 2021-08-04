import { useState } from "react";
import Form from "./Form/Form";
import Dashboard from './Dashboard/Dashboard'
import handleData from './handleData';

export default function Steps() {
  const [data, setData] = useState([]);

  const uploadData = (obj) => {
    const arr = handleData(data, obj);
    console.log(arr)
    setData(arr);
  };

  const updateData = (obj) =>  {
    console.log(obj)
  };
  console.log(data)
  return (
    <div className='Steps'>
      <Form upload={uploadData} />
      <Dashboard data={data} updateData={updateData} />
    </div>
  );
}