'use strict';

module.exports = {
    rules: {
        // Enforce all defaultProps have a corresponding non-required PropType
        // @DONE
        'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: false }],

        // Forbid foreign propTypes
        // @DONE
        'react/forbid-foreign-prop-types': ['error'],

        // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children.
        // @DONE
        "react/jsx-curly-brace-presence": ['error', 'never'],

        // Prevent missing props validation in a React component definition
        // @DONE
        'react/prop-types': ['error'],

        // Prevent definitions of unused prop types
        // @DONE
        'react/no-unused-prop-types': ['error', { skipShapeProps: true }],

        // Enforce propTypes declarations alphabetical sorting
        // @DONE
        'react/sort-prop-types': ['error', {
            ignoreCase: true,
            requiredFirst: true,
            sortShapeProp: true,
            callbacksLast: true,
        }],

        // Enforce a defaultProps definition for every prop that is not a required prop
        // @DONE
        'react/require-default-props': ['error', { forbidDefaultForRequired: true }],

        // Enforce props alphabetical sorting
        // @DONE
        'react/jsx-sort-props': ['error', {
            callbacksLast: true,
            shorthandFirst: true,
            ignoreCase: true,
            reservedFirst: [
                'key', 'dangerouslySetInnerHTML', 'ref', 'children',
            ],
        }],

        // Enforce defaultProps declarations alphabetical sorting
        // @DONE
        'react/jsx-sort-default-props': ['error', { ignoreCase: true }],

        // Prevent duplicate properties in JSX
        // @DONE
        'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

        // This option validates a specific indentation style for props.
        // @DONE
        'react/jsx-indent-props': ['error', 4],

        // Limit maximum of props on a single line in JSX
        // @DONE
        'react/jsx-max-props-per-line': ['error', { maximum: 1, 'when': 'multiline' }],

        // Prevent problem with children and props.dangerouslySetInnerHTML
        // @Done
        'react/no-danger-with-children': ['error'],

        // Prevent passing of children as props
        // @Done
        'react/no-children-prop': ['error'],

        // Configure the position of the first property
        // @DONE
        'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

        // Disallow multiple spaces between inline JSX props
        // @DONE
        'react/jsx-props-no-multi-spaces': ['error'],

        // Enforce style prop value being an object
        // @DONE
        'react/style-prop-object': ['error'],
    },
};
