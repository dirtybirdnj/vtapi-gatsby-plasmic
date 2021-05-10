// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fsvVCJNXhN88gnWPeurk82
// Component: -yQP5mbA2FlJ
import * as React from "react"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import HeaderNav from "../../HeaderNav" // plasmic-import: yzN9e7yMUD/component
import Footer from "../../Footer" // plasmic-import: BxuEl8DsYN/component
import "@plasmicapp/react-web/lib/plasmic.css"
import * as defaultcss from "../plasmic__default_style.module.css" // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_vtapi_co.module.css" // plasmic-import: fsvVCJNXhN88gnWPeurk82/projectcss
import * as sty from "./PlasmicHomepage.module.css" // plasmic-import: -yQP5mbA2FlJ/css
import ApiFancyBanners2SvgIcon from "./icons/PlasmicIcon__ApiFancyBanners2Svg" // plasmic-import: H64gaQo8h/icon

export const PlasmicHomepage__VariantProps = new Array()

export const PlasmicHomepage__ArgProps = new Array()

function PlasmicHomepage__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props
  return (
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <HeaderNav
            data-plasmic-name={"headerNav"}
            data-plasmic-override={overrides.headerNav}
            className={classNames("__wab_instance", sty.headerNav)}
          />

          <div className={classNames(defaultcss.all, sty.box__liary)}>
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box___96VJ
              )}
            >
              {'We don\'t do "websites" '}
            </div>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box___9Nv38
              )}
            >
              {"We provide advice, information and solutions."}
            </div>

            <ApiFancyBanners2SvgIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(defaultcss.all, sty.svg)}
              role={"img"}
            />

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__gLoE6
              )}
            >
              {
                "Providing Vermont with creative solutions and answers to technical challenges since 2019"
              }
            </div>
          </div>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  )
}

const PlasmicDescendants = {
  root: ["root", "headerNav", "svg", "footer"],
  headerNav: ["headerNav"],
  svg: ["svg"],
  footer: ["footer"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps,
    })

    const { dataFetches } = props
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage"
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`
  }
  return func
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerNav: makeNodeComponent("headerNav"),
    svg: makeNodeComponent("svg"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,
  }
)

export default PlasmicHomepage
/* prettier-ignore-end */