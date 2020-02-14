export default theme => ({
  component: {
    width: 300,
    position: 'fixed',
    top: 80,
    left: 0,
    bottom: 0,
    backgroundColor: theme.palette.grey['100'],
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 98
  },
  hideSidebar: {
    [theme.breakpoints.down("sm")]: {
      transform: "translateX(-300px)",
      transition: "0.6s ease"
    }
  },
  showSidebar: {
    [theme.breakpoints.down("sm")]: {
      transform: "translateX(0px)",
      transition: "0.6s ease"
    }
  },
  searchWrapper: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderBottom: '1px solid #e5e5e5',
  },
  versionWrapper: {
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  items: {
    flex: 1,
  },
  bottomLink: {
    backgroundColor: theme.palette.blueGrey['50'],
    padding: 15,
    color: 'white',
    fontWeight: 500,
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'block',
    borderBottom: '1px solid #434856',
  },
  linkLabel: {
    fontSize: 17,
    fontFamily: theme.typography.font.family2,
  },
  linkSubtitle: {
    fontSize: 12,
    fontFamily: theme.typography.font.family2,
    marginBottom: 5,
  },
  showBtn: {
    top: "50%",
    left: "0",
    width: "50px",
    color: "#4d5769",
    cursor: "pointer",
    height: "80px",
    position: "fixed",
    transform: "translate(-30%, -50%)",
    fontSize: "22px",
    textAlign: "center",
    transition: "0.6s ease",
    fontWeight: "bold",
    lineHeight: "80px",
    borderRadius: "0 100% 100% 0",
    background: "#EDEDF0",
    zIndex: "99",
    display: "none",
    boxShadow: "2px 2px 5px rgba(0,0,0,0.4)",
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  },
  hideShowBtn: {
    transform: "translate(250px,-50%) rotate(-180deg)",
    transition: "0.6s ease",
    boxShadow: "1px 1px 3px rgba(0,0,0,0.4)"
  }
})
