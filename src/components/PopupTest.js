export default function PopupTest({ title = "undef" }) {
  return (
    <>
      <div className="popup">{title}</div>
      <img src="./logo192.png" alt="test" />
    </>
  );
}
