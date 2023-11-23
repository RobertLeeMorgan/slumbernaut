import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

export default function Modal({ open, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    try {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }catch (e){
    console.log(e)
  }
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className="about" onClose={onClose}>
      <p>
        The Celtic mountainsides tremble and emanate a deep tribal rhythm;
        Slumbernaut has awoken. From his Cardiff cave dwelling, the
        multi-instrumentalist writes, produces and creates psychedelic dream
        sounds within arms reach of his bed.
      </p>
      <p>
        His debut release, Phases (2020), a conceptual EP, transitions
        seamlessly between songs flowing harmoniously like the cycling of
        seasons. Grounded rhythms set a foundation you can lay back on and watch
        the sky as suns rise and moons set. While hanging melodies keep you
        suspended in space, floating like an astronaut untethered from their
        ship.
      </p>
      <p>
        2023 Slumbernaut will return to your ears with his first ever full
        length record.
      </p>
      <button onClick={onClose} className="close highlight">
        <IoClose />
      </button>
    </dialog>,
    document.getElementById("modal")
  );
}
