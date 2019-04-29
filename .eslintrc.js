module.exports = {
  extends: ['wolox-react'],
  rules: {
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-object-spread' : 'on',
    'no-async-promise-executor': 'on',
    'no-misleading-character-class': 'on',
    'require-atomic-updates' : 'on',
    'max-classes-per-file' : 'on'
  }
};