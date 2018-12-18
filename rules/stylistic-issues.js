'use strict';

module.exports = {
    rules: {
        // keywords spacing
        'keyword-spacing': ['error', {
            overrides: {
                from: {
                    after: true
                },
                default: {
                    after: true
                },
                if: {
                    after: false
                }
            }
        }],

        //Prevent usage of button elements without an explicit type attribute(react / button - has - type)
        'react/button-has-type': [2, {
            'button': false,
            'submit': false,
            'reset': false
        }],

        // This rule allows you to enforce curly braces or disallow unnecessary curly braces in JSX props and/or children.
        // "react/jsx-curly-brace-presence": ['error', { props: "always", children: "always" }],

        // This option validates a specific indentation style for JSX.
        'react/jsx-indent': [2, 'tab'],

        //Forbid certain propTypes (react/forbid-prop-types)
        'react/forbid-prop-types': [2],

        // Prevent void DOM elements (e.g. <img />, <br />) from receiving children (react/void-dom-elements-no-children)
        'react/void-dom-elements-no-children': [2],

        //Prevent definitions of unused state (react/no-unused-state)
        'react/no-unused-state': [2],

        //Prevent invalid characters from appearing in markup(react / no - unescaped - entities)
        'react/no-unescaped-entities': ['error', {
            forbid: ['>', '"', '\'', '}']
        }],

        // Prevent this from being used in stateless functional components (react/no-this-in-sfc)
        'react/no-this-in-sfc': [2],

        // Prevent using string references (react/no-string-refs)
        'react/no-string-refs': [2],

        // Prevent usage of setState (react/no-set-state)
        'react/no-set-state': [2],

        // Prevent usage of the return value of React.render (react/no-render-return-value)
        'react/no-render-return-value': [2],

        // isMounted is an anti-pattern, is not available when using ES6 classes, and it is on its way to being officially deprecated.
        'react/no-is-mounted': [2],

        // Facebook will eventually deprecate findDOMNode as it blocks certain improvements in React in the future.
        'react/no-find-dom-node': [2],

        // Prevent direct mutation of this.state (react/no-direct-mutation-state)
        'react/no-direct-mutation-state': [2],

        // Prevent usage of deprecated methods (react/no-deprecated)
        'react/no-deprecated': [2],

        // Prevent usage of dangerous JSX properties (react/no-danger)
        'react/no-danger': [2],

        // Prevent usage of Array index in keys (react/no-array-index-key)
        'react/no-array-index-key': [2],

        // Prevent using this.state within a this.setState (react/no-access-state-in-setstate)
        'react/no-access-state-in-setstate': [2],

        // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions. (react/jsx-child-element-spacing)
        'react/jsx-child-element-spacing': [2],

        // Validate closing tag location in JSX (react/jsx-closing-tag-location)
        'react/jsx-closing-tag-location': [2],

        // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children. (react/jsx-curly-brace-presence)
        "react/jsx-curly-brace-presence": [2, 'always'],

        // Enforce event handler naming conventions in JSX (react/jsx-handler-names)
        'react/jsx-handler-names': [2, {
            eventHandlerPrefix: 'handle',
            eventHandlerPropPrefix: 'on'
        }],

        // Prevent comments from being inserted as text nodes (react/jsx-no-comment-textnodes)
        'react/jsx-no-comment-textnodes': [2],

        // Prevent usage of string literals in JSX (react/jsx-no-literals)
        'react/jsx-no-literals': [2, {
            "noStrings": false
        }],

        // Prevent usage of unsafe target='_blank' (react/jsx-no-target-blank)
        'react/jsx-no-target-blank': [2, {
            enforceDynamicLinks: 'always'
        }],

        // Disallow undeclared variables in JSX (react/jsx-no-undef)
        'react/jsx-no-undef': [2, {
            allowGlobals: false
        }],

        // One JSX Element Per Line (react/jsx-one-expression-per-line)
        'react/jsx-one-expression-per-line': [2, {
            allow: 'single-child'
        }],

        // Validate whitespace in and around the JSX opening and closing brackets (react/jsx-tag-spacing)
        'react/jsx-tag-spacing': [2, {
            closingSlash: 'never',
            beforeSelfClosing: 'always',
            afterOpening: 'never',
            beforeClosing: 'allow',
        }],

        // Prevent missing parentheses around multiline JSX (react/jsx-wrap-multilines)
        'react/jsx-wrap-multilines': [2, {
            declaration: 'parens',
            assignment: 'parens',
        }]
    },
};
