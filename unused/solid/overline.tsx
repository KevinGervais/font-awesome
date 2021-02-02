import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M432 0H16A16 16 0 0 0 0 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16zM232.19 128h-16.38A167.81 167.81 0 0 0 48 295.81v48.38A167.81 167.81 0 0 0 215.81 512h16.38A167.81 167.81 0 0 0 400 344.19v-48.38A167.81 167.81 0 0 0 232.19 128zM320 344.19A87.91 87.91 0 0 1 232.19 432h-16.38A87.91 87.91 0 0 1 128 344.19v-48.38A87.91 87.91 0 0 1 215.81 208h16.38A87.91 87.91 0 0 1 320 295.81z"/>
        </svg>
    )
}

export default Icon