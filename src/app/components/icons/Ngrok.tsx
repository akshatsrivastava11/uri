export default function Ngrok({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="none">
            {/* Tunnel arc */}
            <path
                d="M3 12 C3 7 7.477 3 13 3 C18.523 3 23 7 23 12"
                stroke="#1F5FFF"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
            />
            <path
                d="M6 12 C6 8.686 9.134 6 13 6 C16.866 6 20 8.686 20 12"
                stroke="#1F5FFF"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                opacity="0.6"
            />
            {/* Arrow pointing right through tunnel */}
            <line x1="2" y1="15" x2="16" y2="15" stroke="#1F5FFF" strokeWidth="2" strokeLinecap="round" />
            <polyline points="13,12 16,15 13,18" stroke="#1F5FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
    );
}
