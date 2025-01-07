import PropTypes from 'prop-types';

const ButtonComponent=function ButtonComponent(props) {
  return (
    <button>
      {props.text}
    </button>
  );
}
ButtonComponent.propTypes = {
    text: PropTypes.string.isRequired,
  };
export default ButtonComponent;