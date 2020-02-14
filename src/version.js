#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const _ = require('lodash')
const path = require('path')
const fs = require('fs')
const rimraf = require('rimraf')
const ncp = require('ncp').ncp

program
  .usage('[options] <version>')
  .option('-c, --category <path>', 'Category')
  .option('-l, --list', 'List Versions')
  .option('-a, --add <version>', 'Add Version')
  .option('-r, --remove <version>', 'Remove Version')
  .parse(process.argv)

if (!program.category) {
  console.log(chalk.red.bold('Please specify category with -c option'))
}

const category = program.category.toLowerCase()
const categoryPath = path.resolve(__dirname, `./pages/${ category }`)
const versions = require(`./pages/${ category }/versions.json`)

if (program.category && !fs.existsSync(categoryPath)) {
  console.log(chalk.red.bold(`Category ${ category } doesn't exist`))
  return
}
if (program.list) {
  versions.map(v => {
    console.log(chalk.green.bold(`Version ${ v.value }`))
  })
}

if (program.add) {
  const versionToAdd = program.add
  const foundVersion = _.find(versions, { value: versionToAdd })
  if (foundVersion) {
    console.log(chalk.red.bold(`Version ${ versionToAdd } already exists`))
    return
  }

  const lastVersion = _.last(versions).value

  const newVersion = {
    label: versionToAdd,
    value: versionToAdd
  }

  let newVersionList = [...versions, newVersion]
  const filePath = path.resolve(categoryPath, `./versions.json`)
  const dataToWrite = JSON.stringify(newVersionList, null, 2)

  ncp(
    path.resolve(categoryPath, `./${ lastVersion }`),
    path.resolve(categoryPath, `./${ versionToAdd }`),
    function (err) {
      if (err) {
        return console.error(err)
      }
      fs.writeFile(filePath, dataToWrite, function (err) {
        if (err) {
          return console.log(err)
        }

        console.log(
          chalk.green.bold(`Version ${ versionToAdd } added to ${ category } docs`)
        )
      })
    }
  )
} else if (program.remove) {
  const versionToRemove = program.remove
  const foundVersion = _.find(versions, { value: versionToRemove })
  if (!foundVersion) {
    console.log(chalk.red.bold(`Version ${ versionToRemove } doesn't exists`))
    return
  }

  _.remove(versions, { value: versionToRemove })

  rimraf(path.resolve(categoryPath, `./${ versionToRemove }`), {}, function (err) {
    if (err) {
      return console.error(err)
    }

    const filePath = path.resolve(categoryPath, `./versions.json`)
    const dataToWrite = JSON.stringify(versions, null, 2)

    fs.writeFile(filePath, dataToWrite, function (err) {
      if (err) {
        return console.log(err)
      }

      console.log(
        chalk.green.bold(
          `Removing version ${ versionToRemove } to ${ category } docs`
        )
      )
    })
  })
}
