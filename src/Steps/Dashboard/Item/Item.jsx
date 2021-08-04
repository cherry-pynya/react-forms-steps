import PropTypes from 'prop-types';

export default function Item({item ,updateData}) {
  const handleEdit = () => {
    updateData({
      edit: true,
      id: id,
      delete: false,
    });
  };
  const handleDelete = () => {
    updateData({
      delete: true,
      id: id,
      edit: false,
    });
  };
  const { distance, date, id } = item;
  return (
    <div className='Dashboard-Item'>
      <div className='Dashboard-Item-date'>
        <span>{date}</span>
      </div>
      <div className='Dashboard-Item-dist'>
        <span>{distance}</span>
      </div>
      <button className='Dashboard-Item-btn pencil' onClick={handleEdit}>✎</button>
      <button className='Dashboard-Item-dist cross' onClick={handleDelete}>✘</button>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  updateData: PropTypes.func.isRequired,
}