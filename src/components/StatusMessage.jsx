export function StatusMessage({ text, type }) {
  return <p className={`status-message ${type}`}>{text}</p>
}
