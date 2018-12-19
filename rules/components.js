'use strict';

module.exports = {
    rules: {
        // Enforce consistent usage of destructuring assignment of props, state, and context
        'react/destructuring-assignment': ['error', 'always'],

        // Prevent missing displayName in a React component definition
        'react/display-name': ['error', { ignoreTranspilerName: true }],

        // Enforce the closing bracket location for JSX multiline elements.
        'react/jsx-closing-bracket-location': [ 'error', 'props-aligned'],

        // Validate closing tag location in JSX
        'react/jsx-closing-tag-location': [ 'error'],

        // Enforce or disallow spaces around equal signs in JSX attributes.
        'react/jsx-equals-spacing': [ 'error', 'never'],

        // This option validates a specific indentation style for JSX.
        'react/jsx-indent': [ 'error', 'tab'],

        // Enforce stateless React Components to be written as a pure function.
        'react/prefer-stateless-function': [ 'error'],

        // Enforce ES5 or ES6 class for React Components.
        'react/prefer-es6-class': [ 'error', 'always'],

        // Updating the state during the componentWillUpdate step can lead to indeterminate component state and is not allowed.
        'react/no-will-update-set-state': [ 'error', 'disallow-in-func'],

        // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
        'react/jsx-curly-spacing': [ 'error', {
            'when': 'never',
            'allowMultiline': false,
            'children': true,
        }],

        // Prevent usage of unknown DOM property.
        'react/no-unknown-property': [ 'error'],

        // Enforce PascalCase for user-defined JSX components.
        'react/jsx-pascal-case': ['error', { allowAllCaps: false }],

        // Prevent variables used in JSX to be incorrectly marked as unused.
        'react/jsx-uses-react': ['error'],

        // Prevent variables used in JSX to be incorrectly marked as unused
        'react/jsx-uses-vars': ['error'],

        // No .bind() or Arrow Functions in JSX Props.
        'react/jsx-no-bind': ['error', {
            ignoreDOMComponents: false,
            ignoreRefs: false,
            allowArrowFunctions: false,
            allowFunctions: false,
            allowBind: false
        }],

        // Prevent comments from being inserted as text nodes.
        'react/jsx-no-comment-textnodes': ['error'],

        // Prevent multiple component definition per file
        'react/no-multi-comp': [ 'error', {
            ignoreStateless: false
        }],

        // Prevent usage of unsafe lifecycle methods
        'react/no-unsafe': [ 'error'],

        // Restrict file extensions that may contain JSX
        'react/jsx-filename-extension': [ 'error', { extensions: ['.js' , '.jsx'] }],

        // Enforce boolean attributes notation in JSX
        'react/jsx-boolean-value': [ 'error', 'never'],

        // When creating React components it is more convenient to always follow the same organisation for method order to help you easily find lifecycle methods, event handlers, etc.
        'react/sort-comp': [ 'error', {
            order: [
                'static-methods',
                'lifecycle',
                'everything-else',
                'render'
            ],
            groups: {
                lifecycle: [
                    'displayName',
                    'propTypes',
                    'contextTypes',
                    'childContextTypes',
                    'mixins',
                    'statics',
                    'defaultProps',
                    'constructor',
                    'getDefaultProps',
                    'state',
                    'getInitialState',
                    'getChildContext',
                    'getDerivedStateFromProps',
                    'componentWillMount',
                    'UNSAFE_componentWillMount',
                    'componentDidMount',
                    'componentWillReceiveProps',
                    'UNSAFE_componentWillReceiveProps',
                    'shouldComponentUpdate',
                    'componentWillUpdate',
                    'UNSAFE_componentWillUpdate',
                    'getSnapshotBeforeUpdate',
                    'componentDidUpdate',
                    'componentDidCatch',
                    'componentWillUnmount'
                ]
            }
        }],

        // Enforce ES5 or ES6 class for returning value in render function
        'react/require-render-return': [ 'error'],
    },
};
