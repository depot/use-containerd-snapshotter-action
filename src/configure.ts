import {exec} from '@actions/exec'
import * as fsp from 'fs/promises'

async function run() {
  const configExists = await fsp
    .access('/etc/docker/daemon.json')
    .then(() => true)
    .catch(() => false)

  const existingConfig = configExists ? await fsp.readFile('/etc/docker/daemon.json', 'utf8') : '{}'
  const parsedConfig = JSON.parse(existingConfig)

  parsedConfig.features = parsedConfig.features ?? {}
  parsedConfig.features['containerd-snapshotter'] = true

  await fsp.writeFile('/etc/docker/daemon.json', JSON.stringify(parsedConfig, null, 2))

  await exec('systemctl', ['restart', 'docker'])
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
