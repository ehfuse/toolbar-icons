export function BranchRightIcon({ ...props }) {
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
            <circle cx="6" cy="12" r="2.5" /><path d="M8.5 12h8M8 10.5l8.5-4.5M8 13.5l8.5 4.5" /><circle cx="18.5" cy="5.5" r="1.5" /><circle cx="18.5" cy="12" r="1.5" /><circle cx="18.5" cy="18.5" r="1.5" />
        </svg>
    );
}
