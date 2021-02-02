import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M495.87 320h-47.26c-63 0-119.82 22.23-160.61 57.92V256a128 128 0 0 0 128-128V32l-80 48-78.86-80L176 80 96 32v96a128 128 0 0 0 128 128v121.92C183.21 342.23 126.37 320 63.39 320H16.13c-9.19 0-17 7.72-16.06 16.84C10.06 435 106.43 512 223.83 512h64.34c117.4 0 213.77-77 223.76-175.16.92-9.12-6.87-16.84-16.06-16.84z"/>
        </svg>
    )
}

export default Icon