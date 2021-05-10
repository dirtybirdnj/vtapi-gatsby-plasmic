// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function PointStarsvgIcon(props) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 72 72"}
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
          "M69.5 36C42.145 39.393 39.393 42.145 36 69.5 32.606 42.145 29.855 39.393 2.5 36 29.855 32.606 32.606 29.855 36 2.5c3.393 27.355 6.145 30.106 33.5 33.5"
        }
      ></path>
    </svg>
  )
}

export default PointStarsvgIcon
/* prettier-ignore-end */
