import React, { Component } from 'react'
import idx from 'idx'
import { graphql, navigate } from 'gatsby'
import Sidebar from '../components/Sidebar'
import Layout from '../components/layout'
import { Footer, withStyles } from '@kudoo/components'

class Post extends Component {
  render () {
    const post = idx(this.props, _ => _.data.markdownRemark)
    const posts = idx(this.props, _ => _.data.allMarkdownRemark)
    const siteSearchIndex = idx(this.props, _ => _.data.siteSearchIndex)
    const { basePath, category, version, sidebarJson, versionList } = idx(
      this.props,
      _ => _.pageContext
    )
    if (!post) {
      return null
    }
    const { classes, location } = this.props
    const pathname = location.pathname
    const pos = pathname.indexOf(version)
    const restPath = pathname.substr(pos + version.length + 1)
    return (
      <Layout location={location}>
        <div className={classes.post}>
          <Sidebar
            sidebarJson={sidebarJson}
            basePath={basePath}
            category={category}
            version={version}
            versionList={versionList}
            siteSearchIndex={siteSearchIndex}
            posts={posts.edges}
            location={location}
            onVersionChange={item => {
              navigate(`/${ category }/${ item.value }/${ restPath }`)
            }}
          />
          <div className={classes.postContent}>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
          <Footer />
        </div>
      </Layout>
    )
  }
}

const styles = theme => ({
  post: {
    marginLeft: 300,
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'calc(100vh - 80px)',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  },
  postContent: {
    padding: [[40, 70]],
    flex: 1,
    [theme.breakpoints.down('xs')]: {
      padding: 40
    }
  }
})

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
    siteSearchIndex {
      index
    }
  }
`

export default withStyles(styles)(Post)