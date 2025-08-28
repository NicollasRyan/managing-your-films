import styled from "@emotion/styled";
import { Avatar, Box, Button, Container, Typography } from "@mui/material";

export const BoxHeader = styled(Box)`
  padding: 40px 0;
  background: rgba(255,255,255,0.02);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  box-shadow: 0 6px 20px rgba(0,0,0,0.25);

  @media (max-width: 600px) {
    padding: 40px 0;
  }
`;

export const ButtonToSearch = styled(Button)`
  color: #e6e9ed;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 10px;
  padding: 8px 12px;
  transition: background 160ms ease, transform 160ms ease, box-shadow 160ms ease;

  :hover {
    background: rgba(255,255,255,0.12);
    transform: translateY(-1px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.25);
  }
`;

export const ContainerHeader = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const Title = styled(Typography)`
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 0.3px;
  background: linear-gradient(90deg, #ffffff, #b7bec8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (max-width: 600px) {
    font-size: 18px;
    font-weight: 700;
  }
`;

export const AvatarProfile = styled(Avatar)`
  width: 35px;
  height: 35px;
  border: 2px solid rgba(255,255,255,0.18);
  box-shadow: 0 6px 16px rgba(0,0,0,0.25);

  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;
