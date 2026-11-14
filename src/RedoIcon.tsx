export function RedoIcon({ ...props }) {
    return (
        <svg
            width={props.width ?? "20px"}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M6 13C6.5096 11.9961 7.3753 11.1655 8.4666 10.6333C9.558 10.1011 10.8158 9.89624 12.0506 10.0495C14.0687 10.3 15.4753 11.6116 17 12.8186M17 10V13H14"
                stroke="currentColor"
                strokeWidth={1.7}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
