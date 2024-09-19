export default function Fallback() {
  return (
    <div className="fallback">
      <div className="loader">
        <h1>The scene is loading...</h1>
        <span>1 %</span>
      </div>
      <div className="info">
        <p>Texte</p>
      </div>
    </div>
  );
}
