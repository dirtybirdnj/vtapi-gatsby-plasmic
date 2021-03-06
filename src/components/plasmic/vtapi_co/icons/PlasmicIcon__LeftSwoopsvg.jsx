// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function LeftSwoopsvgIcon(props) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 421.757 145.289"}
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
          "M187.051 25.239c17.02 4.731 33.957 8.219 50.81 8.219 17.02 0 23.413-8.468 23.413-16.771 0-9.216-7.639-15.691-22.5-15.691-18.181 0-34.786 10.461-51.723 24.243m234.706 56.704c0 31.964-24.658 56.455-54.878 56.455-25.322 0-43.338-13.781-43.338-35.284 0-20.175 16.77-31.881 29.307-31.881l.083.664c-12.204 0-28.228 11.374-28.228 30.635 0 21.836 17.601 34.87 42.342 34.87 28.643 0 53.549-23.994 53.549-55.459 0-42.259-33.043-67.746-68.908-67.746-86.261 0-158.325 131.092-265.508 131.092C35.368 145.289 0 118.141 0 70.154 0 30.468 34.953.83 80.532.83c36.033 0 70.902 14.446 105.357 24.076C203.157 10.793 220.094 0 238.774 0c15.443 0 23.662 6.973 23.662 16.687 0 9.05-6.891 17.767-24.575 17.767-17.185 0-34.372-3.653-51.723-8.468C153.842 52.635 120.467 90.91 73.642 90.91c-15.858 0-26.236-9.299-26.236-22.085 0-12.536 10.046-21.752 27.896-21.752v.665c-16.771 0-26.733 8.634-26.733 21.254 0 12.286 9.879 20.921 25.073 20.921 46.243 0 79.203-37.693 111.333-64.259-34.288-9.631-68.992-23.828-104.443-23.828-45.081 0-79.287 29.059-79.287 68.328 0 47.239 34.787 74.14 84.933 74.14C191.451 144.294 265.84 13.2 351.686 13.2c36.696 0 70.071 25.322 70.071 68.743"
        }
      ></path>
    </svg>
  )
}

export default LeftSwoopsvgIcon
/* prettier-ignore-end */
