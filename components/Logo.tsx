export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="32" height="32" rx="8" fill="#10141c" />
        <path
          d="M22.2 10.4c-1.2-1.5-3.2-2.4-5.7-2.4-4.6 0-7.7 3.1-7.7 8s3.1 8 7.7 8c3.1 0 5.5-1.3 6.7-3.5l-2.3-1.2c-.8 1.4-2.2 2.2-4.4 2.2-3 0-5-2-5-5.5s2-5.5 5-5.5c1.9 0 3.3.8 4 2.1h-4.2v2.4h7.4V10.4z"
          fill="#3d7cff"
        />
        <path d="M19.6 16.2h3.6v2.2h-3.6z" fill="#d4a853" />
      </svg>
      <span className="font-sans text-[15px] font-semibold tracking-tight text-paper">
        G-Marketing
      </span>
    </span>
  );
}
