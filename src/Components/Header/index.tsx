import { Avatar, IconButton, Tooltip } from "@mui/material";
import { BoxHeader, ContainerHeader, Title } from "./style";
import { BookmarksOutlined } from "@mui/icons-material";
import { useState, MouseEvent } from "react";
import { MenuComponent } from "./components/Menu";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export function Header() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const navigate = useNavigate();

    const handleClick = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);

    const handleClose = () => setAnchorEl(null);
    const auth = getAuth();
    const user = auth.currentUser;
    const name = user?.displayName;

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
            setAnchorEl(null);
        } catch (error) {
            console.error("Erro ao fazer logout: ", error);
        }
    };

    return (
        <BoxHeader>
            <ContainerHeader>
                <Title>Managing Your Films <BookmarksOutlined /></Title>

                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 35, height: 35 }} />
                    </IconButton>
                </Tooltip>
                <MenuComponent handleClose={handleClose} open={open} anchorEl={anchorEl} name={name} logout={handleLogout} />
            </ContainerHeader>
        </BoxHeader>
    )
}