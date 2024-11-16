import 'dotenv/config'
import chalk from 'chalk'

export enum Severity {
  'ERROR' = 3,
  'WARN' = 2,
  'INFO' = 1,
  'DEBUG' = 0,
  'TRACE' = -1,
}

type SeverityType = keyof typeof Severity

const DEFAULT_LOG_LEVEL = Severity.INFO

class Log {
  public static error(message: string): void {
    if (this.shouldLog(Severity.ERROR)) {
      console.log(chalk.bgRed.bold('[ERROR]') + ' ' + chalk.red(message))
    }
  }

  public static warn(message: string): void {
    if (this.shouldLog(Severity.WARN)) {
      console.log(chalk.bgYellow('[WARN]') + ' ' + chalk.yellow(message))
    }
  }

  public static info(message: string): void {
    if (this.shouldLog(Severity.INFO)) {
      console.log(chalk.bgBlue('(i)') + ' ' + message)
    }
  }

  public static debug(message: string): void {
    if (this.shouldLog(Severity.DEBUG)) {
      console.log(chalk.dim(`> ${message}`))
    }
  }

  public static trace(message: string): void {
    if (this.shouldLog(Severity.TRACE)) {
      console.log(chalk.dim(`> ${message}`))
    }
  }

  private static shouldLog(severity: Severity): boolean {
    const envLevel =
      Severity[process.env.LOG_LEVEL as SeverityType] || DEFAULT_LOG_LEVEL
    return severity >= envLevel
  }
}

export { Log as log }
