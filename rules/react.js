/* eslint quotes: ['off'] */
"use strict";

module.exports = {
  rules: {
    /**
     * This rules enforces an explicit type attribute for all the button elements
     * and checks that its value is valid per spec
     * (i.e., is one of "button", "submit", and "reset").
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
     */
    "react/button-has-type": ["error", { button: true, submit: true, reset: true }],

    /**
     * Enforce consistent usage of destructuring assignment of props, state, and context
     * Rule can be set to either of always or never;
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
     */
    "react/destructuring-assignment": ["error", "always"],

    /**
     * Prevent missing displayName in a React component definition
     * DisplayName allows you to name your component.This name is used by
     * React in debugging messages.
     * https: //github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
     */
    "react/display-name": ["error", { ignoreTranspilerName: false }],

    /**
     * By default this rule prevents passing of props that add lots of complexity
     * (className, style) to Components. This rule only applies to Components (e.g. <Foo />)
     * and not DOM nodes (e.g. <div />). The list of forbidden props can be customized
     * with the forbid option.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
     */
    "react/forbid-foreign-prop-types": ["error"],

    /**
     * This rule should prevent usage of this.state inside setState calls.
     * Such usage of this.state might result in errors when two state calls
     * are called in batch and thus referencing old state and not the current state.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
     */
    "react/no-access-state-in-setstate": ["error"],

    /**
     * Warn if an element uses an Array index in its key.
     * The key is used by React to identify which items have changed, are added, or are
     * removed and should be stable. It's a bad idea to use the array index since it
     * doesn't uniquely identify your elements. In cases where the array is sorted or
     * an element is added to the beginning of the array, the index will be changed even
     * though the element representing that index may be the same. This results in
     * unnecessary renders.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
     */
    "react/no-array-index-key": ["error"],

    /**
     * Prevent passing of children as props
     * Children should always be actual children, not passed in as a prop.
     * When using JSX, the children should be nested between the opening and closing tags.
     * When not using JSX, the children should be passed as additional arguments to
     * React.createElement.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
     */
    "react/no-children-prop": ["error"],

    /**
     * Prevent problem with children and props.dangerouslySetInnerHTML
     * This rule helps prevent problems caused by using children and the
     * dangerouslySetInnerHTML prop at the same time. React will throw a
     * warning if this rule is ignored.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
     */
    "react/no-danger-with-children": ["error"],

    /**
     * Several methods are deprecated between React versions.
     * This rule will warn you if you try to use a deprecated method.
     * Use the shared settings to specify the React version.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
     */
    "react/no-deprecated": ["error"],

    /**
     * Updating the state after a component mount will trigger a second render()
     * call and can lead to property / layout thrashing.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
     */
    "react/no-did-mount-set-state": ["error", "disallow-in-func"],

    /**
     * Updating the state after a component update will trigger a second render()
     * call and can lead to property / layout thrashing.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
     */
    "react/no-did-update-set-state": ["error", "disallow-in-func"],

    /**
     * NEVER mutate this.state directly, as calling setState() afterwards may replace the
     * mutation you made.Treat this.state as if it were immutable.
     * The only place that 's acceptable to assign this.state is in a ES6 class
     * component constructor.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
     */
    "react/no-direct-mutation-state": ["error"],

    /**
     * Facebook will eventually deprecate findDOMNode as it blocks certain
     * improvements in React in the future.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
     */
    "react/no-find-dom-node": ["error"],

    /**
     * isMounted is an anti-pattern, is not available when using ES6 classes,
     * and it is on its way to being officially deprecated.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
     */
    "react/no-is-mounted": ["error"],

    /**
     * Declaring only one component per file improves readability and
     * reusability of components.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
     */
    "react/no-multi-comp": ["error", { ignoreStateless: false }],

    /**
     * Warns if you have shouldComponentUpdate defined when defining a component
     * that extends React.PureComponent. While having shouldComponentUpdate
     * will still work, it becomes pointless to extend PureComponent.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
     */
    "react/no-redundant-should-component-update": ["error"],

    /**
     * This rule will warn you if you try to use the ReactDOM.render() return value.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
     */
    "react/no-render-return-value": ["error"],

    /**
     * Ensure no casing typos were made declaring static class properties and
     * lifecycle methods. Checks that declared propTypes,
     * contextTypes and childContextTypes is supported by react-props
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
     */
    "react/no-typos": ["error"],

    /**
     * Prevent invalid characters from appearing in markup
     * referring to components by setting a property on the this object
     * in the reference callback.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
     */
    "react/no-string-refs": ["error"],

    /**
     * Prevent this from being used in stateless functional components
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
     */
    "react/no-this-in-sfc": ["error"],

    /**
     * This rule prevents characters that you may have meant as JSX escape characters
     * from being accidentally injected as a text node in JSX statements.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
     */
    "react/no-unescaped-entities": ["error", { forbid: [">", '"', "'", "}"] }],

    /**
     * In JSX all DOM properties and attributes should be camelCased to be consistent with
     * standard JavaScript style.This can be a possible source of error if you are used
     * to writing plain HTML.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
     */
    "react/no-unknown-property": ["error"],

    /**
     * The rule checks the following methods:
     * componentWillMount(and UNSAFE_componentWillMount alias)
     * componentWillReceiveProps(and UNSAFE_componentWillReceiveProps alias)
     * componentWillUpdate(and UNSAFE_componentWillUpdate alias)
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
     */
    "react/no-unsafe": ["error"],

    /**
     * Warns you if you have defined a property on the state, but it is not being used anywhere.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
     */
    "react/no-unused-state": ["error"],

    /**
     * Updating the state during the componentWillUpdate step can lead to indeterminate
     * component state and is not allowed.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
     */
    "react/no-will-update-set-state": ["error", "disallow-in-func"],

    /**
     * React offers you two way to create traditional components: using the ES5
     * create-react-class module or the new ES6 class system. This rule
     * allow you to enforce one way or another.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
     */
    "react/prefer-es6-class": ["error", "always"],

    /**
     * Stateless functional components are simpler than class based components and
     * will benefit from future React performance optimizations specific to these components.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
     */
    "react/prefer-stateless-function": ["error", { ignorePureComponents: false }],

    /**
     * Prevent missing props validation in a React component definition
     * PropTypes improve the reusability of your component by validating the received data.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
     */
    "react/prop-types": ["error"],

    /**
     * When writing the render method in a component it is easy to forget to return
     * the JSX content. This rule will warn if the return statement is missing.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
     */
    "react/require-render-return": ["error"],

    /**
     * Prevent extra closing tags for components without children
     * Components without children can be self-closed to avoid unnecessary extra closing tag.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
     */
    "react/self-closing-comp": ["error", { component: true, html: true }],

    /**
     * When creating React components it is more convenient to always follow the
     * same organisation for method order to help you easily find
     * lifecycle methods, event handlers, etc.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
     */
    "react/sort-comp": [
      "error",
      {
        order: ["constructor", "lifecycle", "static-methods", "everything-else", "render"],
        groups: {
          lifecycle: [
            "displayName",
            "propTypes",
            "contextTypes",
            "childContextTypes",
            "mixins",
            "statics",
            "defaultProps",
            "getDefaultProps",
            "state",
            "getInitialState",
            "getChildContext",
            "getDerivedStateFromProps",
            "componentWillMount",
            "UNSAFE_componentWillMount",
            "componentDidMount",
            "componentWillReceiveProps",
            "UNSAFE_componentWillReceiveProps",
            "shouldComponentUpdate",
            "componentWillUpdate",
            "UNSAFE_componentWillUpdate",
            "getSnapshotBeforeUpdate",
            "componentDidUpdate",
            "componentDidCatch",
            "componentWillUnmount",
          ],
        },
      },
    ],

    /**
     * Require that the value of the prop style be an object or a variable that is an object.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
     */
    "react/style-prop-object": ["error"],

    /**
     * There are some HTML elements that are only self-closing (e.g. img, br, hr).
     * These are collectively known as void DOM elements. If you try to give these
     * children, React will give you a warning
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
     */
    "react/void-dom-elements-no-children": ["error"],
  },
};
