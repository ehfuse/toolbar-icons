export function BranchBothIcon({ ...props }) {
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
            <circle cx="12" cy="12" r="2.5" /><path d="M9.6 11.2L5.5 7.5M9.6 12.8L5.5 16.5M14.4 11.2L18.5 7.5M14.4 12.8L18.5 16.5" /><circle cx="4.5" cy="6.5" r="1.5" /><circle cx="4.5" cy="17.5" r="1.5" /><circle cx="19.5" cy="6.5" r="1.5" /><circle cx="19.5" cy="17.5" r="1.5" />
        </svg>
    );
}
