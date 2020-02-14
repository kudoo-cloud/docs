import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Index } from 'elasticlunr'
import { navigate } from 'gatsby'
import findIndex from 'lodash/findIndex'
import find from 'lodash/find'
import { withStyles, Dropdown, SearchInput } from '@kudoo/components'
import Collapse from '../Collapse'
import styles from './styles'

const SidebarShowBtn = ({ classList = [], onClick = () => {} }) => {
  return (
    <div className={classList.join(' ')} onClick={onClick}>
      &#10095;
    </div>
  )
}

class Sidebar extends Component {
  static propTypes = {
    basePath: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    versionList: PropTypes.array.isRequired,
    sidebarJson: PropTypes.array,
    onVersionChange: PropTypes.func,
    posts: PropTypes.array,
    siteSearchIndex: PropTypes.any,
    location: PropTypes.any,
  }

  state = {
    version: this.props.version,
    searchedItems: [],
    showBtnClicked: false,
  }

  onShowBtnClicked = () => {
    this.setState(prevState => {
      return {
        showBtnClicked: !prevState.showBtnClicked,
      }
    })
  }

  _getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
      Index.load(this.props.siteSearchIndex.index)

  _onSearch = text => {
    const { category, version, posts } = this.props
    this.index = this._getOrCreateIndex()
    const docs = this.index
      .search(text)
      .map(({ ref }) => this.index.documentStore.getDoc(ref))
      .filter(({ id }) => id.indexOf(`${category}/${version}`) > -1)
      .map(({ id }) => find(posts, { node: { id } }))

    const searchedItems = docs.map(({ node }) => ({
      label: node.frontmatter.title,
      slug: node.fields.slug,
    }))
    this.setState({
      searchedItems,
    })
  }

  _onSearchItemClick = item => {
    navigate(item.slug)
  }

  _renderItems(items, parentLink) {
    return items.map((item, index) => {
      let nextParentLink = parentLink + item.link
      nextParentLink = nextParentLink.replace(/\/\//g, '/')
      return (
        <Collapse
          title={item.label}
          link={nextParentLink}
          location={this.props.location}
          key={`${item.label}--${index}`}
        >
          {item.children && this._renderItems(item.children, nextParentLink)}
        </Collapse>
      )
    })
  }

  _renderBottomLink = (label, subtitle, link) => {
    const { classes } = this.props
    return (
      <a className={classes.bottomLink} href={link} target="_blank">
        <div className={classes.linkSubtitle}>{subtitle}</div>
        <div className={classes.linkLabel}>{label}</div>
      </a>
    )
  }

  render() {
    const {
      sidebarJson,
      basePath,
      classes,
      versionList,
      onVersionChange,
    } = this.props
    const { version } = this.props
    const versionIndex = findIndex(versionList, { value: version })
    return (
      <div>
        <SidebarShowBtn
          classList={[
            classes.showBtn,
            this.state.showBtnClicked ? classes.hideShowBtn : '',
          ]}
          onClick={this.onShowBtnClicked}
        />
        <div
          className={[
            classes.component,
            this.state.showBtnClicked
              ? classes.showSidebar
              : classes.hideSidebar,
          ].join(' ')}
        >
          <div className={classes.searchWrapper}>
            <SearchInput
              placeholder={'Search'}
              showClearIcon={false}
              onSearch={this._onSearch}
              onItemClick={this._onSearchItemClick}
              searchLoading={false}
              items={this.state.searchedItems}
              showSearchIcon={false}
            />
          </div>
          <div className={classes.versionWrapper}>
            <Dropdown
              label="Version"
              selectedIndex={versionIndex}
              placeholder="Select Version"
              items={versionList}
              onChange={onVersionChange}
            />
          </div>
          <div className={classes.items}>
            {this._renderItems(sidebarJson, basePath)}
          </div>
          <div>
            {/* this._renderBottomLink(
              'Ask our community',
              'Want some extra help?',
              'http://community.kudoo.io/'
            ) */}
            {this._renderBottomLink(
              'Contact us directly',
              'Need to chat?',
              'https://kudoo.io/contact'
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Sidebar)
