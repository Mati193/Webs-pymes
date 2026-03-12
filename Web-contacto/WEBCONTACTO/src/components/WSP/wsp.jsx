import "./WhatsAppButton.css";

function WhatsAppButton({ numero, mensaje }) {
  return (
    <a
      href={`${"https://wa.me/+549" + numero + "?text=" + mensaje}`}
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
