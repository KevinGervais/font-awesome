import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M488 320h-72V118.62l93.66-93.66c3.12-3.12 3.12-8.19 0-11.31L498.35 2.34c-3.12-3.12-8.19-3.12-11.31 0L393.37 96H192V24c0-13.26-10.75-24-24-24h-48c-13.25 0-24 10.74-24 24v72H24c-13.25 0-24 10.74-24 24v48c0 13.25 10.75 24 24 24h72v192c0 17.67 14.33 32 32 32h192v72c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24v-72h72c13.25 0 24-10.75 24-24v-48c0-13.25-10.75-24-24-24zM96 160H32v-32h64v32zm96-32h169.37l-32 32H192v-32zm105.38 64L192 297.38V192h105.38zM320 384H128V32h32v320h160v32zm-105.38-64L320 214.63V320H214.62zM352 480V182.63l32-32V480h-32zm128-96h-64v-32h64v32z"/>
        </svg>
    )
}

export default Icon