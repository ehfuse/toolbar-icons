export function FitCenterIcon({ ...props }) {
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
            <path d="M4 9V5h4M20 9V5h-4M4 15v4h4M20 15v4h-4" /><circle cx="12" cy="12" r="2.5" />
        </svg>
    );
}
