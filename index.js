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
        },
    },

    parser: 'babel-eslint',

    plugins: ['react'],

    env: {
        node: true,
        es6: true,
        mocha: true,
    },
};
