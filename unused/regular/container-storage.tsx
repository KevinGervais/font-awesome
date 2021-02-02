import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M640 64V48c0-8.8-7.2-16-16-16H16C7.2 32 0 39.2 0 48v16c0 8.8 7.2 16 16 16v352c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h608c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16V80c8.8 0 16-7.2 16-16zm-64 368H64V80h512v352zm-440-48h32c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8zm224 0h32c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8zm112 0h32c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8zm-224 0h32c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8z"/>
        </svg>
    )
}

export default Icon