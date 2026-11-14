import React from "react";

export const FullScreenIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width={props.width ?? "20px"}
            height={props.height ?? "20px"}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            {/* 외부 테두리 (rounded) */}
            <rect
                x="1"
                y="1"
                width="16"
                height="16"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
            />
            {/* 왼쪽 아래 화살표 */}
            <path
                d="M5 13L8 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* 화살촉 (왼쪽 아래) */}
            <path
                d="M5 13L5 10M5 13L8 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* 오른쪽 위 화살표 */}
            <path
                d="M10 8L13 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* 화살촉 (오른쪽 위) */}
            <path
                d="M13 5L10 5M13 5L13 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
