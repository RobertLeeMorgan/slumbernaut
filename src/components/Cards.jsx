export default function Cards({ record }) {
  return (
    <a href={record.link} target="_blank">
      <div className="card" key={record.title}>
        <img src={record.image} alt={`${record.title} artwork`} />
        <div className="contents">
          <h5>{record.title}</h5>
          <span className="tag">{record.tag}</span>
        </div>
      </div>
    </a>
  );
}
