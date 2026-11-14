export function ItalicIcon({ ...props }) {
    return (
        <svg
            width={props.width ?? "20px"}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g transform="translate(1.2, 1.2) scale(0.9)">
                <path
                    d="M10 3H20M4 21H14M15 3L9 21"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
}
