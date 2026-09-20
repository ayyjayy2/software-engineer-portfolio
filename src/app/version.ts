import packageJson from '../../package.json';

/**
 * The portfolio's own release version, sourced from package.json so there is
 * a single place to bump it. Tag releases in git as `v<version>` to match.
 */
export const APP_VERSION: string = packageJson.version;
