import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

export const Card = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    margin: 18px 0;
    padding: 18px 20px;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
    backdrop-filter: blur(6px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
    transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;

    :hover {
        transform: translateY(-2px);
        border-color: rgba(255, 255, 255, 0.16);
        box-shadow: 0 16px 32px rgba(0, 0, 0, 0.45);
    }
`;

export const Left = styled(Box)`
    display: flex;
    align-items: center;
    gap: 14px;
`;

export const Right = styled(Box)`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Badge = styled(Box)`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.18);
    box-shadow: 0 4px 10px rgba(0,0,0,0.25);
    color: #e6e9ed;
`;

export const Title = styled(Typography)`
    font-size: 18px;
    font-weight: 800;
    letter-spacing: 0.4px;
    color: #fff;
`;

export const Meta = styled(Typography)`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #d2d6da;
    font-size: 13px;
    font-weight: 700;
`;

export const Action = styled(Button)`
    padding: 8px 10px;
    min-width: 40px;
    border-radius: 10px;
    color: #ffb3ad;
    border: 1px solid rgba(250, 94, 85, 0.4);
    background: rgba(250, 94, 85, 0.08);
    transition: all 180ms ease;

    :hover {
        background: rgba(250, 94, 85, 0.16);
        border-color: rgba(250, 94, 85, 0.7);
        box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35);
        color: #ffd6d2;
    }
`;


