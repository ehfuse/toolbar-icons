export function AlignCenterIcon({ ...props }) {
    return (
        <svg
            width={props.width ?? "20px"}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g id="Edit / Text_Align_Center">
                <path
                    id="Vector"
                    d="M17 18H7M20 14H4M17 10H7M20 6H4"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
}
