import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Stylable from "../Stylable";

const UL = styled(Stylable("ul"))`
  list-style: ${props => props.listStyle};
`;

const List = ({ activeStyle, children, ...props }) => (
  <UL {...props}>
    {activeStyle
      ? React.Children.map(children, child =>
          React.cloneElement(child, { activeStyle })
        )
      : children}
  </UL>
);

List.propTypes = {
  listStyle: PropTypes.string.isRequired,
  activeStyle: PropTypes.string,
};

List.defaultProps = {
  width: "200px",
  padding: "5px",
  listStyle: "none",
  activeStyle: "box-shadow: -5px 0 0 0 mediumslateblue;",
};

export default List;
