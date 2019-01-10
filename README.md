# CrowdAnalyzer React/JSX Style Guide

[![CircleCI](https://circleci.com/gh/crowdanalyzer/eslint-react/tree/master.svg?style=shield&circle-token=cdb93107c5825a69720ea1d1db9aa932490a39b6)](https://circleci.com/gh/crowdanalyzer/eslint-react/tree/master)

# [Table of Contents](#table-of-contents)

1. [Basic Rules](#Basic-Rules)
2. [Classes vs Stateless](#Classes-vs-Stateless)
3. [Naming](#Naming)
4. [Alignment](#Alignment)
5. [Spacing](#Spacing)
6. [Props](#Props)
7. [Refs](#Refs)
8. [Ordering](#Ordering)
9. [State](#State)
10. [Styles](#Styles)

## [Basic Rules](#Basic-Rules)

1.1 **Only** include **one** React component per file. ([no-multi-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md))
    
```javascript
// bad
var Hello = createReactClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

var HelloJohn = createReactClass({
  render: function () {  
    return <Hello name = "John" /> ;
  }
});

// good
var Hello = require('./components/Hello');
var HelloJohn = createReactClass({
  render: function() {
    return <Hello name="John" />;
  }
});
``` 

1.2 **Always** use JSX syntax.

1.3 **Do not** use `React.createElement` unless you’re initializing the app from a file that is not JSX.

**[Back to Top](#table-of-contents)**

## [Classes vs Stateless](#Classes-vs-Stateless)

2.1 If you have internal state and/or refs, prefer **class** extends **React.Component** over **React.createClass**. if you don't have state or refs, prefer **normal functions** (not arrow functions) over **classes** ([prefer-es6-class](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md)) & ([prefer-stateless-function](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md))

```javascript
// bad
const Listing = React.createClass({
  render() {
    return <div>{this.state.hello}</div>;
  }
});

const Listing = ({ hello }) => (
  <div>{hello}</div>
);

// good
class Listing extends React.Component {
  render() {
    return <div>{this.state.hello}</div>;
  }
}

function Listing({ hello }) {
  return <div>{hello}</div>;
}
```

**[Back to Top](#table-of-contents)**

## [Naming](#Naming)

3.1 **Extensions**: Use `.jsx` extension for React components. ([jsx-filename-extension](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md))
  
```javascript
// bad
// filename: MyComponent.js
function MyComponent() {
  return <div />;
}

// good
// filename: MyComponent.jsx
function MyComponent() {
  return <div />;
}
```

3.2 **Filename**: Use PascalCase for filenames. E.g., `ReservationCard.jsx`. ([jsx-pascal-case](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md))

3.3 **Reference Naming**: Use PascalCase for React components and camelCase for their instances. ([jsx-pascal-case](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md))
  
```javascript
// bad
import reservationCard from './ReservationCard';
const ReservationItem = <ReservationCard />;

// good
import ReservationCard from './ReservationCard';
const reservationItem = <ReservationCard />;
```

3.4 **Component Naming**: Use the filename as the component name. For example, `ReservationCard.jsx` should have a reference name of `ReservationCard`. However, for root components of a directory, use `index.jsx` as the filename and use the directory name as the component name:

```javascript
// bad
import Footer from './Footer/Footer';
import Footer from './Footer/index';

// good
import Footer from './Footer';
```

**[Back to Top](#table-of-contents)**
    
## [Alignment](#Alignment)
4.1 Avoid extra closing tags for components without children ([self-closing-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)) 
   
```javascript
// bad
var HelloJohn = <Hello name="John"></Hello>;
    
// good
var contentContainer = <div className="content"></div>;
var intentionalSpace = <div>{' '}</div>;
var HelloJohn = <Hello name="John" />;
var Profile = <Hello name="John"><img src="picture.png" /></Hello>;
var HelloSpace = <Hello>{' '}</Hello>;
```

4.2 Enforce the closing bracket location for JSX multiline elements, the closing bracket should be placed **after props** ([closing-bracket-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md))

```javascript 
// bad 
var x = function() {
  return <Say
    firstName="John"
    lastName="Smith"
         >
    Hello
         </Say>;
};

// good
<Hello
  firstName="John"
  lastName="Smith" />;

<Say
  firstName="John"
  lastName="Smith">
  Hello
</Say>;
```
    
4.3 The closing tag location should be on the same line if it is one line expression, while it should be aligned with the opening tag if it is multiline expression. ([jsx-closing-tag-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md))

```javascript 
// bad
<Hello>
  marklar
  </Hello>
<Hello>
  marklar</Hello>
    
// good
<Hello>
  marklar
</Hello>
<Hello>marklar</Hello>
```

4.4 Ensure correct position of the first property. ([jsx-first-prop-new-line](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md))

```javascript 
// bad
<Hello foo={{
    }}
    bar />
    
// good
<Hello foo={{}} />
<Hello
  foo={{}}
  bar
/>
```

4.5 Limit the maximum of props on a single line can improve readability, If it is multiline expression, then it’s one property per line ([jsx-max-props-per-line](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md))

  ``` javascript 
// bad
<Hello 
  firstName="John" lastName="Smith" />
    
// good
<Hello firstName="John" lastName="Smith" />
<Hello
  firstName="John"
  lastName="Smith"
/>
```

4.6 Limit every line in JSX to one expression each. ([jsx-one-expression-per-line](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md))
   
```javascript 
// bad
<App><Hello /><Hello2 /></App>

// good
<App>Hello</App>
<App>{"Hello"}</App>
<App>
  <Hello />
  <Hello2 />
</App>
```

4.7 Avoid unnecessary curly braces in JSX props and / or children. ([jsx-curly-brace-presence](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md))

```javascript
// bad
<App>{'Hello world'}</App>;
<App prop={'Hello world'} attr={"foo"} />;

// good
<App>Hello world</App>;
<App prop="Hello world" attr="foo" />;
```

**[Back to Top](#table-of-contents)**

## [Spacing](#Spacing)

5.1 Avoid using extra spaces, React removes extraneous new lines between elements when possible, it is possible to end up with inline elements that are not rendered with spaces between them and adjacent text. This is often indicative of an error, so this rule attempts to detect.([jsx-child-element-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md))

``` javascript
// bad
<div>
  Here is a
  <a>link</a>
</div>

<div>
  <b>This text</b>
  is bold
</div>

// good
<div>
  Spacing is
  {' '}
  <a>explicit</a>
</div>
<div>
  Lack of spacing is{/*
  */}<a>explicit</a>
</div>
```

5.2 Avoid spaces inside of curly braces in JSX attributes and expressions or around equal signs in JSX attributes ([jsx-curly-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)) & ([jsx-equals-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md))
   
```javascript
// bad
<Hello name={ firstname } />;
<Hello name={ firstname} />;
<Hello name={firstname } />;
<Hello name={
  firstname
} />;
<Hello name = {firstname} />;
<Hello name ={firstname} />;
<Hello name= {firstname} />;

// good
<Hello name={firstname} />;
<Hello name={{ firstname: 'John', lastname: 'Doe' }} />;
<Hello>{firstname}</Hello>;
<Hello>{ firstname }</Hello>;
<Hello>{
  firstname
}</Hello>;
<Hello name />;
<Hello {...props} />;
```
    
5.3 Enforce consistent indentation style. `4 spaces`, It applies on components & props.([jsx-indent](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md)) & ([jsx-indent-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md))
    
``` javascript
// bad
<App>
<Hello />
</App>

// good
<App>
    <Hello />
</App>
```

5.4 Avoid multiple spaces between inline JSX props. ([jsx-props-no-multi-spaces](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md))
   
```javascript
// bad
<App  spacy />
<App too  spacy />

// good
<App cozy={true} />
<App very={true} cozy={true}/>
```

5.5 Avoid spaces after the opening bracket, before the closing bracket and between the angle bracket and slash of JSX self-closing elements. Leave space before the closing bracket of self-closing elements. ([jsx-tag-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md))

```javascript
// bad
<Hello firstname="John"/>
<Provider>< /Provider>
< Hello firstName="John"/>

// good
<Hello firstName="John" />
<Provider></Provider>
```

**[Back to Top](#table-of-contents)**
  
## [Props](#Props)

6.1 Prevent missing props validation in a React component definition. ([prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md))

```javascript
// bad
var Hello = createReactClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

// good
var Hello = createReactClass({
  propTypes: {
    name: PropTypes.string.isRequired,
  },
  render: function() {
    return <div>Hello {this.props.name}</div>;
  },
});
```

6.2 Enforce consistent usage of destructuring assignment of props, state, and context. ([destructuring-assignment](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md))

```javascript
// bad
const MyComponent = (props) => {
  return (<div id={props.id} />)
};

// good 
const MyComponent = ({id}) => {
  return (<div id={id} />)
};
```

6.3 Avoid declaring `defaultProp` that has a required `PropType` declaration. ([default-props-match-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md))

``` javascript
// bad
MyStatelessComponent.propTypes = {
  foo: React.PropTypes.string.isRequired,
  bar: React.PropTypes.string
};
MyStatelessComponent.defaultProps = {
  foo: "foo"
};

// good
MyStatelessComponent.propTypes = {
  foo: React.PropTypes.string.isRequired,
  bar: React.PropTypes.string
};
MyStatelessComponent.defaultProps = {
  bar: 'some default'
};
```

6.4 Ensure that any non-required `PropType` declaration of a component has a corresponding `defaultProps` value, One advantage of `defaultProps` over custom default logic in your code is that `defaultProps` are resolved by React before the `PropTypes` typechecking happens, so typechecking will also apply to your `defaultProps`. The same also holds true for stateless functional components: default function parameters do not behave the same as `defaultProps`and thus using `defaultProps` is still preferred. ([require-default-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md))
    
```javascript
// bad
const HelloWorld = ({ name = { first: 'John', last: 'Doe' }) => (
  <h1>Hello, {name.first} {name.last}!</h1>
);

HelloWorld.propTypes = {
  name: PropTypes.shape({
    first: PropTypes.string,
    last: PropTypes.string,
  })
};

// good
const HelloWorld = ({ name }) => (
  <h1>Hello, {name.first} {name.last}!</h1>
);

HelloWorld.propTypes = {
  name: PropTypes.shape({
    first: PropTypes.string,
    last: PropTypes.string,
  })
};

HelloWorld.defaultProps = {
  name: { first: 'John', last: 'Doe' }
};
```

6.5 Prevents passing of [props that add lots of complexity](https://medium.com/brigade-engineering/don-t-pass-css-classes-between-components-e9f7ab192785) (`className`, `style`) to Components. This rule only applies to Components (e.g. `<Foo />`) and not DOM nodes (e.g. `<div />`). ([forbid-component-props]( https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md))
   
```javascript
// bad
<Hello className='foo' />
<Hello style={{color: 'red'}} />

// good
<Hello name='Joe' />
<div className='foo' />
```

6.6 Avoid using an array index as `key` prop, prefer a stable ID. ([no-array-index-key](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md))

```javascript
// bad
React.Children.map(this.props.children, (child, index) => (
  React.cloneElement(child, { key: index })
))
Children.forEach(this.props.children, (child, index) => (
  React.cloneElement(child, { key: index })
))

// good
React.Children.map(this.props.children, (child, index) => (
  React.cloneElement(child, { key: child.id })
))
Children.forEach(this.props.children, (child, index) => (
  React.cloneElement(child, { key: child.id })
))
```

6.7 Prevent passing of children as props,  Children should always be actual children, not passed in as a prop. 
When using JSX, the children should be nested between the opening and closing tags. When not using JSX, the children should be passed as additional arguments to `React.createElement`. ([no-children-prop](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md))

```javascript
// bad
<div children='Children' />

<MyComponent children={<AnotherComponent />} />
<MyComponent children={['Child 1', 'Child 2']} />

React.createElement("div", { children: 'Children' })

// good
<div>Children</div>
<MyComponent>Children</MyComponent>

<MyComponent>
  <span>Child 1</span>
  <span>Child 2</span>
</MyComponent>

React.createElement("div", {}, 'Children')
React.createElement("div", 'Child 1', 'Child 2')
```

6.8 Ensure that the value of the prop `style` be an object or a variable that is an object. ([style-prop-object](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md))
  
```javascript
// bad
<div style="color: 'red'" />
<div style={true} />
<Hello style={true} />
const styles = true;
<div style={styles} />

// good
<div style={{ color: "red" }} />
<Hello style={{ color: "red" }} />
const styles = { color: "red" };
<div style={styles} />
```

6.9 Avoid passing a boolean attribute in jsx without specifying its value. ([jsx-boolean-value](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md))
   
```javascript
// bad
var Hello = <Hello personal />;

// good
var Hello = <Hello personal={true} />;
```

6.10 Ensures that any component or prop methods used to handle events are correctly prefixed. ([jsx-handler-names](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md))
   
```javascript
// bad
<MyComponent handleChange={this.handleChange} />
<MyComponent onChange={this.componentChanged} />

// good
<MyComponent onChange={this.handleChange} />
<MyComponent onChange={this.props.onFoo} />
```

6.11 Avoid duplicate props which can cause unexpected behaviour in your application. ([jsx-no-duplicate-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md))
 
```javascript
// bad
<Hello name="John" name="John" />;

// good
<Hello firstname="John" lastname="Doe" />;
```

**[Back to Top](#table-of-contents)**

## [Refs](#Refs)

7.1 Currently, two ways are supported by React to refer to components. The first way, providing a string identifier, is now considered legacy in the official documentation. The documentation now prefers a second method -- referring to components by setting a property on the `this` object in the reference callback. ([no-string-refs](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md))

```javascript
// bad
var Hello = createReactClass({
  render: function() {
    return <div ref="hello">Hello, world.</div>;
  }
});

// good
var Hello = createReactClass({
  componentDidMount: function() {
    var component = this.hello;
  },
  render() {
    return <div ref={(c) => { this.hello = c; }}>Hello, world.</div>;
  }
});
```

7.2 When creating a JSX element that has an `a` tag, it is often desired to have the link open in a new tab using the `target='_blank'` attribute. Using this attribute unaccompanied by `rel='noreferrer noopener'`, however, is a severe security vulnerability ([see here for more details](https://mathiasbynens.github.io/rel-noopener)) This rules requires that you accompany `target='_blank'` attributes with `rel='noreferrer noopener'`. ([jsx-no-target-blank](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md))
  
```javascript
// bad
var Hello = <a target='_blank' href="http://example.com/"></a>
var Hello = <a target='_blank' href={ dynamicLink }></a>

//good
var Hello = <p target='_blank'></p>
var Hello = <a target='_blank' rel='noopener noreferrer' href="http://example.com"></a>
var Hello = <a target='_blank' href="relative/path/in/the/host"></a>
var Hello = <a target='_blank' href="/absolute/path/in/the/host"></a>
var Hello = <a></a>
```

**[Back to Top](#table-of-contents)**

## [Ordering](#Ordering)
8.1 When creating React components it is more convenient to always follow the same organisation for method order to help you easily find lifecycle methods, event handlers, etc. ([sort-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md))
   
```javascript
// bad
var Hello = createReactClass({
  render: function() {
    return <div>Hello</div>;
  },
  displayName : 'Hello'
});

// good
var Hello = createReactClass({
  displayName : 'Hello',
  render: function() {
    return <div>Hello</div>;
  }
});
```

**[Back to Top](#table-of-contents)**

## [State](#State)
9.1 Prevent usage of `this.state` inside `setState` calls. Such usage of `this.state` might result in errors when two state calls are called in batch and thus referencing old state and not the current state. ([no-access-state-in-setstate](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md))
   
```javascript
// bad 
function increment() {
  sthis.setState({value: this.state.value + 1});
}

// good
function increment() {
  this.setState(prevState => ({ value: prevState.value + 1}));
}
```

9.2 Avoid updating the state after a **component mount** or **component update** as it  will trigger a second `render()` call and can lead to property/layout thrashing. ([no-will-update-set-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md)) & ([no-did-mount-set-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md))
    
```javascript
// bad
var Hello = createReactClass({
  componentDidMount: function() {
    this.setState({
      name: this.props.name.toUpperCase()
    });
  },
  render: function() {
    return <div>Hello {this.state.name}</div>;
  }
});

var Hello = createReactClass({
  componentDidUpdate: function() {
    this.setState({
      name: this.props.name.toUpperCase()
    });
  },
  render: function() {
    return <div>Hello {this.state.name}</div>;
  }
});

// good
var Hello = createReactClass({
  componentDidMount: function() {
    this.onMount(function callback(newName) {
      this.setState({
        name: newName
      });
    });
  },
  render: function() {
    return <div>Hello {this.state.name}</div>;
  }
});

var Hello = createReactClass({
  componentDidUpdate: function() {
    this.props.onUpdate();
  },
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});
```

9.3 NEVER mutate `this.state` directly, as calling `setState()` afterwards may replace the mutation you made. Treat `this.state` as if it were immutable. ([no-direct-mutation-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md))
    
```javascript
// bad
var Hello = createReactClass({
  componentDidMount: function() {
    this.state.name = this.props.name.toUpperCase();
  },
  render: function() {
    return <div>Hello {this.state.name}</div>;
  }
});

class Hello extends React.Component {
  constructor(props) {
    super(props)

    // Assign at instance creation time, not on a callback
    doSomethingAsync(() => {
      this.state = 'bad';
    });
  }
}
// good
var Hello = createReactClass({
  componentDidMount: function() {
    this.setState({
      name: this.props.name.toUpperCase();
    });
  },
  render: function() {
    return <div>Hello {this.state.name}</div>;
  }
});

class Hello extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      foo: 'bar',
    }
  }
}
```
    
9.4 Avoid updating the state during the componentWillUpdate step as it can lead to indeterminate component state and is not allowed. ([no-will-update-set-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md))
    
```javascript
// bad
var Hello = createReactClass({
  componentWillUpdate: function() {
    this.setState({
      name: this.props.name.toUpperCase()
    });
  },
  render: function() {
    return <div>Hello {this.state.name}</div>;
  }
});

// good
var Hello = createReactClass({
  componentWillUpdate: function() {
    this.props.prepareHandler();
  },
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});    
```

**[Back to Top](#table-of-contents)**

## [Styles](#Styles)

10.1 Always use double quotes (") for JSX attributes. ([jsx-quotes](https://eslint.org/docs/rules/quotes#enforce-the-consistent-use-of-either-backticks-double-or-single-quotes-quotes))

```javascript
// bad
<Foo bar='bar' />
<Foo style={{ left: '20px' }} />

// good
<Foo bar="bar" />
<Foo style={{ left: "20px" }} />
```

**[Back to Top](#table-of-contents)**
