// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export function TopCapsvgIcon(props) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 252 72"}
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
          "M225.108 49.128c0 4.314-3.51 7.824-7.825 7.824a5.29 5.29 0 01-5.284-5.284c0-.276.033-.544.094-.802a3.734 3.734 0 003.664 3.038 3.733 3.733 0 003.729-3.729c0-.758-.228-1.464-.618-2.053h6.195c.029.332.045.667.045 1.006m-28.884 4.517c-1.23.52-2.759.792-4.499.792-5.015 0-9.568-2.671-14.099-6.276.373-.007.743-.02 1.11-.039h15.225a3.51 3.51 0 00-.659 2.05 3.53 3.53 0 002.922 3.473m-39.918-7.199c-1.148-2.858-3.741-4.668-6.917-4.668-2.14 0-3.123 1.085-2.963 2.456a4.86 4.86 0 00-4.656 4.851l.002.088-.002.087a3.53 3.53 0 003.527 3.527 3.53 3.53 0 003.526-3.527 3.532 3.532 0 00-2.416-3.346 3.21 3.21 0 01.22-.009 4.853 4.853 0 014.847 4.847c0 3.973-3.233 7.206-7.206 7.206-5.814 0-10.543-4.73-10.543-10.543 0-8.417 6.848-15.265 15.265-15.265 6.805 0 15.11 5.669 17.577 14.296zm31.932-.062h.002l.02-.007a56.21 56.21 0 003.575-1.24c5.324-1.768 12.813-3.863 17.495-3.182 1.718-1.296.88-3.039-.259-3.683 1.532-.355 3.067-.563 4.618-.563 5.373 0 9.89 3.73 11.1 8.737h-36.75l.199-.062m46.502-1.327c-1.406.955-3.195 1.389-4.801 1.389h-3.431c-1.241-5.939-6.517-10.414-12.819-10.414-5.424 0-10.475 2.283-15.822 4.7-5.81 2.627-11.805 5.335-19.154 5.714h-3.169c-1.337-1.135-2.679-2.329-4.035-3.535-6.871-6.115-13.977-12.437-22.519-12.437-9.342 0-16.942 7.599-16.942 16.941 0 6.738 5.482 12.219 12.22 12.219a8.833 8.833 0 004.582-1.275c5.277.363 8.094-3.925 8.094-8.477 0-.611-.055-1.199-.157-1.76h10.176a19.18 19.18 0 01.227 5.496c7.296 3.631 10.295-.867 10.716-3.134 4.324 3.236 8.86 5.63 13.819 5.63 5.319 0 9.035-2.429 9.035-5.906 0-.801-.202-1.507-.567-2.086h11.543a5.15 5.15 0 00-1.414 3.546 6.97 6.97 0 006.961 6.961c5.239 0 9.502-4.262 9.502-9.501 0-.339-.013-.674-.039-1.006h3.193c1.606 0 3.395.434 4.801 1.388 2.487-.95 9.641-2.226 9.641-2.226s-7.154-1.277-9.641-2.227m-105.554 8.208a3.187 3.187 0 11-6.373-.001 3.187 3.187 0 016.373.001m-11.681-23.139a14.973 14.973 0 001.743-1.832c.591.423 1.33.654 2.126.595a3.247 3.247 0 002.983-3.025 3.231 3.231 0 00-1.654-3.023c1.788-3.518 3.078-9.539 3.272-10.476h.05c.194.937 1.484 6.958 3.272 10.476a3.231 3.231 0 00-1.654 3.023 3.247 3.247 0 002.984 3.025 3.223 3.223 0 002.125-.595 14.973 14.973 0 001.743 1.832c-5.142 4.974-7.109 9.992-8.495 15.429-1.386-5.437-3.353-10.455-8.495-15.429m-9.773 27.832c-3.973 0-7.206-3.233-7.206-7.206a4.853 4.853 0 014.847-4.847c.074 0 .147.004.22.009a3.532 3.532 0 00-2.416 3.346 3.53 3.53 0 003.526 3.527 3.53 3.53 0 003.527-3.527l-.002-.087.002-.088a4.86 4.86 0 00-4.656-4.851c.16-1.371-.823-2.456-2.963-2.456-3.176 0-5.769 1.81-6.917 4.668H85.433C87.9 37.819 96.205 32.15 103.01 32.15c8.417 0 15.265 6.848 15.265 15.265 0 5.813-4.729 10.543-10.543 10.543m-51.956-4.313a3.53 3.53 0 002.922-3.473c0-.764-.245-1.472-.66-2.05h15.226c.367.019.737.032 1.111.039-4.532 3.605-9.085 6.276-14.1 6.276-1.74 0-3.269-.272-4.499-.792m-19.533.259a3.735 3.735 0 003.664-3.038c.061.258.094.526.094.802a5.29 5.29 0 01-5.284 5.284c-4.315 0-7.825-3.51-7.825-7.824 0-.339.016-.674.045-1.006h6.195a3.708 3.708 0 00-.618 2.053 3.733 3.733 0 003.729 3.729m2.068-16.195c1.551 0 3.086.208 4.618.563-1.139.644-1.977 2.387-.259 3.683 4.682-.681 12.171 1.414 17.495 3.182a56.21 56.21 0 003.575 1.24l.021.007h.001l.199.062h-36.75c1.21-5.007 5.727-8.737 11.1-8.737m64.699-7.235c-8.542 0-15.647 6.322-22.519 12.437-1.356 1.206-2.698 2.4-4.034 3.535h-3.17c-7.349-.379-13.344-3.087-19.154-5.714-5.347-2.417-10.398-4.7-15.822-4.7-6.302 0-11.578 4.475-12.819 10.414h-3.431c-1.606 0-3.395-.434-4.801-1.389-2.487.95-9.641 2.227-9.641 2.227s7.154 1.276 9.641 2.226c1.406-.954 3.195-1.388 4.801-1.388h3.193c-.026.332-.039.667-.039 1.006 0 5.239 4.263 9.501 9.502 9.501a6.97 6.97 0 006.961-6.961 5.15 5.15 0 00-1.414-3.546h11.543c-.365.579-.567 1.285-.567 2.086 0 3.477 3.715 5.906 9.035 5.906 4.959 0 9.495-2.394 13.819-5.63.421 2.267 3.42 6.765 10.716 3.134a19.144 19.144 0 01.227-5.496h10.176a9.833 9.833 0 00-.156 1.76c0 4.552 2.816 8.84 8.093 8.477a8.833 8.833 0 004.582 1.275c6.738 0 12.22-5.481 12.22-12.219 0-9.342-7.6-16.941-16.942-16.941"
        }
      ></path>
    </svg>
  )
}

export default TopCapsvgIcon
/* prettier-ignore-end */