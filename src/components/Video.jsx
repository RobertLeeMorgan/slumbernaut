export default function Video({ youtubeId, title }) {
  return (
    <iframe
      key={title}
      className="video"
      src={`http://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&controls=0`}
      title={title}
      alt={`Music video for ${title}`}
      allowFullScreen
      loading="lazy"
    ></iframe>
  );
}
