/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  "branches": ['+([0-9])?(.{+([0-9]),x}).x', 'master', 'main', 'next-major', {
    name: 'beta',
    prerelease: true
  }, {
    name: 'alpha',
    prerelease: true
  }]
};
