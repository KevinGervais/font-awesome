import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M185.53 323.38c1.34 1.12 2.77 1.99 4.08 3.2 3.53 3.26 15.27 9.42 34.39 9.42 4.81 0 9.14-.39 13.01-1.03l25.79-36.11c14.89-20.87 31.42-40.34 48.71-59.11L442.1 331.2c3.89-1.63 6.91-3.34 8.3-4.62 11.97-11.04 25.32-18.17 39.21-21.08L346.12 205.02c20.66-19.12 42.3-37.27 65.59-53.58 9.31-6.52 21.1-8.89 33.09-6.41l102.38 18.08c13.32 2.28 26.04-6.33 28.43-19.37 2.39-13.05-6.44-25.52-19.76-27.87L454.26 97.94c-24.67-5.16-50.55.08-70.98 14.44-92.89 65.05-147.56 140.71-160.58 158.95l-37.17 52.05zM624 368h-16c-26.04 0-45.8-8.42-56.09-17.9-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C461.8 359.58 442.04 368 416 368s-45.8-8.42-56.09-17.9c-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C269.8 359.58 250.04 368 224 368s-45.8-8.42-56.09-17.9c-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C77.8 359.58 58.04 368 32 368H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h16c38.62 0 72.72-12.19 96-31.84 23.28 19.66 57.38 31.84 96 31.84s72.72-12.19 96-31.84c23.28 19.66 57.38 31.84 96 31.84s72.72-12.19 96-31.84c23.28 19.66 57.38 31.84 96 31.84h16c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-496-80c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zm0-144c26.47 0 48 21.53 48 48s-21.53 48-48 48-48-21.53-48-48 21.53-48 48-48z"/>
        </svg>
    )
}

export default Icon