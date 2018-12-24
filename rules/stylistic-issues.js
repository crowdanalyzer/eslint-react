'use strict';

module.exports = {
    rules: {
        // keywords spacing
        'keyword-spacing': ['error', {
            overrides: {
                from: { after: true },
                default: { after: true },
                if: { after: false }
            }
        }],

        // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
        'react/void-dom-elements-no-children': ['error'],

        // Prevent using string references
        'react/no-string-refs': ['error'],

        // Facebook will eventually deprecate findDOMNode as it blocks certain improvements in React in the future.
        'react/no-find-dom-node': ['error'],

        // Prevent usage of deprecated methods
        'react/no-deprecated': [ 'error'],

        // Prevent usage of dangerous JSX properties
        'react/no-danger': ['error'],

        // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
        'react/jsx-child-element-spacing': ['error'],

        // Enforce event handler naming conventions in JSX
        'react/jsx-handler-names': ['error', {
            eventHandlerPrefix: 'handle',
            eventHandlerPropPrefix: 'on'
        }],

        // Prevent usage of string literals in JSX
        'react/jsx-no-literals': ['error', { noStrings: true }],

        // Prevent usage of unsafe target='_blank'
        'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],

        // Disallow undeclared variables in JSX
        'react/jsx-no-undef': ['error', { allowGlobals: true }],

        // One JSX Element Per Line
        'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],

        // Validate whitespace in and around the JSX opening and closing brackets
        'react/jsx-tag-spacing': ['error', {
            closingSlash: 'never',
            beforeSelfClosing: 'always',
            afterOpening: 'never',
            beforeClosing: 'allow',
        }],

        // Prevent missing parentheses around multiline JSX
        'react/jsx-wrap-multilines': ['error', {
            declaration: 'parens',
            assignment: 'parens',
            return: 'parens',
        }]
    },
};
