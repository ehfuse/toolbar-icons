export function BranchLeftIcon({ ...props }) {
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
            <circle cx="18" cy="12" r="2.5" /><path d="M15.5 12h-8M16 10.5L7.5 6M16 13.5l-8.5 4.5" /><circle cx="5.5" cy="5.5" r="1.5" /><circle cx="5.5" cy="12" r="1.5" /><circle cx="5.5" cy="18.5" r="1.5" />
        </svg>
    );
}
