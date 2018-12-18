'use strict';

module.exports = {
    rules: {
        // Allows you to enforce a consistent naming pattern for props which expect a boolean value.
        'react/boolean-prop-naming': ['error', {
            propTypeNames: ['bool', 'mutuallyExclusiveTrueProps']
        }],

        // Enforce all defaultProps have a corresponding non-required PropType (react/default-props-match-prop-types)
        'react/default-props-match-prop-types': [2, {
            allowRequiredDefaults: false
        }],

        // Enforce consistent usage of destructuring assignment of props, state, and context (react/destructuring-assignment)
        'react/destructuring-assignment': [2, 'always'],

        // Prevent missing props validation in a React component definition (react/prop-types)
        'react/prop-types': [2],

        // Prevent definitions of unused prop types (react/no-unused-prop-types)
        'react/no-unused-prop-types': [2, {
            skipShapeProps: false
        }],

        'react/sort-prop-types': [2, {
            'ignoreCase': true,
            'requiredFirst': true,
            'sortShapeProp': true,
        }],

        // Enforce a defaultProps definition for every prop that is not a required prop (react/require-default-props)
        'react/require-default-props': [2, {
            forbidDefaultForRequired: false
        }],

        // Enforce props alphabetical sorting (react/jsx-sort-props)
        'react/jsx-sort-props': [2, {
            callbacksLast: true,
            shorthandFirst: true,
            ignoreCase: true,
            reservedFirst: ['key'],
        }],

        // Enforce defaultProps declarations alphabetical sorting (react/jsx-sort-default-props)
        'react/jsx-sort-default-props': [2, {
            ignoreCase: true
        }],

        // Prevent duplicate properties in JSX (react/jsx-no-duplicate-props)
        'react/jsx-no-duplicate-props': [2, {
            ignoreCase: false
        }],

        // This option validates a specific indentation style for props.
        'react/jsx-indent-props': [2, 'tab'],

        // Limit maximum of props on a single line in JSX(react /jsx-max-props-per-line)
        'react/jsx-max-props-per-line': [2, {
            maximum: 1,
        }],

        // Prevent problem with children and props.dangerouslySetInnerHTML (react/no-danger-with-children)
        'react/no-danger-with-children': [2],

        // Prevent passing of children as props (react/no-children-prop)
        'react/no-children-prop': [2],

        // Configure the position of the first property (react/jsx-first-prop-new-line)
        'react/jsx-first-prop-new-line': [2, 'never'],

        // Disallow multiple spaces between inline JSX props (react/jsx-props-no-multi-spaces)
        'react/jsx-props-no-multi-spaces': [2],

        // Enforce style prop value being an object (react/style-prop-object)
        'react/style-prop-object': [2],
    },
};
