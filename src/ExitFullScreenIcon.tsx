import React from "react";

export const ExitFullScreenIcon: React.FC = () => {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
            {/* 오른쪽 위 화살표 (중앙에서 모서리로) */}
            <path
                d="M10 8L13 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* 화살촉 (오른쪽 위 - 바깥쪽으로) */}
            <path
                d="M10 8L10 5M10 8L13 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* 왼쪽 아래 화살표 (중앙에서 모서리로) */}
            <path
                d="M8 10L5 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* 화살촉 (왼쪽 아래 - 바깥쪽으로) */}
            <path
                d="M8 10L5 10M8 10L8 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
