import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M431.88 116.13L239.88 4.3a31.478 31.478 0 0 0-31.76 0l-192 111.84C6.15 121.94 0 132.75 0 144.45v223.09c0 11.71 6.15 22.51 16.12 28.32l192 111.84a31.478 31.478 0 0 0 31.76 0l192-111.84c9.97-5.81 16.12-16.62 16.12-28.32V144.45c0-11.7-6.15-22.51-16.12-28.32zM224 50.6l152.35 88.74L224 228.22 71.65 139.34 224 50.6zM48 181.12l152 88.66v177.64L48 358.88V181.12zm200 266.3V269.78l152-88.66v177.76l-152 88.54z"/>
        </svg>
    )
}

export default Icon