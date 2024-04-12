import * as core from '@actions/core'
import {exec} from '@actions/exec'
import * as path from 'path'

async function run() {
  const node = process.argv[0]
  const script = path.resolve(__dirname, 'configure.js')
  await exec('sudo', [node, script])
}

run().catch((error) => {
  if (error instanceof Error) {
    core.setFailed(error.message)
  } else {
    core.setFailed(`${error}`)
  }
})
