import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M608 336h-64V88c0-48.52-39.47-88-88-88H80C35.88 0 0 35.89 0 80v64c0 17.64 14.34 32 32 32h80v227.44c0 55.44 41.69 105.46 98.66 108.3v.26h312C587.38 512 640 459.36 640 394.67V368c0-17.64-14.34-32-32-32zM48 128V80c0-17.64 14.34-32 32-32s32 14.36 32 32v48H48zm112 275.44V80c0-11.38-2.38-22.2-6.69-32H456c22.06 0 40 17.94 40 40v248H304c-17.66 0-32 14.36-32 32v40c0 71.98-112 78.07-112-4.56zm432-8.77c0 38.23-31.09 69.33-69.34 69.33H303.11c10.67-16.62 16.89-35.92 16.89-56v-24h272v10.67z"/>
        </svg>
    )
}

export default Icon