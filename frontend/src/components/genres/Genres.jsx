import PropTypes from "prop-types";
import "./Genres.css";

function Genres({ name, setFilterMovie, id }) {
  return (
    <div>
      {id === 10765 ? (
        <button
          className="category-container"
          type="button"
          value={id}
          onClick={(e) => setFilterMovie(e.target.value)}
        >
          SF & Fantastique
        </button>
      ) : (
        <button
          className="category-container"
          type="button"
          value={id}
          onClick={(e) => setFilterMovie(e.target.value)}
        >
          {name}
        </button>
      )}
    </div>
  );
}
Genres.propTypes = {
  name: PropTypes.string.isRequired,
  setFilterMovie: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Genres;
