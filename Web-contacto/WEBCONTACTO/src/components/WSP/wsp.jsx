import "./WhatsAppButton.css";

function WhatsAppButton({ numero }) {
  return (
    <a
      href={`${"https://wa.me/+549" + numero + "?text=Gracias%20por%20comunicarte"}`}
      className="wsp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
      />
    </a>
  );
}

export default WhatsAppButton;
