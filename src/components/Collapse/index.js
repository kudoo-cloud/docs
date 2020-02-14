import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Link } from 'gatsby'
import { Collapse as BaseCollapse } from 'react-collapse'
import { withStyles } from '@kudoo/components'
import styles from './styles'

class Collapse extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    location: PropTypes.any,
    children: PropTypes.node
  }

  state = {
    collapsed: true
  }

  _toggleCollapse = () => {
    const { collapsed } = this.state
    this.setState({
      collapsed: !collapsed
    })
  }

  render () {
    const { classes, title, children, location } = this.props
    let { link } = this.props
    const { collapsed } = this.state
    if (link[link.length - 1] != '/') {
      link = link + '/'
    }
    return (
      <div className={classes.component}>
        <div className={classes.titleWrapper}>
          <Link
            to={link}
            className={cx(classes.title, {
              activeTitle: location.pathname === link
            })}>
            {title}
          </Link>
          {children && (
            <div className={classes.titleIcon} onClick={this._toggleCollapse}>
              <span className={classes.icon}>
                <i className={cx('ion-arrow-right-b', { open: !collapsed })} />
              </span>
            </div>
          )}
        </div>
        {children && (
          <BaseCollapse isOpened={!collapsed}>
            <div className={classes.childrenWrapper}>{children}</div>
          </BaseCollapse>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(Collapse)
