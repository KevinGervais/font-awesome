import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M336 160l26.7-53.3L416 80l-53.3-26.7L336 0l-26.7 53.3L256 80l53.3 26.7L336 160zm144 32l-16-32-16 32-32 16 32 16 16 32 16-32 32-16-32-16zm-115.7 75.3L259.5 252l-46.9-95.2c-8.4-17-32.7-17.2-41.2 0L124.5 252 19.7 267.3C.9 270-6.7 293.2 7 306.5l75.9 74-18 104.6c-3.2 18.9 16.7 33.1 33.3 24.2l93.8-49.4 93.8 49.4c16.7 8.8 36.5-5.3 33.3-24.2l-17.9-104.6 75.9-74c13.6-13.3 6-36.5-12.8-39.2z"/>
        </svg>
    )
}

export default Icon