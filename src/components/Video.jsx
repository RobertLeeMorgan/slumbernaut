export default function Video({ youtubeId }) {
  return (
    <iframe
      className="video"
      src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&controls=0`}
      title="Slumbernaut - Follower (Official Video)"
      frameborder="0"
      allowfullscreen
      loading="lazy"
    ></iframe>
  );
}
