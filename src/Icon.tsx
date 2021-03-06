import React from "react"
import { icons } from "@/icons"

import { IconType, IconProps, IconFn } from "./model"
import { IconStyled } from "./IconStyled"

export function Icon(props: IconProps): JSX.Element | never {
  const { type = "light", name, onClick } = props
  const Svg: IconFn = icons[`fa${type.charAt(0)}-${name}`]
  if (Svg) {
    return (
      <IconStyled onClick={onClick} className={`fa-icon fa${type.charAt(0)}-${name}`}>
        <Svg />
      </IconStyled>
    )
  } else {
    throw new Error(`type this in the command line: "yarn add-fa fa${type.charAt(0)}-${name}"`)
  }
}
