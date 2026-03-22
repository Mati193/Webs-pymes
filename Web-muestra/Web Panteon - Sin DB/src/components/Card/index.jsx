import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./card.css";
import "../global.css";

function Card({ contenido }) {
  return (
    <div className="about-features">
      {contenido.map((skill, index) => (
        <div className="feature-item">
          <span className="feature-icon">{skill.emoji}</span>
          <h4>{skill.titulo}</h4>
          <p>{skill.description}</p>
        </div>
      ))}
      <p></p>
    </div>
  );
}

export default Card;