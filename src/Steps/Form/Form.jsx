import { useState } from "react";
import PropTypes from 'prop-types';

import checkDate from './checkDate';
import checkDist from './checkDist';

export default function Form({ upload, data, editable }) {

  const [form, setForm] = useState(editable);

  if (editable.date !== '') {
    form.date = editable.date;
    form.distance = editable.distance;
    editable.date = '';
    editable.distance = '';
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({...prevForm, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkDate(form.date) && checkDist(form.distance)) {
      upload(form);
      setForm({
        date: '',
        distance: '',
      });
    } else {
      return false;
    }
  }
  return(
    <form className='Steps-Form' onSubmit={handleSubmit}>
      <div className='Step-Form-label-container'>
        <label htmlFor='date'>Дата (ДД.ММ.ГГ)</label>
        <input className='Step-Form-input' name='date' id='date' onChange={handleChange} value={form.date} type='text' />
      </div>
      <div className='Step-Form-label-container'>
        <label htmlFor='distance'>Пройдено км</label>
        <input className='Step-Form-input' name='distance' id='distance' onChange={handleChange} value={form.distance} type='text' />
      </div>
      <div className='Step-Form-label-container'>
        <button type='submit' className='Step-Form-input'>ok</button>
      </div>
    </form>
  );
}

Form.propTypes = {
  upload: PropTypes.func.isRequired,
}
