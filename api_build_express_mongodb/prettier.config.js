module.exports = {
  requirePragma: true,
  overrides: [
    {
      files: '**/*.js',
      options: {
        printWidth: 100,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        requirePragma: false,
      },
    },
  ],
};
