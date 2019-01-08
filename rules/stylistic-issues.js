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
        // @DONE
        'react/void-dom-elements-no-children': ['error'],

        // Prevent using string references
        // @DONE
        'react/no-string-refs': ['error'],

        // Facebook will eventually deprecate findDOMNode as it blocks certain improvements in React in the future.
        // @DONE
        'react/no-find-dom-node': ['error'],

        // Prevent usage of deprecated methods
        // @DONE
        'react/no-deprecated': [ 'error'],

        // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
        // @DONE
        'react/jsx-child-element-spacing': ['error'],

        // Enforce event handler naming conventions in JSX
        // @DONE
        'react/jsx-handler-names': ['error', {
            eventHandlerPrefix: 'handle',
            eventHandlerPropPrefix: 'on'
        }],

        // Prevent usage of unsafe target='_blank'
        // @DONE
        'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],

        // Disallow undeclared variables in JSX
        // @DONE
        'react/jsx-no-undef': ['error', { allowGlobals: false }],

        // One JSX Element Per Line
        // @DONE
        'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],

        // Validate whitespace in and around the JSX opening and closing brackets
        // @DONE
        'react/jsx-tag-spacing': ['error', {
            closingSlash: 'never',
            beforeSelfClosing: 'always',
            afterOpening: 'never',
            beforeClosing: 'never',
        }],

        // Prevent missing parentheses around multiline JSX
        // @DONE
        'react/jsx-wrap-multilines': ['error', {
            declaration: 'parens-new-line',
            assignment: 'parens-new-line',
            return: 'parens-new-line',
            arrow: 'parens-new-line',
            condition: 'parens-new-line', 
            logical: 'parens-new-line',
            prop: 'parens-new-line',
        }],
    },
};
