import React from "react"
import { navigate } from "gatsby"
import last from "lodash/last"
import {
  SubscriptionCard,
  withStyles,
  Jumbotron,
  Footer,
} from "@kudoo/components"
import administratorVersions from "../pages/administrator/versions.json"
import developerVersions from "../pages/developer/versions.json"
import governanceVersions from "../pages/governance/versions.json"
import Layout from "../components/layout"

const latestAdministratorVersion = last(administratorVersions)
const latestDeveloperVersion = last(developerVersions)
const latestGovernanceVersion = last(governanceVersions)

const IndexPage = props => {
  const classes = props.classes || {}
  return (
    <Layout location={props.location}>
      <Jumbotron title="WELCOME TO THE KUDOO DOCS" />
      <div className={classes.title}>Please choose docs below</div>
      <div className={classes.docsOptions}>
        <div
          className={classes.docsOption}
          onClick={() => {
            navigate(`/administrator/${latestAdministratorVersion.value}/`)
          }}
        >
          <SubscriptionCard
            price="Administrator"
            highlighted
            shortDescription={"Administrator functionality docs"}
            onFindOutClick={() => {}}
          />
        </div>
        <div
          className={classes.docsOption}
          onClick={() => {
            navigate(`/developer/${latestDeveloperVersion.value}/`)
          }}
        >
          <SubscriptionCard
            price="Developer"
            highlighted
            shortDescription={"Docs for Developer"}
            onFindOutClick={() => {}}
          />
        </div>
        <div
          className={classes.docsOption}
          onClick={() => {
            navigate(`/governance/${latestGovernanceVersion.value}/`)
          }}
        >
          <SubscriptionCard
            price="Governance"
            highlighted
            shortDescription={"Governance documentation"}
            onFindOutClick={() => {}}
          />
        </div>
      </div>
      {/*
      <Jumbotron
        title="Keep up with our Community"
        description="Want to keep up to date with the latest news or get involved with our open source community?"
        href="https://community.kudoo.io/"
        hrefText="LEARN MORE"
      />
      */}
      <Footer />
    </Layout>
  )
}

const styles = theme => ({
  title: {
    fontSize: 25,
    fontFamily: theme.typography.font.family2,
    margin: [[25, 0, 0, 0]],
    textAlign: "center",
    color: theme.palette.blueGrey["50"],
  },
  docsOptions: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: [[40, 0]],
  },
  docsOption: {
    margin: [[10, 10]],
    minWidth: 300,
    display: "flex",
    minHeight: 250,
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      minWidth: "80%",
      maxWidth: "80%",
      wordBreak: "break-word",
    },
  },
})

export default withStyles(styles)(IndexPage)