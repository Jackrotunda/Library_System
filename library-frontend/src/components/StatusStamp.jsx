import "./StatusStamp.css";

export default function StatusStamp({ tone = "available", children }) {
  return <span className={`stamp stamp--${tone}`}>{children}</span>;
}
