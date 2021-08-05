import { useState } from "react";
import Form from "./Form/Form";
import Dashboard from './Dashboard/Dashboard'
import handleData from './handleData';
import deleteData from './deleteData';

export default function Steps() {
  const [data, setState] = useState({
    data: [],
    editable: {
      date: '',
      distance: '',
    },
  });

  const uploadData = (obj) => {
    const arr = handleData([...data.data], obj);
    setState({
      data: arr,
      editable: {
        date: '',
        distance: '',
      },
    });
  };

  const updateData = (obj) =>  {
    if (obj.delete) {
      const arr = deleteData([...data.data], obj);
      setState({
        data: arr,
        editable: {
          date: '',
          distance: '',
        },
      });
      return;
    };
    if (obj.edit) {
      const item = data.data.find((el) => el.id === obj.id);
      console.log('item', item)
      const arr = deleteData([...data.data], obj);
      setState({
        data: arr,
        editable: {
          date: item.date,
          distance: item.distance,
        },
      });
    }
  };
  return (
    <div className='Steps'>
      <Form upload={uploadData} data={data} />
      {data.data.length > 0 ? <Dashboard data={data.data} updateData={updateData} /> : <div className='no-data'></div>}
    </div>
  );
}