import dotenv from 'dotenv'
import { log } from '../src/util/log'

dotenv.config()

const { DISCORD_TOKEN, DISCORD_CLIENT_ID } = process.env

if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID) {
  log.error('Missing required token DISCORD_TOKEN or DISCORD_CLIENT_ID')
  throw new Error('Missing required token DISCORD_TOKEN or DISCORD_CLIENT_ID')
}
