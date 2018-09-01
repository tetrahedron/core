import styled from "styled-components";
import Stylable from "./Stylable";

const Page = styled(Stylable("section"))`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
`;

Page.defaultProps = {};

export default Page;
