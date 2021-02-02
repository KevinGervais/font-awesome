import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M481.7 113.55c25.4-27.43 32.47-72.08 29.75-113C482.47-1.39 431.2.29 398.9 30.43c-37.2 37.35-30.99 104.3-29.76 113 41.58 2.78 85-4.15 112.56-29.88zm-43.51 56c-16.1 3.87-33.24 6.45-52.18 6.45-6.34 0-12.69-.22-19-.64l-25.9-1.73-3.65-25.7c-.32-2.29-4.98-37.33 4.65-75.88-12.86-31.93-40.99-55.43-45.79-59.03-27.88 24.38-50.81 56.03-51.97 89.52 1.09 28.48 18.66 56.4 40.93 78.93l-41.48 41.48c1.59-5.97 2.8-12.06 3.02-18.39-.09-46.86-46.08-85.04-52.32-89.73-27.88 24.38-50.81 56.03-51.97 89.52 1.1 28.48 18.66 56.4 40.93 78.93l-41.48 41.48c1.59-5.97 2.8-12.06 3.02-18.39-.09-46.86-46.08-85.04-52.32-89.73-27.88 24.38-50.81 56.03-51.96 89.52 1.09 28.48 18.66 56.4 40.93 78.93L9.38 457.38c-12.5 12.5-12.5 32.75 0 45.25C15.63 508.88 23.81 512 32 512s16.38-3.12 22.63-9.38l72.24-72.24c22.73 22.77 50.36 40.17 79.4 41.17 33.21-1.28 65.71-24.89 89.73-52.32-17-19.44-50.28-50.61-89.52-51.97-6.62.01-12.99 1.11-19.2 2.71l41.41-41.41c22.73 22.77 50.36 40.17 79.4 41.17 33.21-1.28 65.71-24.89 89.73-52.32-17-19.44-50.28-50.61-89.52-51.97-6.62.01-12.99 1.11-19.2 2.71l41.41-41.41c22.73 22.77 50.36 40.17 79.4 41.17 33.21-1.28 65.71-24.89 89.73-52.32-12.76-14.6-34.7-35.8-61.45-46.04z"/>
        </svg>
    )
}

export default Icon