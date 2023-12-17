import PropTypes from 'prop-types';

const TestimoniCard = ({ desc, name }) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white p-4'>
      <div className='mb-2 text-gray-700'>{desc}</div>
      <div className='font-bold text-indigo-600 text-sm'>{name}</div>
    </div>
  );
};

TestimoniCard.propTypes = {
  desc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TestimoniCard;
