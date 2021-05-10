// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function SharpStarsvgIcon(props) {
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
          "M67.237 36C48.148 42.709 42.709 48.147 36 67.237 29.291 48.147 23.852 42.709 4.763 36 23.852 29.291 29.291 23.852 36 4.763 42.709 23.852 48.148 29.291 67.237 36"
        }
      ></path>
    </svg>
  )
}

export default SharpStarsvgIcon
/* prettier-ignore-end */
