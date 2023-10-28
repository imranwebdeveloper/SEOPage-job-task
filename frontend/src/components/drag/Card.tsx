import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__title">
        <p>{props.item}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.string,
};

export default Card;
