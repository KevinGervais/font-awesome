import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M365.99 33.1L194.11 289.51l78 65 218.81-221.52C564.15 52.52 427.95-55.3 365.99 33.1zM167.87 309.29c-40.45 2.41-77.23 17.53-98.03 72.35-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.39-.68-6.64-1.06-9.96l-87.07-72.56z"/>
        </svg>
    )
}

export default Icon