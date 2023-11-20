export default function Button({ scroll, style, title }) {
  return (
    <button onClick={scroll} className={style}>
      {title}
    </button>
  );
}
