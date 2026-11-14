export function AlignLeftIcon({ ...props }) {
    return (
        <svg
            width={props.width ?? "20px"}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g id="Edit / Text_Align_Left">
                <path
                    id="Vector"
                    d="M4 18H14M4 14H20M4 10H14M4 6H20"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
}
