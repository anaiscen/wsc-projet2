import PropTypes from "prop-types";
import "./ResultRecherche.css";

function ResultRecherche({ results }) {
  return (
    <div className="ResultRecherche">
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${result.poster_path}`}
              alt={result.title || result.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/200x300?text=Image+non+disponible";
              }}
            />
            {result.name || result.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

ResultRecherche.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};

export default ResultRecherche;
