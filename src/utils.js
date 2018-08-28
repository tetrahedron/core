export const generateStyles = props => [
  props.padding && `padding: ${props.padding};`,
  props.margin && `margin: ${props.margin};`,
  props.width && `width: ${props.width};`,
  props.height && `height: ${props.height};`,
  props.visibility && `visibility: ${props.visibility};`,
  props.display && `display: ${props.display};`,
  props.opacity && `opacity: ${props.opacity};`,
  props.background && `background: ${props.background};`,
  props.border && `border: ${props.border};`,
  props.hidden && `display: none;`,
];
