export function IndentIcon({ ...props }) {
    return (
        <svg
            width={props.width ?? "20px"}
            viewBox="0 -3 20 20"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g id="indent" transform="translate(-2 -5)">
                <path id="secondary" fill="#2ca9bc" d="M5,12,3,10.5v3Z" />
                <path
                    id="primary"
                    d="M19,12H9M5,12,3,10.5v3ZM19,6H3M19,18H3"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                />
            </g>
        </svg>
    );
}
