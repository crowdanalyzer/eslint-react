'use strict';

module.exports = {
    rules: {
        // Allows you to enforce a consistent naming pattern for props which expect a boolean value.
        'react/boolean-prop-naming': ['error', {
            propTypeNames: ['bool', 'mutuallyExclusiveTrueProps']
        }],

        // Enforce all defaultProps have a corresponding non-required PropType
        'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: false }],

        // Forbid foreign propTypes
        'react/forbid-foreign-prop-types': [ 'error'],

        // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children.
        "react/jsx-curly-brace-presence": [ 'error', { props: 'never' }],

        // Prevent missing props validation in a React component definition
        'react/prop-types': [ 'error'],

        // Prevent definitions of unused prop types
        'react/no-unused-prop-types': [ 'error', { skipShapeProps: true }],

        // Enforce propTypes declarations alphabetical sorting
        'react/sort-prop-types': [ 'error', {
            ignoreCase: true,
            requiredFirst: true,
            sortShapeProp: true,
        }],

        // Enforce a defaultProps definition for every prop that is not a required prop
        'react/require-default-props': [ 'error', { forbidDefaultForRequired: false }],

        // Enforce props alphabetical sorting
        'react/jsx-sort-props': [ 'error', {
            callbacksLast: true,
            shorthandFirst: true,
            ignoreCase: true,
            reservedFirst: ['key'],
        }],

        // Enforce defaultProps declarations alphabetical sorting
        'react/jsx-sort-default-props': ['error', { ignoreCase: true }],

        // Prevent duplicate properties in JSX
        'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],

        // This option validates a specific indentation style for props.
        'react/jsx-indent-props': [ 'error', 'tab'],

        // Limit maximum of props on a single line in JSX
        'react/jsx-max-props-per-line': [ 'error', { maximum: 1 }],

        // Prevent problem with children and props.dangerouslySetInnerHTML
        'react/no-danger-with-children': ['error'],

        // Prevent passing of children as props
        'react/no-children-prop': ['error'],

        // Configure the position of the first property
        'react/jsx-first-prop-new-line': [ 'error', 'never'],

        // Disallow multiple spaces between inline JSX props
        'react/jsx-props-no-multi-spaces': ['error'],

        // Enforce style prop value being an object
        'react/style-prop-object': [ 'error'],
    },
};
