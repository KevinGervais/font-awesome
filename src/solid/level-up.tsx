import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 352 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M345.04 144l-136-136.901c-9.388-9.465-24.691-9.465-34.079 0L38.96 144c-9.307 9.384-9.277 24.526.069 33.872l22.056 22.056c9.619 9.619 25.301 9.329 34.557-.639L152 138.84V432H68.024a11.996 11.996 0 0 0-8.485 3.515l-56 56C-4.021 499.074 1.333 512 12.024 512H208c13.255 0 24-10.745 24-24V138.84l56.357 60.448c9.256 9.968 24.938 10.258 34.557.639l22.056-22.056c9.346-9.345 9.377-24.487.07-33.871z"/>
        </svg>
    )
}

export default Icon