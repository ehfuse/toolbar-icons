import React from "react";

export const LineHeightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
    props
) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M3 6h9" />
        <path d="M3 12h9" />
        <path d="M3 18h9" />
        <path d="M19 6v12" />
        <path d="M16 6l3-3 3 3" />
        <path d="M16 18l3 3 3-3" />
    </svg>
);

export default LineHeightIcon;
