import { useRef, useState, } from "react";
import { records } from "../assets/records";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import Button from "./Button";
import Cards from "./Cards";

export default function Records() {
  const scroll = useRef();
  const [edge, setEdge] = useState({
    left: true,
    right: false,
  });

  const scrollLeft = () => {
    scroll.current.scrollLeft -= 310;
    setEdge((prev) => ({ ...prev, right: false }));
    if (scroll.current.scrollLeft <= 500) {
      setEdge((prev) => ({ ...prev, left: true }));
    }
  };

  const scrollRight = () => {
    scroll.current.scrollLeft += 310;
    setEdge((prev) => ({ ...prev, left: false }));
    if (
      scroll.current.scrollLeft >
      scroll.current.scrollWidth - scroll.current.clientWidth - 500
    ) {
      setEdge((prev) => ({ ...prev, right: true }));
    }
  };

  const handleTouchStart = () => {
    setEdge((prev) => ({ ...prev, right: true }));
  };

  return (
    <container>
      <h3>Releases</h3>
      <div className="container">
        {!edge.left && (
          <Button
            title={<MdSkipPrevious />}
            style="button"
            scroll={scrollLeft}
          />
        )}
        <container
          className="scroller snaps-inline"
          onTouchStart={handleTouchStart}
          ref={scroll}
        >
          {records.map((record) => (
            <Cards record={record} />
          ))}
        </container>
        {!edge.right && (
          <Button title={<MdSkipNext />} style="button" scroll={scrollRight} />
        )}
      </div>
      <hr className="break" />
    </container>
  );
}
