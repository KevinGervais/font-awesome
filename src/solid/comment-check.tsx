import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zm114.1 163.8l-131 130c-4.3 4.3-11.3 4.3-15.6-.1l-75.7-76.3c-4.3-4.3-4.2-11.3.1-15.6l26-25.8c4.3-4.3 11.3-4.2 15.6.1l42.1 42.5 97.2-96.4c4.3-4.3 11.3-4.2 15.6.1l25.8 26c4.2 4.3 4.2 11.3-.1 15.5z"/>
        </svg>
    )
}

export default Icon