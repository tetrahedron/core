import { injectGlobal } from "styled-components";
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

export const resetCSS = () => injectGlobal`
  html {
    line-height: 1.15;
    text-size-adjust: 100%;
  }
  body {
    margin: 0;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
