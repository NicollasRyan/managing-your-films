import styled from "@emotion/styled";
import { Avatar, Box, Button, Container, Typography } from "@mui/material";

export const BoxHeader = styled(Box)`
  padding: 60px 0;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 600px) {
    padding: 40px 0;
  }
`;

export const ButtonToSearch = styled(Button)`
  color: #fff;
  background: transparent;
  border: 1px solid #a3a3a3;
`;

export const ContainerHeader = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(Typography)`
  font-size: 25px;
  font-weight: bold;
  color: #fff;

  @media (max-width: 600px) {
    font-size: 18px;
    font-weight: 700;
  }
`;

export const AvatarProfile = styled(Avatar)`
  width: 35px;
  height: 35px;

  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;
