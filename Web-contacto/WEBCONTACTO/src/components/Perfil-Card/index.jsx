import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./perfil-card.css";
import "../global.css";
import { useState } from "react";

function PerfilCard({ team }) {
  const [selectedMember, setSelectedMember] = useState(null); // Estado para la card seleccionada
  return (
    <section>
      <div className="team-grid">
        {team.map((member, index) => (
          <div
            key={index}
            className="team-card"
            onClick={() => setSelectedMember(member)} // Al clickear, abre la card
          >
            <img src={member.img} alt={member.name} />
            <div className="member-emoji">{member.emoji}</div>
            <h3>{member.name}</h3>
            <p className="member-role">{member.role}</p>
            <p className="member-description">{member.description}</p>
            <p className="member-info">+ Info</p>
          </div>
        ))}
      </div>

      {/* MODAL / CARD FLOTANTE */}
      {selectedMember && (
        <div className="member-modal" onClick={() => setSelectedMember(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedMember(null)}
            >
              ✕
            </button>

            <div className="modal-header">
              <img src={selectedMember.img} alt={selectedMember.name} />
              <div>
                <h3>{selectedMember.name}</h3>
                <p className="modal-role">{selectedMember.fullRole}</p>
              </div>
            </div>

            <div className="modal-body">
              <p className="modal-bio">{selectedMember.bio}</p>

              <div className="modal-skills">
                <h4>Skills</h4>
                <div className="skills-tags">
                  {selectedMember.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
export default PerfilCard;
