import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M192 0C86.4 0 0 86.4 0 192c0 76.8 25.6 99.2 172.8 310.4 9.6 12.8 28.8 12.8 38.4 0C358.4 291.2 384 268.8 384 192 384 86.4 297.6 0 192 0zm-43.17 283.15l-42.83 4.8c-5.78.62-10.57-4.27-9.95-9.95l4.8-42.83 85.54-85.54 47.98 47.98-85.54 85.54zm133.91-133.9l-28.26 28.26-47.98-47.98 28.26-28.26c7.02-7.02 18.39-7.02 25.41 0l22.57 22.57c7.02 7.01 7.02 18.39 0 25.41z"/>
        </svg>
    )
}

export default Icon