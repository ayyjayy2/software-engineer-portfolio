import { APP_VERSION } from './version';
import packageJson from '../../package.json';

describe('APP_VERSION', () => {
  it('matches the version declared in package.json', () => {
    expect(APP_VERSION).toBe(packageJson.version);
  });

  it('is a semantic version', () => {
    expect(APP_VERSION).toMatch(/^\d+\.\d+\.\d+$/);
  });
});
