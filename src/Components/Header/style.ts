import styled from "@emotion/styled";
import { Box, Button, Container, Typography } from "@mui/material";

export const BoxHeader = styled(Box)`
padding: 60px 0;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const ButtonToSearch = styled(Button)`
  color: #fff;
  background: transparent;
  border: 1px solid #a3a3a3;
`;

export const ContainerHeader = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;


export const Title = styled(Typography)`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
`;
