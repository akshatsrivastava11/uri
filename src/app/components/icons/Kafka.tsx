export default function Kafka({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="none">
            <circle cx="12" cy="4" r="2.5" fill="#231F20" stroke="#fff" strokeWidth="0" />
            <circle cx="12" cy="4" r="2.5" fill="#ffffff" opacity="0.85" />
            <circle cx="4.5" cy="15.5" r="2.5" fill="#ffffff" opacity="0.85" />
            <circle cx="19.5" cy="15.5" r="2.5" fill="#ffffff" opacity="0.85" />
            <rect x="11.3" y="6.5" width="1.4" height="5" rx="0.7" fill="#ffffff" opacity="0.7" />
            <line x1="12" y1="11.5" x2="5.5" y2="13.5" stroke="#ffffff" strokeWidth="1.2" opacity="0.7" />
            <line x1="12" y1="11.5" x2="18.5" y2="13.5" stroke="#ffffff" strokeWidth="1.2" opacity="0.7" />
            <circle cx="12" cy="4" r="2.5" fill="none" stroke="#ffffff" strokeWidth="1.2" />
            <circle cx="4.5" cy="15.5" r="2.5" fill="none" stroke="#ffffff" strokeWidth="1.2" />
            <circle cx="19.5" cy="15.5" r="2.5" fill="none" stroke="#ffffff" strokeWidth="1.2" />
            <text x="12" y="21.5" textAnchor="middle" fontSize="4.5" fill="#ffffff" fontFamily="sans-serif" fontWeight="bold" opacity="0.75">KAFKA</text>
        </svg>
    );
}
