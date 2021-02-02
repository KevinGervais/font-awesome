import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M445.394 223.522L304.616 469.519c-3.522 6.654-9.943 10.481-16.623 10.481-12.266 0-21.553-12.557-18.677-25.843l36.847-166.382h-94.961c-11.6 0-20.566-11.186-19.031-23.775l25.597-213.775C219.04 39.792 227.177 32 236.8 32h108.8c12.604 0 21.8 13.087 18.552 26.411L336.458 192h92.321c14.785 0 24.011 17.55 16.615 31.522zM48 144h110.197l5.747-48H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h180.604l10.63-48H48V144zm568 16h-8v-16c0-26.51-21.49-48-48-48H405.38l-9.951 48H560v64h32v96h-32v64H418.017l-27.469 48H560c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24z"/>
        </svg>
    )
}

export default Icon