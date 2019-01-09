'use strict';

module.exports = {
    rules: {
        /**
         * Enforce boolean attributes notation in JSX
         * When using a boolean attribute in JSX, you can set the attribute value to
         * true or omit the value.This rule will enforce you to add the boolean value
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
         */
        'react/jsx-boolean-value': ['error', 'always'],

        /**
         * Disallow spaces inside of curly braces in JSX attributes and expressions.
         * Since React removes extraneous new lines between elements when possible, 
         * it is possible to end up with inline elements that are not rendered with spaces 
         * between them and adjacent text. This is often indicative of an error, 
         * so this rule attempts to detect
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
         */
        'react/jsx-child-element-spacing': ['error'],

        /**
         * Enforce the closing bracket location for JSX multiline elements to be after props
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
         */
        'react/jsx-closing-bracket-location': ['error', 'after-props'],

        /**
         * Validate closing tag location in JSX
         * This rule checks all JSX multiline elements with children (non-self-closing) 
         * and verifies the location of the closing tag. The expectation is that the 
         * closing tag is aligned with the opening tag on its own line.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
         */
        'react/jsx-closing-tag-location': ['error'],

        /**
         * Disallow spaces inside of curly braces in JSX attributes and expressions.
         * never use any spaces inside the curly braces of components, children
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
         */
        'react/jsx-curly-spacing': ['error', {
            when: 'never',
            allowMultiline: false,
            attributes: true,
            children: true,
        }],

        /**
         * Enforce or disallow spaces around equal signs in JSX attributes.
         * never use spaces between '=' operator & value
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
         */
        'react/jsx-equals-spacing': ['error', 'never'],

        /**
         * Restrict file extensions that may contain JSX, only use .jsx extensions
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
         */
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],

        /**
         * Configure the position of the first property
         * The first property should always be placed on a new line
         * if the JSX tag takes up multiple lines and there are multiple properties.This is the 
         * default value.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
         */
        'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

        /**
         * Enforce event handler naming conventions in JSX
         * Ensures that any component or prop methods used to handle events are correctly prefixed.
         * prefix handler with 'handle' & prop with 'on'
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
         */
        'react/jsx-handler-names': ['error', {
            eventHandlerPrefix: 'handle',
            eventHandlerPropPrefix: 'on',
        }],

        /**
         * This option validates a specific indentation style for JSX.
         * This rule is aimed to enforce consistent indentation style., 
         * use 4 spaces for indentation
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
         */
        'react/jsx-indent': ['error', 4],

        /**
         * This option validates a specific indentation style for props.
         * This rule is aimed to enforce consistent indentation style.
         * use 4 spaces for indentation
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
         */
        'react/jsx-indent-props': ['error', 4],

        /**
         * Detect missing key prop
         * Warn if an element that likely requires a key prop--namely, 
         * one present in an array literal or an arrow function expression.
         * key must not be array index
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
         */
        'react/jsx-key': ['error'],

        /**
         * Limit maximum of props on a single line in JSX
         * This rule checks all JSX elements and verifies that the number of props per line 
         * do not exceed the maximum allowed.
         * maximum is 1 property in multi-line expressions
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
         */
        'react/jsx-max-props-per-line': ['error', {
            maximum: 1,
            when: 'multiline',
        }],

        /**
         * No .bind() or Arrow Functions in JSX Props.
         * A bind call or arrow function in a JSX prop will create a brand new function on every 
         * single render. This is bad for performance, as it may cause unnecessary re-renders if 
         * a brand new function is passed as a prop to a component that uses reference equality 
         * check on the prop to determine if it should update.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
         */
        'react/jsx-no-bind': ['error', {
            ignoreDOMComponents: false,
            ignoreRefs: false,
            allowArrowFunctions: false,
            allowFunctions: false,
            allowBind: false,
        }],

        /**
         * Prevent comments from being inserted as text nodes.
         * This rule prevents comment strings(e.g.beginning with // or /*) 
         * from being accidentally injected as a text node in JSX statements.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
         */
        'react/jsx-no-comment-textnodes': ['error'],

        /**
         * Prevent duplicate properties in JSX with ignoring case
         * Creating JSX elements with duplicate props can cause unexpected behavior 
         * in your application.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
         */
        'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

        /**
         * Prevent usage of unsafe target = '_blank'
         * This rule aims to prevent user generated links from creating security vulnerabilities by 
         * requiring rel='noreferrer noopener' for external links, and optionally any dynamically 
         * generated links.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
         */
        'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],

        /**
         * Disallow undeclared variables in JSX
         * This rule helps locate potential ReferenceErrors resulting from misspellings or 
         * missing components without allowing globals
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
         */
        'react/jsx-no-undef': ['error', { allowGlobals: false }],

        /**
         * One JSX Element Per Line, with a single child
         * This option limits every line in JSX to one expression each.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
         */
        'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],

        /**
         * Enforce curly braces or disallow unnecessary curly braces in JSX props and / or children.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
         */
        'react/jsx-curly-brace-presence': ['error', 'never'],

        /**
         * Enforce shorthand or standard form for React fragments 
         * In JSX, a React fragment is created either with <React.Fragment>...</React.Fragment>, 
         * or, using the shorthand syntax, <>...</>. This rule allows you to enforce
         * <React.Fragment>...</React.Fragment>
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
         */
        'react/jsx-fragments': ['error', 'element'],

        /**
         * Enforce PascalCase for user-defined JSX components.
         * Enforces coding style that user-defined JSX components are 
         * defined and referenced in PascalCase.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
         */
        'react/jsx-pascal-case': ['error', { allowAllCaps: false }],

        /**
         * Disallow multiple spaces between inline JSX props
         * Enforces that there is exactly one space between all attributes 
         * and after tag name and the first attribute in the same line.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
         */
        'react/jsx-props-no-multi-spaces': ['error'],

        /**
         * Enforce defaultProps declarations alphabetical sorting
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md
         */
        'react/jsx-sort-default-props': ['error', { ignoreCase: true }],

        /**
         * Enforce props alphabetical sorting, callbacks will be the last, shorthands first
         * other props will be sorted alphabetically
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
         */
        'react/jsx-sort-props': ['error', {
            callbacksLast: true,
            shorthandFirst: true,
            ignoreCase: true,
            reservedFirst: [
                'key', 'dangerouslySetInnerHTML', 'ref', 'children',
            ],
        }],

        /**
         * Validate whitespace in and around the JSX opening and closing brackets
         * Enforce or forbid spaces after the opening bracket, before the closing bracket, 
         * before the closing bracket of self - closing elements, and between the angle 
         * bracket and slash of JSX closing or self - closing elements.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
         */
        'react/jsx-tag-spacing': ['error', {
            closingSlash: 'never',
            beforeSelfClosing: 'always',
            afterOpening: 'never',
            beforeClosing: 'never',
        }],

        /**
         * Prevent variables used in JSX to be incorrectly marked as unused.
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
         */
        'react/jsx-uses-react': ['error'],

        /**
         * Prevent variables used in JSX to be incorrectly marked as unused
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
         */
        'react/jsx-uses-vars': ['error'],

        /**
         * Prevent missing parentheses around multiline JSX
         * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
         */
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
