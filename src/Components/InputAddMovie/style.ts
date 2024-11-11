import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";

export const InputAdd = styled(TextField)`
    margin: 50px 0 0;
    background: #fff;
    border-radius: 5px 5px 0 0;
`;

export const ButtonAdd = styled(Button)`
    color: #fff;
    background: #199900;
    border-radius: 0 0 5px 5px;

    padding: 15px;

    :hover {
        background: #325425;
    }
`;
