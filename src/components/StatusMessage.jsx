export function StatusMessage({ text, type }) {
  return (
    <div className={`status-message ${type}`} role={type === 'error' ? 'alert' : 'status'}>
      <span aria-hidden="true" />
      <p>{text}</p>
    </div>
  )
}
