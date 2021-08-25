import {
    Container,
    makeStyles,
    Paper,
    Tab,
    Tabs,
    Typography,
    withStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import BreadCrumb from "../../components/BreadCrumbs";
import DaDangKy from "./Table";
import FormDangKyLanDau from "./Form";

const MyTabs = withStyles({
    indicator: {
        backgroundColor: "#1f62b0",
    },
})(Tabs);

const MyTab = withStyles((theme) => ({
    root: {
        textTransform: "none",
        lineHeight: "1.5",
        letterSpacing: "0.00938em",
        fontSize: "0.9rem",
        "&$selected": {
            fontWeight: "500",
        },
    },
    selected: {},
}))((props) => <Tab {...props} />);

const useStyle = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(0, 2, 2, 2),
        maxWidth: "100%",
    },
    container: {
        fontWeight: "400",
        background: "white",
        borderRadius: "3px",
        padding: theme.spacing(2),
    },
    header: {
        textAlign: "center",
        fontWeight: "700",
        textTransform: "upperCase",
        fontSize: "1.2rem",
        letterSpacing: "0.01071em",
    },
}));

const QuanLyLayout = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const classes = useStyle();
    document.title = "Đăng ký lần đầu";
    const handleChangeIndex = (e, index) => {
        setSelectedTab(index);
    };

    return (
        <Container className={classes.root}>
            <BreadCrumb />
            <Paper className={classes.container}>
                <Typography className={classes.header}>
                    đăng ký lần đầu
                </Typography>
                <MyTabs
                    value={selectedTab}
                    onChange={handleChangeIndex}
                    // variant="fullWidth"
                >
                    <MyTab label="Đăng ký lần đầu" />
                    <MyTab label="Danh sách đã đăng ký" />
                </MyTabs>
                {selectedTab === 0 && <FormDangKyLanDau />}
                {selectedTab === 1 && <DaDangKy />}
            </Paper>
        </Container>
    );
};

export default QuanLyLayout;
