import Item from './Item/Item';
import PropTypes from 'prop-types';

export default function Dashboard({data, updateData}) {
  return (
    <div className='DashBoard'>
      {data.map((el) => <Item item={el} key={el.id} updateData={updateData} />)}
    </div>
  );
}

Dashboard.propTypes =  {
  data: PropTypes.array.isRequired,
  updateData: PropTypes.func.isRequired,
}