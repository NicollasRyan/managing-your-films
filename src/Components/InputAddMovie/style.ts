import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";

export const InputAdd = styled(TextField)`
    margin: 28px 0 0;
    background: rgba(255,255,255,0.06);
    border-radius: 10px 10px 0 0;
    backdrop-filter: blur(4px);
    .MuiInputBase-root {
        color: #e6e9ed;
    }
    .MuiInputLabel-root {
        color: #b7bec8;
    }
    .MuiFilledInput-root {
        background: transparent;
    }
    .MuiFilledInput-underline:before,
    .MuiFilledInput-underline:after {
        border-bottom-color: rgba(255,255,255,0.18);
    }
`;

export const ButtonAdd = styled(Button)`
    color: #0f1419;
    background: linear-gradient(135deg, #9ef01a, #70e000);
    border-radius: 0 0 10px 10px;
    padding: 14px 16px;
    font-weight: 800;
    letter-spacing: 0.2px;
    transition: transform 160ms ease, box-shadow 160ms ease, filter 160ms ease;

    :hover {
        filter: brightness(1.05);
        transform: translateY(-1px);
        box-shadow: 0 12px 24px rgba(0,0,0,0.35);
        background: linear-gradient(135deg, #9ef01a, #56c400);
    }
`;
