import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M608 0H160c-17.67 0-32 13.13-32 29.33V128h128V32h256v288h-32v32h128c17.67 0 32-13.13 32-29.33V29.33C640 13.13 625.67 0 608 0zM224 96h-64V32h64zm384 224h-64v-64h64zm0-96h-64v-96h64zm0-128h-64V32h64zm-192 64H32a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32zm0 320H32v-24l81.69-61.26 80 40 126.84-95.14L416 403.23zm0-115.23l-96.53-64.36-129.16 96.86-80-40L32 416V192h384zM112 320a48 48 0 1 0-48-48 48 48 0 0 0 48 48zm0-64a16 16 0 1 1-16 16 16 16 0 0 1 16-16z"/>
        </svg>
    )
}

export default Icon