import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Person2Icon from "@mui/icons-material/Person2";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MessageIcon from "@mui/icons-material/Message";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  Badge,
  InputBase,
  Avatar,
} from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import { GitHub, Mail } from "@mui/icons-material";
import { Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Iconss = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = ({ mode }) => {
  const [openMenu, setopenMenu] = useState(false);

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: mode === "dark" ? "purple" : "" }}
    >
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Sociofy
        </Typography>
        <GroupIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Iconss>
          <Badge
            color="error"
            onClick={() => window.open("https://stackoverflow.com/")}
            sx={{ cursor: "pointer" }}
          >
            <GitHub />
          </Badge>
          <Badge badgeContent={4} color="error" sx={{ cursor: "pointer" }}>
            <Mail />
          </Badge>
          <Badge badgeContent={5} color="error" sx={{ cursor: "pointer" }}>
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: "30px", height: "30px", cursor: "pointer" }}
            src="https://avatars.githubusercontent.com/u/69521378?v=4"
          />
          <Typography variant="span"> Sarfaraz Ahmed</Typography>
        </Iconss>
        <UserBox>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="https://avatars.githubusercontent.com/u/69521378?v=4"
          />
          <MenuIcon onClick={(e) => setopenMenu(true)} />
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={openMenu}
        onClose={(e) => setopenMenu(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem sx={{ display: "flex", justifyContent: "space-between" }}>
          Profile <Person2Icon />
        </MenuItem>
        <MenuItem sx={{ display: "flex", justifyContent: "space-between" }}>
          Notifications <NotificationsActiveIcon />
        </MenuItem>
        <MenuItem sx={{ display: "flex", justifyContent: "space-between" }}>
          Messages <MessageIcon />
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
