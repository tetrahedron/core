import { injectGlobal } from "styled-components";

/**
 * Returns an array of valid css declarations generated
 * from the react props supplied.
 *
 * @param {array} props list of react props
 */
export const generateStyles = props => [
  props.padding && `padding: ${props.padding};`,
  props.margin && `margin: ${props.margin};`,
  props.width && `width: ${props.width};`,
  props.height && `height: ${props.height};`,
  props.visibility && `visibility: ${props.visibility};`,
  props.display && `display: ${props.display};`,
  props.opacity && `opacity: ${props.opacity};`,
  props.color && `color: ${props.color};`,
  props.background && `background: ${props.background};`,
  props.border && `border: ${props.border};`,
  props.fontSize && `font-size: ${props.fontSize};`,
  props.fontWeight && `font-weight: ${props.fontWeight};`,
  props.fontStyle && `font-style: ${props.fontStyle};`,
  props.fontFamily && `font-family: ${props.fontFamily};`,
  props.lineHeight && `line-height: ${props.lineHeight};`,
  props.textTransform && `text-transform: ${props.textTransform};`,
  props.hidden && `display: none;`,
];

/**
 * Injects our custom reset css styles into the html head
 *
 * @param {Object} props - custom configuration properties
 * @param {Object} props.body - configuration for the html body
 * @param {string} props.body.margin - margin to apply to the html body
 * @param {string} props.body.background - background to apply to the html body
 * @param {string} props.font - default font family to use
 */
export const resetCSS = ({ body = {}, font } = {}) => injectGlobal`
  html {
    line-height: 1.15;
    text-size-adjust: 100%;
  }
  body {
    margin: ${body.margin ? body.margin : "0"};
    ${body.background && `background: ${body.background};`}
    ${font && `font-family: ${font};`}
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
