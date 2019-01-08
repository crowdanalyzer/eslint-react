'use strict';

module.exports = {
    rules: {
        // Prevent usage of button elements without an explicit type attribute
        // @DONE
        'react/button-has-type': ['error', { button: true, submit: true, reset: true }],
        
        // Enforce consistent usage of destructuring assignment of props, state, and context
        // @DONE
        'react/destructuring-assignment': ['error', 'always'],

        // Enforce the closing bracket location for JSX multiline elements.
        // @DONE
        'react/jsx-closing-bracket-location': ['error', 'after-props'],

        // Validate closing tag location in JSX
        // @DONE
        'react/jsx-closing-tag-location': ['error'],

        // Enforce or disallow spaces around equal signs in JSX attributes.
        // @DONE
        'react/jsx-equals-spacing': ['error', 'never'],

        // This option validates a specific indentation style for JSX.
        // @DONE
        'react/jsx-indent': ['error', 4, { checkAttributes: true }],

        // Enforce stateless React Components to be written as a pure function.
        // @DONE
        'react/prefer-stateless-function': ['error', { ignorePureComponents: false }],

        // Enforce ES5 or ES6 class for React Components.
        // @DONE
        'react/prefer-es6-class': ['error', 'always'],

        // Updating the state during the componentWillUpdate step can lead to indeterminate component state and is not allowed.
        // @DONE
        'react/no-will-update-set-state': ['error', 'disallow-in-func'],

        // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
        // @DONE
        'react/jsx-curly-spacing': ['error', {
            'when': 'never',
            'allowMultiline': false,
            'attributes': true,
            'children': true,
        }],

        // Prevent usage of unknown DOM property.
        // @DONE
        'react/no-unknown-property': ['error'],

        // Enforce PascalCase for user-defined JSX components.
        // @DONE
        'react/jsx-pascal-case': ['error', { allowAllCaps: false }],

        // Prevent variables used in JSX to be incorrectly marked as unused.
        // @DONE
        'react/jsx-uses-react': ['error'],

        // Prevent variables used in JSX to be incorrectly marked as unused
        // @DONE
        'react/jsx-uses-vars': ['error'],

        // No .bind() or Arrow Functions in JSX Props.
        // @DONE
        'react/jsx-no-bind': ['error', {
            ignoreDOMComponents: false,
            ignoreRefs: false,
            allowArrowFunctions: false,
            allowFunctions: false,
            allowBind: false
        }],

        // Prevent comments from being inserted as text nodes.
        // @DONE
        'react/jsx-no-comment-textnodes': ['error'],

        // Prevent multiple component definition per file
        // @DONE
        'react/no-multi-comp': ['error', {
            ignoreStateless: false
        }],

        // Prevent usage of unsafe lifecycle methods
        // @DONE
        'react/no-unsafe': ['error'],

        // Restrict file extensions that may contain JSX
        // @DONE
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],

        // Enforce boolean attributes notation in JSX
        // @DONE
        'react/jsx-boolean-value': ['error', 'always'],

        // When creating React components it is more convenient to always follow the same organisation for method order to help you easily find lifecycle methods, event handlers, etc.
        // @DONE
        'react/sort-comp': ['error', {
            order: [
                'static-methods',
                'setters',
                'getters',
                'instance-variables',
                'instance-methods',
                'everything-else',
                'lifecycle',
                'render'
            ],
        }],

        // Enforce ES5 or ES6 class for returning value in render function
        // @DONE
        'react/require-render-return': ['error'],

        // Prevent definitions of unused state
        // @DONE 
        'react/no-unused-state': ['error'],

        // Prevent invalid characters from appearing in markup
        // @DONE
        'react/no-unescaped-entities': ['error', { forbid: ['>', '"', '\'', '}'] }],

        // Prevent this from being used in stateless functional components
        // @DONE
        'react/no-this-in-sfc': ['error'],

        // Prevent usage of the return value of React.render
        // @DONE
        'react/no-render-return-value': ['error'],

        // Prevent usage of isMounted
        // @DONE
        'react/no-is-mounted': ['error'],

        // Prevent direct mutation of this.state
        // @DONE
        'react/no-direct-mutation-state': ['error'],

        // Prevent using this.state within a this.setState
        // @DONE
        'react/no-access-state-in-setstate': ['error'],

        // Prevent usage of Array index in keys
        // @DONE
        'react/no-array-index-key': ['error'],

        // Enforce shorthand or standard form for React fragments 
        // @DONE
        'react/jsx-fragments': ['error', 'element'],

        // Detect missing key prop
        // @DONE
        'react/jsx-key': ['error'],

        // Prevent usage of setState in componentDidMount
        // @DONE 
        'react/no-did-mount-set-state': ['error', 'disallow-in-func'],

        // Prevent usage of setState in componentDidUpdate
        // @DONE 
        'react/no-did-update-set-state': ['error', 'disallow-in-func'],

        // Prevent usage of shouldComponentUpdate when extending React.PureComponent 
        // @DONE
        'react/no-redundant-should-component-update': ['error'],

        // Prevents common typos
        // @DONE 
        'react/no-typos': ['error'],

        // Prevent extra closing tags for components without children 
        // @DONE
        'react/self-closing-comp': ['error', {
            component: true,
            html: true,
        }],
    },
};
