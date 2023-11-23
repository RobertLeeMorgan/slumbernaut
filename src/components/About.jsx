import { useState } from "react";
import Modal from "./Modal";

export default function About() {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(() => true);
  }

  function handleClose() {
    setShowModal(() => false);
  }

  return (
    <section className="about-section">
      <Modal open={showModal} onClose={handleClose} />
      <button className="show-button" onClick={handleClick}>
        About Slumbernaut{" "}
        <img className="logo spin" src="/naut.png" alt="Astronaut icon" />
      </button>
    </section>
  );
}
