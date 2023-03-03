import PropTypes from "prop-types";
import "./Genres.css";

function Genres({ name, onClick, id, isActive }) {
  return (
    <div>
      {id === 10765 ? (
        <button
          className={`category-container ${isActive ? "active" : ""}`}
          type="button"
          value={id}
          onClick={onClick}
        >
          SF & Fantasy
        </button>
      ) : (
        <button
          className={`category-container ${isActive ? "active" : ""}`}
          type="button"
          value={id}
          onClick={onClick}
        >
          {name}
        </button>
      )}
    </div>
  );
}

Genres.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  isActive: PropTypes.string.isRequired,
};

export default Genres;
