import PropTypes from 'prop-types';

const PostItem = ({ title, body }) => {
  return (
    <div style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default PostItem;
