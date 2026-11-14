export function OutdentIcon({ ...props }) {
    return (
        <svg
            width={props.width ?? "18px"}
            viewBox="0 -3 20 20"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g id="indent" transform="translate(-2 -5)">
                <path id="secondary" fill="#2ca9bc" d="M17,12,19,10.5v3Z" />
                <path
                    id="primary"
                    d="M13,12H3M17,12,19,10.5v3ZM19,6H3M19,18H3"
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
