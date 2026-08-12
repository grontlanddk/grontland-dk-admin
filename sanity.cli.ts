import {defineCliConfig} from 'sanity/cli'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

if (!projectId) {
  throw new Error('Не задан SANITY_STUDIO_PROJECT_ID (укажите в .env)')
}

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  autoUpdates: true,
})
