import styled from "styled-components";
import { AppBar, Typography } from "@material-ui/core";

export const TitleBar = styled(AppBar)`
  border-radius: 15px;
  margin: 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled(Typography)`
  color: rgba(0, 183, 255, 1);
`;

export const Image = styled.img`
  margin-left: 15px;
`;
