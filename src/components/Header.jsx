import Links from "./Links";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="background"></div>
        <h1>Slumbernaut</h1>

        <p className="tag-line">Circadian Rhythms and Spaced Out Sounds</p>
        
        <Links />
      </header>
    </>
  );
}
