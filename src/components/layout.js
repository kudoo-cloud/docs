import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from './Header'
import './layout.css'
import 'normalize.css'

const TemplateWrapper = ({ children, location }) => {
  return (
    <div>
      <Helmet
        title="Kudoo Docs"
        meta={[
          { name: 'description', content: 'Kudoo Docs' },
          { name: 'keywords', content: 'Kudoo, Docs' }
        ]}
      />
      <div>
        <Header location={location} />
        {children}
      </div>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.node
}

export default TemplateWrapper
