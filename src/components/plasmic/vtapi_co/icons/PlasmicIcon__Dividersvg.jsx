// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function DividersvgIcon(props) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 252 18"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M237.097 8.028v.514H136.2a2.408 2.408 0 01-2.387 2.157 2.41 2.41 0 01-2.389-2.157h-.298c-1.857.014-5.821 3.726-5.821 5.458h-.513c0-1.732-3.964-5.444-5.821-5.458h-.298a2.409 2.409 0 01-2.389 2.157 2.409 2.409 0 01-2.388-2.157H13.493v-.514h100.403a2.409 2.409 0 012.388-2.156c1.244 0 2.259.948 2.389 2.156h.287c1.853 0 5.832-3.724 5.832-5.457h.513c0 1.733 3.979 5.457 5.832 5.457h.287a2.41 2.41 0 012.389-2.156c1.242 0 2.257.948 2.387 2.156z"
        }
      ></path>
    </svg>
  )
}

export default DividersvgIcon
/* prettier-ignore-end */
