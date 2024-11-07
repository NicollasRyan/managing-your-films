import styled from "@emotion/styled";
import { Box, TextField, Typography } from "@mui/material";

export const BoxSearch = styled(Box)`
    padding: 0 15px 0 15px;
    width: 400px;

    @media (max-width: 600px) {
        width: 300px;
    }
`;

export const Text = styled(Typography)`
    color: #fff;
    font-size: 16px;
    font-weight: 700;

    margin-top: 30px;
`;

export const Input = styled(TextField)`
    margin: 50px 0 0;
    background: #fff;
    border-radius: 5px 5px 0 0;
`;
