import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

export const BoxMovie = styled(Box)`
    display: flex;
    justify-content: space-between;

    margin: 20px 0;
    background: #35383a;
    border-radius: 10px;
    padding: 30px;
`;

export const BoxText = styled(Box)`
    display: flex;
    flex-direction: column;
`;

export const Title = styled(Typography)`
    font-size: 18px;
    font-weight: 700;
    color: #fff;
`;

export const SeeMovie = styled(Typography)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 18px;
    font-weight: 700;

    margin-right: auto;
`;

export const ButtonDelete = styled(Button)`
  padding: 15px;
  border: 1px solid #fa5e55;

  color: #fa5e55;

  :hover {
    background: #ff1b14;
    color: #dbdbdb;
  }

  @media (max-width: 600px) {
    padding: 5px;
  }
`;