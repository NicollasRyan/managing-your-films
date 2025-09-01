import { Drawer, IconButton, Tooltip } from "@mui/material";
import { BoxHeader, ButtonToSearch, ContainerHeader, Title, AvatarProfile } from "./style";
import { SearchOutlined } from "@mui/icons-material";
import { useState, MouseEvent } from "react";
import { MenuComponent } from "./components/Menu";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { InputSearch } from "./components/InputSearch";

export function Header() {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openLogin = Boolean(anchorEl);

    const navigate = useNavigate();

    const handleClick = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);

    const handleClose = () => setAnchorEl(null);

    const auth = getAuth();
    const user = auth.currentUser;
    const name = user?.displayName;

    const toggleDrawer: any = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

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
                <ButtonToSearch onClick={toggleDrawer(true)}>
                    <SearchOutlined />
                </ButtonToSearch>
                <Drawer
                    open={open}
                    onClose={toggleDrawer(false)}
                    PaperProps={{ style: { backgroundColor: "#212121" } }}
                >
                    <InputSearch />
                </Drawer>
                <Title>
                    Managing Your Films
                </Title>

                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={openLogin ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openLogin ? 'true' : undefined}
                    >
                        <AvatarProfile />
                    </IconButton>
                </Tooltip>
                <MenuComponent handleClose={handleClose} open={openLogin} anchorEl={anchorEl} name={name} logout={handleLogout} />
            </ContainerHeader>
        </BoxHeader>
    )
}