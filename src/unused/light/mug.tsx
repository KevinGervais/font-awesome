import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M480 64H64a32 32 0 0 0-32 32v256a96 96 0 0 0 96 96h192a96 96 0 0 0 96-96v-96h64a96 96 0 0 0 0-192zm-96 288a64.07 64.07 0 0 1-64 64H128a64.07 64.07 0 0 1-64-64V96h320zm96-128h-64V96h64a64 64 0 0 1 0 128z"/>
        </svg>
    )
}

export default Icon