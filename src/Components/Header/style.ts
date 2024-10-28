import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";

export const BoxHeader = styled(Box)`
padding: 60px 0;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const ContainerHeader = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;


export const Title = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
