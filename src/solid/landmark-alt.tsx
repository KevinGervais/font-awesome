import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M48 256h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-18.9C431.6 111.7 368.3 48.4 288 34.9V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v18.9C143.7 48.4 80.4 111.7 66.9 192H48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16zm448 192h-16v-16c0-8.8-7.2-16-16-16h-16V288h-64v128h-96V288h-64v128h-96V288H64v128H48c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"/>
        </svg>
    )
}

export default Icon