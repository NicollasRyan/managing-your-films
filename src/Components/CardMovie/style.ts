import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

export const BoxMovie = styled(Box)`
    display: flex;
    justify-content: space-between;

    margin: 20px 0;
    background: #35383a;
    border-radius: 10px;
    padding: 30px;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;

export const BoxText = styled(Box)`
    display: flex;
    flex-direction: column;
`;

export const Title = styled(Typography)`
    font-size: 20px;
    font-family: "Merriweather", serif;
    font-weight: 700;
    color: #fff;

    @media (max-width: 600px) {
    font-size: 12px;
    }
`;

export const SeeMovie = styled(Typography)`
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Merriweather", serif;
    color: #fff;
    font-size: 20px;
    font-weight: 700;

    margin-right: auto;

    @media (max-width: 600px) {
    font-size: 12px;
    }
`;

export const ButtonDelete = styled(Button)`
  padding: 12px;
  background: #d1d1d1;
  color: #fa5e55;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    background: #a41d1d;
    color: #dbdbdb;
  }

  @media (max-width: 600px) {
    max-height: 40px;
  }
`;