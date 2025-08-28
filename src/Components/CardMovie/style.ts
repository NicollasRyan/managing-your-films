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

    @media (max-width: 600px) {
        padding: 14px 16px;
        gap: 12px;
        margin: 12px 0;
    }

    @media (max-width: 480px) {
        padding: 12px 14px;
        gap: 10px;
        margin: 10px 0;
    }
`;

export const Left = styled(Box)`
    display: flex;
    align-items: center;
    gap: 14px;

    @media (max-width: 600px) {
        gap: 12px;
    }

    @media (max-width: 480px) {
        gap: 10px;
    }
`;

export const Right = styled(Box)`
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 600px) {
        gap: 8px;
    }

    @media (max-width: 480px) {
        gap: 6px;
    }
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

    @media (max-width: 600px) {
        width: 24px;
        height: 24px;
    }

    @media (max-width: 480px) {
        width: 22px;
        height: 22px;
    }
`;

export const Title = styled(Typography)`
    font-size: 18px;
    font-weight: 800;
    letter-spacing: 0.4px;
    color: #fff;

    @media (max-width: 600px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

export const Meta = styled(Typography)`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #d2d6da;
    font-size: 13px;
    font-weight: 700;

    @media (max-width: 600px) {
        font-size: 12px;
        gap: 5px;
    }

    @media (max-width: 480px) {
        font-size: 11px;
        gap: 4px;
    }
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

  /* Increment button (Add icon) */
  &:has(svg[data-testid="AddIcon"]) {
    color: #9ef01a;
    border-color: rgba(158, 240, 26, 0.4);
    background: rgba(158, 240, 26, 0.08);

    :hover {
      background: rgba(158, 240, 26, 0.16);
      border-color: rgba(158, 240, 26, 0.7);
      color: #b8ff4d;
    }
  }

  /* Decrement button (Remove icon) */
  &:has(svg[data-testid="RemoveIcon"]) {
    color: #ff9500;
    border-color: rgba(255, 149, 0, 0.4);
    background: rgba(255, 149, 0, 0.08);

    :hover {
      background: rgba(255, 149, 0, 0.16);
      border-color: rgba(255, 149, 0, 0.7);
      color: #ffb366;
    }

    &:disabled {
      color: rgba(255, 149, 0, 0.3);
      border-color: rgba(255, 149, 0, 0.2);
      background: rgba(255, 149, 0, 0.04);
      cursor: not-allowed;
      
      :hover {
        background: rgba(255, 149, 0, 0.04);
        border-color: rgba(255, 149, 0, 0.2);
        color: rgba(255, 149, 0, 0.3);
        box-shadow: none;
      }
    }
  }

  @media (max-width: 600px) {
    padding: 6px 8px;
    min-width: 36px;
    border-radius: 8px;
    
    svg {
      font-size: 18px !important;
    }
  }

  @media (max-width: 480px) {
    padding: 5px 6px;
    min-width: 32px;
    border-radius: 6px;
    
    svg {
      font-size: 16px !important;
    }
  }
`;


