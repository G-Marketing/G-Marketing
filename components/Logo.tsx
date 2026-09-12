export function BrandMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      <ellipse
        cx="16"
        cy="16"
        rx="14.4"
        ry="6.1"
        fill="none"
        stroke="#2563eb"
        strokeWidth="1.2"
        transform="rotate(-22 16 16)"
        opacity="0.5"
      />
      <ellipse
        cx="16"
        cy="16"
        rx="14"
        ry="5.6"
        fill="none"
        stroke="#2563eb"
        strokeWidth="1.2"
        transform="rotate(36 16 16)"
        opacity="0.38"
      />
      <circle cx="28.8" cy="12.2" r="1.35" fill="#2563eb" />
      <circle cx="4.8" cy="19.6" r="1.2" fill="#2563eb" />
      <circle cx="22.6" cy="28.4" r="1.2" fill="#2563eb" />
      <circle cx="10.2" cy="4.4" r="1.15" fill="#2563eb" />
      <circle cx="16" cy="16" r="8.15" fill="#2563eb" />
      <ellipse
        cx="16"
        cy="16"
        rx="3.45"
        ry="8.15"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.05"
      />
      <path d="M8.1 16h15.8" stroke="#ffffff" strokeWidth="1.05" />
      <path d="M9.15 12.15h13.7" stroke="#ffffff" strokeWidth="1" opacity="0.92" />
      <path d="M9.15 19.85h13.7" stroke="#ffffff" strokeWidth="1" opacity="0.92" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
      role="img"
      aria-label="G-Marketing, Global Marketing"
    >
      <BrandMark className="h-12 w-12" />
      <span className="flex min-w-0 flex-col leading-none" aria-hidden="true">
        <span className="font-sans text-[18px] font-semibold tracking-tight text-paper">
          G-Marketing
        </span>
        <span className="mt-1 text-xs font-medium tracking-[0.04em] text-mist">
          Global Marketing
        </span>
      </span>
    </span>
  );
}
