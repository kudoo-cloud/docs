import React from 'react'
import favIcon from './favicon.ico'
import PropTypes from 'prop-types'

export default class HTML extends React.Component {
  render () {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          <link
            href="//fonts.googleapis.com/css?family=Montserrat:300,500,400,700,900"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="//fonts.googleapis.com/css?family=Roboto:300,400,700,900"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700"
            rel="stylesheet"
          />
          <link
            href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
            rel="stylesheet"
          />
          <script src="https://use.fontawesome.com/a5563e7fff.js" />
          <link type="image/x-icon" rel="icon" href={favIcon} />
          <noscript id="jss-insertion-point" />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
}
