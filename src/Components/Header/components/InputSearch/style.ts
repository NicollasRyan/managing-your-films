import styled from "@emotion/styled";
import { Box, TextField, Typography } from "@mui/material";

export const BoxSearch = styled(Box)`
    padding: 0 16px;
    width: 420px;

    @media (max-width: 600px) {
        width: 300px;
    }
`;

export const Text = styled(Typography)`
    color: #e6e9ed;
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 0.2px;
    margin-top: 22px;
`;

export const Input = styled(TextField)`
    margin: 14px 0 0;
    background: rgba(255,255,255,0.06);
    border-radius: 10px;
    backdrop-filter: blur(4px);
    .MuiInputBase-root { color: #e6e9ed; }
    .MuiInputLabel-root { color: #b7bec8; }
    .MuiFilledInput-root { background: transparent; }
    .MuiFilledInput-underline:before,
    .MuiFilledInput-underline:after { border-bottom-color: rgba(255,255,255,0.18); }
`;
