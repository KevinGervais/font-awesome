import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M0 212V88c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H32v116c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12zM364 64h124c13.3 0 24 10.7 24 24v124c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12V96H364c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12zm148 236v124c0 13.3-10.7 24-24 24H364c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h116V300c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12zM148 448H24c-13.3 0-24-10.7-24-24V300c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v116h116c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12z"/>
        </svg>
    )
}

export default Icon