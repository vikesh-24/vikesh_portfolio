export default function Tag({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center rounded-full border border-zinc-200 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-zinc-500 ${className}`}>
      {children}
    </span>
  )
}
