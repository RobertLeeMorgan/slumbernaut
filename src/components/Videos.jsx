import Video from "./Video";

export default function Videos() {
  return (
    <section>
      <h3>Videos</h3>
      <div className="wrapper">
        <div className="container videos">
          <ul className="scroller snaps-inline">
            <Video youtubeId="5_djHNws7A4" title="Follower (Official Video)" />
            <Video youtubeId="AK54M8UKCUc" title="Taste of Spring" />
          </ul>
        </div>
      </div>
      <hr className="break" />
    </section>
  );
}
