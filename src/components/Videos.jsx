import Video from "./Video";
import { useRef, useState } from "react";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import Button from "./Button";

export default function Videos() {
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

  const handleTouchStart = (e) => {
    setEdge((prev) => ({ ...prev, right: true, left: true }));
    console.log(e)
  };

  return (
    <section>
      <h3>Videos</h3>
      <div className="container videos">
        {!edge.left && (
          <Button
            title={<MdSkipPrevious />}
            style="button hide"
            scroll={scrollLeft}
          />
        )}
        <ul
          className="scroller snaps-inline" onTouchMove={handleTouchStart}
          ref={scroll}
        >
          <Video youtubeId="5_djHNws7A4" title='Follower (Official Video)'/>
          <Video youtubeId="AK54M8UKCUc" title='Taste of Spring'/>
        </ul>
        {!edge.right && (
          <Button
            title={<MdSkipNext />}
            style="button hide"
            scroll={scrollRight}
          />
        )}
      </div>
      <hr className="break" />
    </section>
  );
}
