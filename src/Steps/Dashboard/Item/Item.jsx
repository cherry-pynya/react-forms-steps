import PropTypes from 'prop-types';

export default function Item({item ,updateData}) {
  const { distance, date, id } = item;
  return (
    <div className='Dashboard-Item'>
      <div className='Dashboard-Item-date'>
        <span>{date}</span>
      </div>
      <div className='Dashboard-Item-dist'>
        <span>{distance}</span>
      </div>
      <button className='Dashboard-Item-btn pencil' onClick={updateData({
        edit: true,
        id: id,
        delete: false,
      })}>✎</button>
      <button className='Dashboard-Item-dist cross' onClick={updateData({
        delete: true,
        id: id,
        edit: false,
      })}>✘</button>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  updateData: PropTypes.func.isRequired,
}