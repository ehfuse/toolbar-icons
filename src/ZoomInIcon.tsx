export function ZoomInIcon({ ...props }) {
    return (
        <svg
            width={props.width ?? "20px"}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.7}
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <circle cx="11" cy="11" r="6.5" /><path d="M16 16l4 4M8.5 11h5M11 8.5v5" />
        </svg>
    );
}
