export default theme => ({
  component: {},
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  title: {
    fontFamily: theme.typography.font.family2,
    fontSize: 16,
    color: theme.palette.blueGrey['50'],
    flex: 1,
    padding: 15,
    textDecoration: 'none',
    '&.activeTitle': {
      backgroundColor: '#eaeaea',
    },
  },
  titleIcon: {
    padding: [[10, 0]],
  },
  icon: {
    fontSize: 16,
    borderLeft: '1px solid #aaa',
    padding: [[6, 25]],
    color: '#aaa',
    '& i': {
      display: 'inline-block',
      transition: 'all 0.3s ease-in',
    },
    '& i.open': {
      transform: 'rotate(90deg)',
    },
  },
  childrenWrapper: {
    marginLeft: 10,
  },
})
