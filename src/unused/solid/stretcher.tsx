import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M608 128H192L79.84 10.74a32 32 0 0 0-45.18-2.66L10.74 29.35a32 32 0 0 0-2.66 45.17l121.7 128A64 64 0 0 0 177.62 224H608a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32zm-92.22 266.93a62.23 62.23 0 0 0-56.18-7.3l-43-37.63L524 256h-97.2L368 307.48 309.17 256H212l107.4 94-43 37.63a62.23 62.23 0 0 0-56.18 7.3 64.35 64.35 0 0 0-17.29 17.29 64.07 64.07 0 1 0 115.82 23.4l49.25-43.1 49.25 43.1a64 64 0 1 0 98.53-40.69zM256 464a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm224 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16z"/>
        </svg>
    )
}

export default Icon