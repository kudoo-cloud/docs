import React, { Component } from "react"
import { Link } from "gatsby"
import cx from "classnames"
import last from "lodash/last"
import PropTypes from "prop-types"
import { withStyles } from "@kudoo/components"
import styles from "./styles"
import LogoImage from "@kudoo/components/build/assets/images/logo.png"
import administratorVersion from "../../pages/administrator/versions.json"
import developerVersions from "../../pages/developer/versions.json"
import governanceVersions from "../../pages/governance/versions.json"

const latestAdministratorVersion = last(administratorVersion)
const latestDeveloperVersion = last(developerVersions)
const latestGovernanceVersion = last(governanceVersions)

class Header extends Component {
  static propTypes = {
    location: PropTypes.object,
  }

  _isActive = link => {
    const { location = {} } = this.props
    return location.pathname.indexOf(link) > 0
  }

  render() {
    const { classes, location = {} } = this.props
    return (
      <div className={classes.component}>
        <div className={classes.headerWrapper}>
          <Link to="/">
            <img src={LogoImage} alt="logo" className={classes.logo} />
          </Link>
        </div>
        <div className={classes.headerPlaceholder} />
        <div className={classes.topBar}>
          <div className={classes.arrow} />
          <div className={classes.topBarLinks}>
            <a
              className={classes.topBarLink}
              href="https://kudoo.io/"
              target="_blank"
            >
              Kudoo
            </a>
            {/*
            <a
              className={classes.topBarLink}
              href="http://community.kudoo.io/"
              target="_blank">
              Community
            </a> */}
            {/* <a
              className={classes.topBarLink}
              href="https://kudoo.io/contact"
              target="_blank">
              Contact
            </a> */}
          </div>
        </div>
        {location.pathname !== "/" && (
          <div className={classes.bottomBar}>
            <div className={classes.bottomBarLinks}>
              <Link
                className={cx(classes.bottomBarLink, {
                  activeLink: this._isActive("administrator"),
                })}
                to={`/administrator/${latestAdministratorVersion.value}/`}
              >
                Administrator
              </Link>
              <Link
                className={cx(classes.bottomBarLink, {
                  activeLink: this._isActive("developer"),
                })}
                to={`/developer/${latestDeveloperVersion.value}/`}
              >
                Developer
              </Link>
              <Link
                className={cx(classes.bottomBarLink, {
                  activeLink: this._isActive("governance"),
                })}
                to={`/governance/${latestGovernanceVersion.value}/`}
              >
                Governance
              </Link>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(Header)
