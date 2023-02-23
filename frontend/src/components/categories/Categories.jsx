import PropTypes from "prop-types";
import "./Categories.css";

function Categories({ name, setFilterMovie, id }) {
  return (
    <div>
      <button
        className="category-container"
        type="button"
        value={id}
        onClick={(e) => setFilterMovie(e.target.value)}
      >
        {name}
      </button>
    </div>
  );
}
Categories.propTypes = {
  name: PropTypes.string.isRequired,
  setFilterMovie: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Categories;
