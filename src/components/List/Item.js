import PropTypes from "prop-types";
import styled from "styled-components";
import Stylable from "../Stylable";

const Item = styled(Stylable("li"))`
  ${props => props.active && `${props.activeStyle};`};
  ${props => props.onClick && `cursor: pointer;`};
`;

Item.PropTypes = {
  active: PropTypes.bool,
  activeStyle: PropTypes.string,
};

Item.defaultProps = {
  padding: "10px 0 10px 20px",
  fontSize: "18px",
};

export default Item;
