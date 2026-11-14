import React from "react";

interface FontColorIconProps extends React.SVGProps<SVGSVGElement> {
    barColor?: string;
}

export function FontColorIcon({
    barColor = "#444444",
    ...props
}: FontColorIconProps) {
    return (
        <svg
            width={props.width ?? "20px"}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            {/* A 글자 부분 - currentColor 사용 */}
            <path d="M15.246 14H8.754l-1.6 4H5l6-15h2l6 15h-2.154l-1.6-4zm-.8-2L12 5.885 9.554 12h4.892z" />
            {/* 하단 바 부분 - barColor로 색상 제어 */}
            <rect x="3" y="20" width="18" height="2" fill={barColor} />
        </svg>
    );
}
