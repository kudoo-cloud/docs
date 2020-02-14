const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const idx = require('idx')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const PostTemplates = path.resolve('./src/templates/post.js')
    resolve(
      graphql(
        `
          query {
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    id
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges
        _.each(posts, (post, index) => {
          if (idx(post, _ => _.node.fields.slug)) {
            const category = post.node.fields.slug.split('/')[1]
            let version = post.node.fields.slug.split('/')[2]
            let sidebarJson = []
            let versionList = []
            try {
              sidebarJson = require(`./src/pages/${ category }/${ version }/sidebar.json`)
            } catch (e) {}
            try {
              versionList = require(`./src/pages/${ category }/versions.json`)
            } catch (e) {}

            createPage({
              path: post.node.fields.slug,
              component: PostTemplates,
              context: {
                slug: post.node.fields.slug,
                sidebarJson: sidebarJson,
                basePath: `/${ category }/${ version }`,
                category: category,
                version: version,
                versionList: versionList
              }
            })
          }
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}
