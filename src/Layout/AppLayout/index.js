import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import {
    Collapse,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
    username: "test05",
    password: "abcd1234",
});

var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
};

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        textTransform: "upperCase",
        fontSize: "1rem",
        lineHeight: "1.43",
        letterSpacing: "1.5px",
        userSelect: "none",
    },
    text: {
        fontSize: "0.875rem",
        lineHeight: "1.43",
        letterSpacing: "0.01071em",
        color: "white",
        fontWeight: "600",
    },
    list: {
        width: 250,
        background: "#184a85",
        height: "100%",
        paddingTop: "48px",
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    drawerHeader: {
        ...theme.mixins.toolbar,
    },
    appBar: {
        minHeight: "48px",
        background: "#184a85",
    },
    drawer: {},
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchor, setAnchor] = useState(false);
    const [open, setOpen] = useState(false);

    const { setApiKey } = useContext(DataContext);

    const login = () => {
        fetch("http://10.0.25.184:8089/DkOtoFull/user/login", requestOptions)
            .then((response) => response.json())
            .then((data) => setApiKey(data.result.api_key))
            .catch((error) => console.log("error", error));
    };
    const history = useHistory();

    const toggleDrawer = () => {
        setAnchor(!anchor);
    };

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        login();
    };

    const menuId = "account-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Login</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar className={classes.appBar}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        onClick={toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.grow} />
                    <Typography className={classes.title} noWrap>
                        Hệ Thống Đăng Ký Xe Ô Tô
                    </Typography>
                    <div className={classes.grow} />
                    <IconButton
                        className={classes.sectionDesktop}
                        edge="end"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                open={anchor}
                onClose={toggleDrawer}
                className={classes.drawer}
            >
                <div className={classes.list}>
                    <List>
                        <ListItem
                            button
                            onClick={() => history.push("/trangchu")}
                        >
                            <ListItemText
                                classes={{ root: classes.text }}
                                primary="Trang chủ"
                            />
                        </ListItem>
                        <ListItem button onClick={handleClick}>
                            <ListItemText
                                classes={{ root: classes.text }}
                                primary="Quản lý đăng ký xe"
                            />
                            {open ? (
                                <ExpandLess classes={classes.text} />
                            ) : (
                                <ExpandMore classes={classes.text} />
                            )}
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem
                                    button
                                    className={classes.nested}
                                    onClick={() =>
                                        history.push("/dangkylandau")
                                    }
                                >
                                    <ListItemText
                                        classes={{ root: classes.text }}
                                        primary="Đăng ký lần đầu"
                                    />
                                </ListItem>
                                <ListItem
                                    button
                                    className={classes.nested}
                                    onClick={() => history.push("/quanlyhoso")}
                                >
                                    <ListItemText
                                        classes={{ root: classes.text }}
                                        primary="Quản lý hồ sơ"
                                    />
                                </ListItem>
                            </List>
                        </Collapse>
                    </List>
                </div>
            </Drawer>
            {renderMenu}
        </div>
    );
}
