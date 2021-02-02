import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M464 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zm0 464H48V280h416v184zm0-232H48V48h416v184zm-304-56h16c8.84 0 16-7.16 16-16v-8h128v8c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-24c0-17.67-14.33-32-32-32H176c-17.67 0-32 14.33-32 32v24c0 8.84 7.16 16 16 16zm0 232h16c8.84 0 16-7.16 16-16v-8h128v8c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-24c0-17.67-14.33-32-32-32H176c-17.67 0-32 14.33-32 32v24c0 8.84 7.16 16 16 16z"/>
        </svg>
    )
}

export default Icon