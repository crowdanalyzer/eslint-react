'use strict';

module.exports = {
    extends: [
        './rules/components',
        './rules/props',
        './rules/stylistic-issues',
    ].map(require.resolve),

    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            modules: true
        },
    },
    parser: 'babel-eslint',
    plugins: [
        'eslint-plugin-react',
    ],
    settings: {
        react: {
            version: "16.4.0",
        },
    },
    env: {
        node: true,
        es6: true,
        mocha: true,
    },
};

