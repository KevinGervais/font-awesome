import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M112 96H96V16c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v80H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h16v336c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V160h16c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm320 128h-16V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v208h-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h16v208c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V288h16c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM272 352h-16V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v336h-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h16v80c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-80h16c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"/>
        </svg>
    )
}

export default Icon