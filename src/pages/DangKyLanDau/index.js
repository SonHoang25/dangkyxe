import { Container, makeStyles, Paper, Tab, Tabs, Typography, withStyles } from '@material-ui/core'
import React, { useState } from 'react'
import BreadCrumb from '../../component/BreadCrumbs'
import DaDangKy from '../DaDangKy'
import FormDangKyLanDau from '../FormDangKyLanDau'

const MyTabs = withStyles({
  indicator: {
    backgroundColor: '#1f62b0',
  },
})(Tabs);

const MyTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    lineHeight: '1.5',
    letterSpacing: '0.00938em',
    fontSize: '0.9rem',
    '&$selected': {
      fontWeight: '500'
    },
  },
  selected: {},
}))((props) => <Tab {...props} />);

const useStyle = makeStyles((theme) => ({
  root: {
    padding: '0 1rem 1rem',
    maxWidth: '100%'
  },
  container: {
    background: 'white',
    borderRadius: '3px',
    padding: '16px'
  },
  header: {
    textAlign: 'center',
    fontWeight: '700',
    textTransform: 'upperCase',
    fontSize: '1.2rem',
    letterSpacing: '0.01071em',
  }
}))

const QuanLyLayout = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  const classes = useStyle()

  const handleChangeIndex = (e, index) => {
    setSelectedTab(index);
  };

  return (
    <Container className={classes.root}>
      <BreadCrumb />
      <Paper className={classes.container}>
        <Typography className={classes.header}>đăng ký lần đầu</Typography>
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
  )
}

export default QuanLyLayout
