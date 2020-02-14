
const commonForTopandBottomBar = (theme) => ({
  [theme.breakpoints.down("xs")]: {
    position: "static",
    height: "unset",
    width: "100%",
    justifyContent: "center",
    minWidth: "100%",
    boxSizing: "border-box"
  }
});

const commonForTopandBottomBarLink = theme => ({
  [theme.breakpoints.down("xs")]: {
    padding: "10px"
  },
  [theme.breakpoints.down("xs")]: {
    width: "100%",
    marginRight: "0px",
    padding: "10px 0px"
  }
});

export default theme => ({
  component: {
    position: 'relative',
  },
  headerWrapper: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    height: 40,
    padding: [[20, 40]],
    boxShadow: '0px 0px 10px #555',
    backgroundColor: '#EDEDF0',
    zIndex: 1000,
    [theme.breakpoints.down("xs")]: {
      padding: [[20, 20]]
    }
  },
  headerPlaceholder: {
    height: 80,
  },
  logo: {
    maxWidth: 150,
  },
  topBar: {
    backgroundColor: '#69727B',
    padding: [[5, 10]],
    position: 'fixed',
    top: 0,
    right: 0,
    width: '70%',
    minWidth: 320,
    height: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    zIndex: 1001,
    ...commonForTopandBottomBar(theme)
  },
  arrow: {
    width: 0,
    height: 0,
    borderLeft: `0px solid transparent`,
    borderRight: `35px solid transparent`,
    borderBottom: `35px solid #EDEDF0`,
    position: 'absolute',
    left: 0,
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  topBarLinks: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: "wrap"
  },
  topBarLink: {
    marginRight: 25,
    color: 'white',
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontFamily: theme.typography.font.family2,
    fontSize: 16,
    fontWeight: 500,
    ...commonForTopandBottomBarLink(theme)
  },
  bottomBar: {
    padding: [[5, 20]],
    position: 'fixed',
    top: 40,
    right: 0,
    width: '70%',
    minWidth: 320,
    height: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    zIndex: 1001,
    ...commonForTopandBottomBar(theme)
  },
  bottomBarLinks: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: "wrap"

  },
  bottomBarLink: {
    marginRight: 25,
    color: theme.palette.blueGrey['50'],
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontFamily: theme.typography.font.family2,
    fontSize: 14,
    fontWeight: 500,
    paddingBottom: 5,
    borderBottom: `2px solid transparent`,
    '&.activeLink': {
      borderBottom: `2px solid ${theme.palette.blueGrey['50']}`,
    },
    ...commonForTopandBottomBarLink(theme)
  },
})
