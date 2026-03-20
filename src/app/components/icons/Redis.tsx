export default function Redis({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path
                d="M10.5 14.8L2 10.2l8.5-4.5 8.5 4.5-8.5 4.6z"
                fill="#912626"
            />
            <path
                d="M10.5 14.8l8.5-4.6v2.3l-8.5 4.6-8.5-4.6v-2.3l8.5 4.6z"
                fill="#D82C20"
            />
            <path
                d="M10.5 9.7L2 5.1l8.5-4.6 8.5 4.6-8.5 4.6z"
                fill="#D82C20"
            />
            <path
                d="M10.5 9.7l8.5-4.6v2.3l-8.5 4.6-8.5-4.6V5.1l8.5 4.6z"
                fill="#A41E11"
            />
            <path
                d="M10.5 19.9L2 15.3v-2.3l8.5 4.6 8.5-4.6v2.3l-8.5 4.6z"
                fill="#A41E11"
            />
        </svg>
    );
}
