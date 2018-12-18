'use strict';

module.exports = {
    rules: {
        // Prevent missing displayName in a React component definition (react/display-name)
        'react/display-name': [2, { ignoreTranspilerName: true }],

        // Enforce the closing bracket location for JSX multiline elements.
        'react/jsx-closing-bracket-location': [2, 'props-aligned'],

        // Enforce or disallow spaces around equal signs in JSX attributes. (react/jsx-equals-spacing)
        'react/jsx-equals-spacing': [2, 'never'],

        // Enforce stateless React Components to be written as a pure function (react/prefer-stateless-function)
        'react/prefer-stateless-function': [2],

        // Enforce ES5 or ES6 class for React Components (react/prefer-es6-class)
        'react/prefer-es6-class': [2, 'always'],

        // Updating the state during the componentWillUpdate step can lead to indeterminate component state and is not allowed.
        'react/no-will-update-set-state': [2, 'disallow-in-func'],

        // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions. (react/jsx-curly-spacing)
        'react/jsx-curly-spacing': [2, {
            'when': 'never',
            'allowMultiline': false,
            'children': true,
        }],

        // Prevent usage of unknown DOM property (react/no-unknown-property)
        'react/no-unknown-property': [2],

        // Enforce PascalCase for user-defined JSX components (react/jsx-pascal-case)
        'react/jsx-pascal-case': [2, {
            allowAllCaps: false
        }],

        // Prevent variables used in JSX to be incorrectly marked as unused (react/jsx-uses-vars)
        'react/jsx-uses-react': ['error'],

        // No .bind() or Arrow Functions in JSX Props (react/jsx-no-bind)
        'react/jsx-no-bind': [2, {
            ignoreDOMComponents: false,
            ignoreRefs: false,
            allowArrowFunctions: false,
            allowFunctions: false,
            allowBind: false
        }],

        // Prevent multiple component definition per file (react/no-multi-comp)
        'react/no-multi-comp': [2, {
            ignoreStateless: false
        }],

        // Prevent usage of unsafe lifecycle methods (react/no-unsafe)
        'react/no-unsafe': [2],

        // Restrict file extensions that may contain JSX (react/jsx-filename-extension)
        'react/jsx-filename-extension': [2, {
            'extensions': ['.js' , '.jsx']
        }],

        // Enforce boolean attributes notation in JSX (react/jsx-boolean-value)
        'react/jsx-boolean-value': [2, 'never'],

        // When creating React components it is more convenient to always follow the same organisation for method order to help you easily find lifecycle methods, event handlers, etc.
        'react/sort-comp': [2, {
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

        // Enforce ES5 or ES6 class for returning value in render function (react/require-render-return)
        'react/require-render-return': [2],
    },
};
