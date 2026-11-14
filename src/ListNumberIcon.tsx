export function ListNumberIcon({ ...props }) {
    return (
        <svg
            width={props.width ?? "20px"}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M10 6L21 6M10 12L21 12M10 18L21 18"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <text
                x="4"
                y="7.5"
                fontSize="8"
                fontWeight="bold"
                fill="currentColor"
                textAnchor="middle"
            >
                1
            </text>
            <text
                x="4"
                y="14.5"
                fontSize="8"
                fontWeight="bold"
                fill="currentColor"
                textAnchor="middle"
            >
                2
            </text>
            <text
                x="4"
                y="22"
                fontSize="8"
                fontWeight="bold"
                fill="currentColor"
                textAnchor="middle"
            >
                3
            </text>
        </svg>
    );
}
