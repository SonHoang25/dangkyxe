import { Breadcrumbs, Link, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  breadCrumb: {
    padding: '8px 0',
  },
  text: {
    fontSize: '14px',
    lineHeight: '1.5',
    letterSpacing: '0.00938em'
  }
}))

const BreadCrumb = () => {
  const classes = useStyles()

  const handleClick = (e) => {
    e.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.breadCrumb}>
      <Link className={classes.text} color="inherit" href="/" onClick={handleClick}>
        Trang chủ
      </Link>
      <Link className={classes.text} color="inherit"
        href="/getting-started/installation/" onClick={handleClick}>
        Quản lý đăng ký xe
      </Link>
      <Typography color="textPrimary" className={classes.text}>Đăng ký lần đầu</Typography>
    </Breadcrumbs>
  )
}

export default BreadCrumb
