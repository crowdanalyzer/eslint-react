# Eslint React

[![CircleCI](https://circleci.com/gh/crowdanalyzer/eslint-react/tree/master.svg?style=shield&circle-token=cdb93107c5825a69720ea1d1db9aa932490a39b6)](https://circleci.com/gh/crowdanalyzer/eslint-react/tree/master)

# CrowdAnalyzer React/JSX Style Guide

# Table Of Contents: 

- [Basic-Rules](https://paper.dropbox.com/doc/Eslint-React--AVTX~IbhoDxOkUSB_ebWWESUAg-ORAM6YOY2igcEkvfu4Ph2#:h2=Basic-Rules:)
- [Class vs React.createClass vs stateless](https://paper.dropbox.com/doc/Eslint-React--AVTX~IbhoDxOkUSB_ebWWESUAg-ORAM6YOY2igcEkvfu4Ph2#:uid=973822221264597970434050&h2=Class-vs-React.createClass-vs-)
- [Naming](https://paper.dropbox.com/doc/Eslint-React--AVTX~IbhoDxOkUSB_ebWWESUAg-ORAM6YOY2igcEkvfu4Ph2#:uid=794984741373998449709224&h2=Naming)
- [Declaration](https://paper.dropbox.com/doc/Eslint-React--AVTX~IbhoDxOkUSB_ebWWESUAg-ORAM6YOY2igcEkvfu4Ph2#:uid=292668586888570307045706&h2=Declaration)
- [Alignment](https://paper.dropbox.com/doc/Eslint-React--AVTX~IbhoDxOkUSB_ebWWESUAg-ORAM6YOY2igcEkvfu4Ph2#:uid=812082536100541806711465&h2=Alignment)
- [Spacing](https://paper.dropbox.com/doc/Eslint-React--AVTX~IbhoDxOkUSB_ebWWESUAg-ORAM6YOY2igcEkvfu4Ph2#:uid=177141123833834510474446&h2=Spacing)
- [Props](https://paper.dropbox.com/doc/Eslint-React--AVTX~IbhoDxOkUSB_ebWWESUAg-ORAM6YOY2igcEkvfu4Ph2#:uid=965936235007005291787826&h2=Props)
- [Refs](https://paper.dropbox.com/doc/Eslint-React--AVTX~IbhoDxOkUSB_ebWWESUAg-ORAM6YOY2igcEkvfu4Ph2#:uid=573950093753830180266922&h2=Refs)
- [Ordering](https://paper.dropbox.com/doc/Eslint-React--AVTX~IbhoDxOkUSB_ebWWESUAg-ORAM6YOY2igcEkvfu4Ph2#:uid=802981413128701626299838&h2=Ordering)
- [IsMounted](https://paper.dropbox.com/doc/Eslint-React--AVTX~IbhoDxOkUSB_ebWWESUAg-ORAM6YOY2igcEkvfu4Ph2#:uid=452930627664842628389833&h2=isMounted)
- [State](https://paper.dropbox.com/doc/Eslint-React--AVTX~IbhoDxOkUSB_ebWWESUAg-ORAM6YOY2igcEkvfu4Ph2#:uid=010154618565779078880056&h2=State)

**Basic Rules:** 

- Only include one React component per file.
    ```// bad
    var Hello = createReactClass({
      render: function() {
        return <div>Hello {this.props.name}</div>;
      }
    });
    
    var HelloJohn = createReactClass({
        render: function () {
            return <Hello name = "John" / > ;
        }
    });
    
    // good
    var Hello = require('./components/Hello');
    var HelloJohn = createReactClass({
        render: function() {
          return <Hello name="John" />;
        }
    });

- Always use JSX syntax.
    ```// bad
    // filename: MyComponent.js
    function MyComponent() {
      return <div />;
    }
    
    // good
    // filename: MyComponent.jsx
    function MyComponent() {
      return <div />;
    }

- Do not use `React.createElement` unless you’re initializing the app from a file that is not JSX.


# Class vs React.createClass vs stateless
- When using a stateless functional component (SFC), props/context aren't accessed in the same way as a class component or the `create-react-class` format. Both props and context are passed as separate arguments to the component instead. Also, as the name suggests, a stateless component does not have state on `this.state`. Attempting to access properties on `this` can be a potential error if someone is unaware of the differences when writing a SFC or missed when converting a class component to a SFC.
    ```// bad
    function Foo(props) {
      return (
        <div>{this.props.bar}</div>
      );
    }
    function Foo(props) {
      const { bar } = this.props;
      return (
        <div>{bar}</div>
      );
    }
    
    // good
    function Foo(props) {
      return (
        <div>{props.bar}</div>
      );
    }
    function Foo(props) {
      const { bar } = props;
      return (
        <div>{bar}</div>
      );
    }

- Stateless functional components are simpler than class based components and will benefit from future React performance optimizations specific to these components.
    ```// bad
    var Hello = createReactClass({
      render: function() {
        return <div>Hello {this.props.name}</div>;
      }
    });
    
    // good
    const Foo = function(props, context) {
      const {
        location
      } = context.router;
    
      return <div>{props.foo}</div>;
    };

# Naming

- **Extensions**: Use `.jsx` extension for React components.
    ```// bad
    // filename: MyComponent.js
    function MyComponent() {
      return <div />;
    }
    
    // good
    // filename: MyComponent.jsx
    function MyComponent() {
      return <div />;
    }

- **Filename**: Use PascalCase for filenames. E.g., `ReservationCard.jsx`.
- **Reference Naming**: Use PascalCase for React components and camelCase for their instances
    ``` // bad
    import reservationCard from './ReservationCard';
    
    // good
    import ReservationCard from './ReservationCard';
    
    // bad
    const ReservationItem = <ReservationCard />;
    
    // good
    const reservationItem = <ReservationCard />;

- **Component Naming**: Use the filename as the component name. For example, `ReservationCard.jsx` should have a reference name of `ReservationCard`. However, for root components of a directory, use `index.jsx` as the filename and use the directory name as the component name:
    ```// bad
    import Footer from './Footer/Footer';
    
    // bad
    import Footer from './Footer/index';
    
    // good
    import Footer from './Footer';


- **Props Naming**: Avoid using DOM component prop names for different purposes.
  > Why? People expect props like `style` and `className` to mean one specific thing. Varying this API for a subset of your app makes the code less readable and less maintainable, and may cause bugs.
    ```// bad
    <MyComponent style="fancy" />
    <MyComponent className="fancy" />
    
    // good
    <MyComponent variant="fancy" />

- Ensure no casing typos were made declaring static class properties and lifecycle methods. Checks that declared `propTypes`, `contextTypes` and `childContextTypes` is supported by [react-props](https://github.com/facebook/prop-types), 

It makes sure that the following class properties have no casing typos:
    `propTypes`, `contextTypes`, `childContextTypes`, `defaultProps`

and the following react lifecycle methods:
   `getDerivedStateFromProps`, `componentWillMount`, `UNSAFE_componentWillMount`, `componentDidMount`
    `componentWillReceiveProps`, `UNSAFE_componentWillReceiveProps`, `shouldComponentUpdate`, `componentWillUpdate`
    `UNSAFE_componentWillUpdate`, `getSnapshotBeforeUpdate`, `componentDidUpdate`, `componentDidCatch`
    `componentWillUnmount`, `render`

    ```// bad
    class MyComponent extends React.Component {
      static PropTypes = {}
    }
    class MyComponent extends React.Component {
      static proptypes = {}
    }
    
    //good
    class MyComponent extends React.Component {
      static propTypes = {}
    }
    class MyComponent extends React.Component {
      static contextTypes = {}
    }

# Declaration

- While Declaring a Button you have to specify the button type (i.e: one of "button", "submit", and "reset")
    ```// bad
    var Hello = <button>Hello</button>
    var Hello = <button type="foo">Hello</button>
    var Hello = React.createElement('button', {}, 'Hello')
    var Hello = React.createElement('button', {type: 'foo'}, 'Hello')
    
    // good
    var Hello = <span>Hello</span>
    var Hello = <span type="foo">Hello</span>
    var Hello = <button type="button">Hello</button>
    var Hello = <button type="submit">Hello</button>
    var Hello = <button type="reset">Hello</button>
    var Hello = React.createElement('span', {}, 'Hello')
    var Hello = React.createElement('span', {type: 'foo'}, 'Hello')
    var Hello = React.createElement('button', {type: 'button'}, 'Hello')
    var Hello = React.createElement('button', {type: 'submit'}, 'Hello')
    var Hello = React.createElement('button', {type: 'reset'}, 'Hello')

- Several methods are deprecated between React versions, Avoid declaring a deprecated Method.
   ``` // bad
    React.render(<MyComponent />, root);
    React.unmountComponentAtNode(root);
    React.findDOMNode(this.refs.foo); 
    
    // good
    ReactDOM.render(<MyComponent />, root);
    import { PropTypes } from 'prop-types';

- Ensure that render function returns a value, ReactDOM.render()` currently returns a reference to the root `ReactComponent` instance. However, using this return value is legacy and should be avoided because future versions of React may render components asynchronously in some cases. If you need a reference to the root `ReactComponent` instance, the preferred solution is to attach a [callback ref](http://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute) to the root element.
    ```// bad
    const inst = ReactDOM.render(<App />, document.body);
    doSomethingWithInst(inst);
    
    var Hello = createReactClass({
      render() {
        <div>Hello</div>;
      }
    });
    
    // good
    ReactDOM.render(<App ref={doSomethingWithInst} />, document.body);
    ReactDOM.render(<App />, document.body, doSomethingWithInst);
    class Hello extends React.Component {
      render() {
        return <div>Hello</div>;
      }
    }

- Avoid using certain legacy lifecycle methods are [unsafe for use in async React applications](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html) and cause warnings in [*strict mode*](https://reactjs.org/docs/strict-mode.html#identifying-unsafe-lifecycles). These also happen to be the lifecycles that cause the most [confusion within the React community](https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes).
    ```// bad
    class Foo extends React.Component {
      UNSAFE_componentWillMount() {}
      UNSAFE_componentWillReceiveProps() {}
      UNSAFE_componentWillUpdate() {}
    }
    const Foo = createReactClass({
      UNSAFE_componentWillMount: function() {},
      UNSAFE_componentWillReceiveProps: function() {},
      UNSAFE_componentWillUpdate: function() {}
    });
    
    // good
    class Foo extends Bar {
      UNSAFE_componentWillMount() {}
      UNSAFE_componentWillReceiveProps() {}
      UNSAFE_componentWillUpdate() {}
    }

- Avoid passing children to some HTML elements that are only self-closing (e.g. `img`, `br`, `hr`).
    ```// bad
    <br>Children</br>
    <br children='Children' />
    <br dangerouslySetInnerHTML={{ __html: 'HTML' }} />
    React.createElement('br', undefined, 'Children')
    React.createElement('br', { children: 'Children' })
    React.createElement('br', { dangerouslySetInnerHTML: { __html: 'HTML' } })
    
    // good
    <div>Children</div>
    <div children='Children' />
    <div dangerouslySetInnerHTML={{ __html: 'HTML' }} />
    React.createElement('div', undefined, 'Children')
    React.createElement('div', { children: 'Children' })
    React.createElement('div', { dangerouslySetInnerHTML: { __html: 'HTML' } })

- Avoid creating React fragment using shorthand syntax, `<>...</>`, otherwise it should be created with `<React.Fragment>...</React.Fragment>`
    ```// bad
    <><Foo /></>
    
    // good
    <React.Fragment><Foo /></React.Fragment>
# Alignment
- Avoid extra closing tags for components without children 
    ```// bad
    var HelloJohn = <Hello name="John"></Hello>;
    
    // good
    var contentContainer = <div className="content"></div>;
    var intentionalSpace = <div>{' '}</div>;
    var HelloJohn = <Hello name="John" />;
    var Profile = <Hello name="John"><img src="picture.png" /></Hello>;\
    var HelloSpace = <Hello>{' '}</Hello>;

- Enforce the closing bracket location for JSX multiline elements, the closing bracket should be placed **after props**
    ```// good
    <Hello
      firstName="John"
      lastName="Smith" />;
    
    <Say
      firstName="John"
      lastName="Smith"
    >
      Hello
    </Say>;

- The closing tag location should be on the same line if it is one line expression, while it should be aligned with the opening tag if it is multiline expression.
    ```// bad
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

- Ensure correct position of the first property.
    ```// bad
    <Hello foo={{
        }}
        bar />
    
    // good
    <Hello foo={{
    }} />
    <Hello
        foo={{
        }}
        bar
    />

- Limit the maximum of props on a single line can improve readability, If it is multiline expression, then it’s one property per line

    ```// bad
    <Hello firstName="John" lastName="Smith" />
    
    // good
    <Hello firstName="John" lastName="Smith" />
    <Hello
      firstName="John"
      lastName="Smith"
    />

- Avoid comment strings (e.g. beginning with `//` or `/*`) from being accidentally injected as a text node in JSX statements.
    ```// bad
    var Hello = createReactClass({
      render: function() {
        return (
          <div>// empty div</div>
        );
      }
    });
    
    var Hello = createReactClass({
      render: function() {
        return (
          <div>
            /* empty div */
          </div>
        );
      }
    });
    
    // good
    var Hello = createReactClass({
      displayName: 'Hello',
      render: function() {
        return <div>{/* empty div */}</div>;
      }
    });
    
    var Hello = createReactClass({
      displayName: 'Hello',
      render: function() {
        return <div /* empty div */></div>;
      }
    });
    
    var Hello = createReactClass({
      displayName: 'Hello',
      render: function() {
        return <div className={'foo' /* temp class */}</div>;
      }
    });

- Limit every line in JSX to one expression each.
    ```// bad
    <App><Hello /></App>
    <App><Hello />
    </App>
    
    // good
    <App>Hello</App>
    <App>{"Hello"}</App>
    <App><Hello /></App>


- Avoid unnecessary curly braces in JSX props and / or children.
   ``` // bad
    <App>{'Hello world'}</App>;
    <App prop={'Hello world'} attr={"foo"} />;
    
    // good
    <App>Hello world</App>;
    <App prop="Hello world" attr="foo" />;

# Spacing

- Avoid using extra spaces, React removes extraneous new lines between elements when possible, it is possible to end up with inline elements that are not rendered with spaces between them and adjacent text. This is often indicative of an error, so this rule attempts to detect
    ```// bad
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

- Avoid spaces inside of curly braces in JSX attributes and expressions or around equal signs in JSX attributes.
    ```// bad
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

- Enforce consistent indentation style.  `4 spaces`, It applies on components & props
    ```// bad
    <App>
    <Hello />
    </App>
    // good
    <App>
        <Hello />
    </App>

- Avoid multiple spaces between inline JSX props
    ```// bad
    <App  spacy />
    <App too  spacy />
    
    // good
    <App cozy={true} />
    <App very={true} cozy={true}/>


- Avoid spaces after the opening bracket, before the closing bracket, before the closing bracket of self-closing elements, and between the angle bracket and slash of JSX closing or self-closing elements.
   ``` // bad
    <Hello firstname="John"/>
    <Provider>< /Provider>
    < Hello firstName="John"/>
    
    // good
    <Hello firstName="John" />
    <Provider></Provider>
    <Hello firstname="John" />

# Props
- Prevent missing props validation in a React component definition
    ```// bad
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

- Enforce consistent usage of destructuring assignment of props, state, and context
    ```// bad
    const MyComponent = (props) => {
      return (<div id={props.id} />)
    };
    
    // good 
    const MyComponent = ({id}) => {
      return (<div id={id} />)
    };

- Avoid declaring `defaultProp` that has a required `PropType` declaration.
    ```// bad
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

-  Ensure that any non-required `PropType` declaration of a component has a corresponding `defaultProps` value, One advantage of `defaultProps` over custom default logic in your code is that `defaultProps` are resolved by React before the `PropTypes` typechecking happens, so typechecking will also apply to your `defaultProps`. The same also holds true for stateless functional components: default function parameters do not behave the same as `defaultProps`and thus using `defaultProps` is still preferred.
    ```// bad
    
    const HelloWorld = ({ name = 'John Doe' }) => (
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
      name: 'john'
    };

- Prevents passing of [props that add lots of complexity](https://medium.com/brigade-engineering/don-t-pass-css-classes-between-components-e9f7ab192785) (`className`, `style`) to Components. This rule only applies to Components (e.g. `<Foo />`) and not DOM nodes (e.g. `<div />`).
    ```// bad
    <Hello className='foo' />
    <Hello style={{color: 'red'}} />
    
    // good
    <Hello name='Joe' />
    <div className='foo' />```

- Avoid using an array index as `key` prop, prefer a stable ID. 
   ``` // bad
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

- Prevent passing of children as props,  Children should always be actual children, not passed in as a prop. 
  When using JSX, the children should be nested between the opening and closing tags. When not using JSX, the children should be passed as additional arguments to `React.createElement`.
    ```// bad
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

- Avoid using children and the dangerouslySetInnerHTML prop at the same time, which will cause problems with children and props.dangerouslySetInnerHTML.
    ```// bad
    <div dangerouslySetInnerHTML={{ __html: "HTML" }}>Children</div>
    <Hello dangerouslySetInnerHTML={{ __html: "HTML" }}>Children</Hello>
    
    React.createElement("div", { dangerouslySetInnerHTML: { __html: "HTML" } }, "Children");
    React.createElement("Hello", { dangerouslySetInnerHTML: { __html: "HTML" } }, "Children");
    
    // good
    <div dangerouslySetInnerHTML={{ __html: "HTML" }} />
    <Hello dangerouslySetInnerHTML={{ __html: "HTML" }} />
    <div>Children</div>
    <Hello>Children</Hello>
    React.createElement("div", { dangerouslySetInnerHTML: { __html: "HTML" } });
    React.createElement("Hello", { dangerouslySetInnerHTML: { __html: "HTML" } });
    React.createElement("div", {}, "Children");
    React.createElement("Hello", {}, "Children");

- Avoid using characters that you may have meant as JSX escape characters from being accidentally injected as a text node in JSX statements.
    ```// bad
    <div> > </div>
    
    // good
    <div> &gt; </div>
    <div> {'>'} </div>

- In JSX all DOM properties and attributes should be camelCased to be consistent with standard JavaScript style. This can be a possible source of error if you are used to writing plain HTML.
    ```// bad
    var React = require('react');
    var Hello = <div class="hello">Hello World</div>;
    
    // good
    var React = require('react');
    var Hello = <div className="hello">Hello World</div>;

- Avoid using defined a prop type but it is never being used anywhere.
    ```// bad
    var Hello = createReactClass({
      propTypes: {
        name: PropTypes.string
      },
      render: function() {
        return <div>Hello Bob</div>;
      }
    });
    
    // good
    var Hello = createReactClass({
      propTypes: {
        name: PropTypes.string
      },
      render: function() {
        return <div>Hello {this.props.name}</div>;
      }
    });

- Ensure that the value of the prop `style` be an object or a variable that is an object.
    ```// bad
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

- Avoid passing a boolean attribute in jsx without specifying its value
    ```// bad
    var Hello = <Hello personal />;
    
    // good
    var Hello = <Hello personal={true} />;


- Ensures that any component or prop methods used to handle events are correctly prefixed.
    ```// bad
    <MyComponent handleChange={this.handleChange} />
    <MyComponent onChange={this.componentChanged} />
    
    // good
    <MyComponent onChange={this.handleChange} />
    <MyComponent onChange={this.props.onFoo} />

- Avoid passing `bind`  call or [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) in a JSX prop as it will create a brand new function on every single render. This is bad for performance, as it may cause unnecessary re-renders if a brand new function is passed as a prop to a component that uses reference equality check on the prop to determine if it should update.
    ```// bad
    <Foo onClick={this._handleClick.bind(this)}></Foo>
    <Foo onClick={() => console.log('Hello!')}></Foo>
    
    // good
    <Foo onClick={this._handleClick}></Foo>

- Avoid duplicate props which can cause unexpected behaviour in your application.
    ```// bad
    <Hello name="John" name="John" />;
    
    // good
    <Hello firstname="John" lastname="Doe" />;

- Avoid Undeclared variables in jsx
    ```// bad
    <Hello name="John" />;
    // will ignore Text in the global scope and warn
    var Hello = React.createClass({
      render: function() {
        return <Text>Hello</Text>;
      }
    });
    module.exports = Hello;
    
    // good
    var Hello = require('./Hello');
    <Hello name="John" />;

# Refs

- Currently, two ways are supported by React to refer to components. The first way, providing a string identifier, is now considered legacy in the official documentation. The documentation now prefers a second method -- referring to components by setting a property on the `this` object in the reference callback.
    ```// bad
    var Hello = createReactClass({
     render: function() {
      return <div ref="hello">Hello, world.</div>;
     }
    });
    
    // good
    var Hello = createReactClass({
      componentDidMount: function() {
        var component = this.hello;
        // ...do something with component
      },
      render() {
        return <div ref={(c) => { this.hello = c; }}>Hello, world.</div>;
      }
    });

- When creating a JSX element that has an `a` tag, it is often desired to have the link open in a new tab using the `target='_blank'` attribute. Using this attribute unaccompanied by `rel='noreferrer noopener'`, however, is a severe security vulnerability ([see here for more details](https://mathiasbynens.github.io/rel-noopener)) This rules requires that you accompany `target='_blank'` attributes with `rel='noreferrer noopener'`.


    ```// bad
    var Hello = <a target='_blank' href="http://example.com/"></a>
    var Hello = <a target='_blank' href={ dynamicLink }></a>
    
    //good
    var Hello = <p target='_blank'></p>
    var Hello = <a target='_blank' rel='noopener noreferrer' href="http://example.com"></a>
    var Hello = <a target='_blank' href="relative/path/in/the/host"></a>
    var Hello = <a target='_blank' href="/absolute/path/in/the/host"></a>
    var Hello = <a></a>

# Ordering
- When creating React components it is more convenient to always follow the same organisation for method order to help you easily find lifecycle methods, event handlers, etc.
    ```// bad
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

- Sort propTypes declarations alphabetically to be able to find necessary declaration easier at the later time. Others feel that it adds complexity and becomes burden to maintain.
    ```// bad
    var Component = createReactClass({
      propTypes: {
        z: PropTypes.number,
        a: PropTypes.any,
        b: PropTypes.string
      },
    });
    // good
    var Component = createReactClass({
      propTypes: {
        a: PropTypes.number,
        b: PropTypes.any,
        z: PropTypes.string
      },
    });

# isMounted

- Do not use `isMounted`. eslint: `[react/no-is-mounted](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md)`
> Why? `[isMounted](https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html)` [is an anti-pattern](https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html), is not available when using ES6 classes, and is on its way to being officially deprecated.


# State
- Prevent usage of `this.state` inside `setState` calls. Such usage of `this.state` might result in errors when two state calls are called in batch and thus referencing old state and not the current state. An example can be an increment function:
    ```// bad 
    function increment() {
        this.setState({value: this.state.value + 1});
    }
    
    // good
    function increment() {
        this.setState(prevState => ({ value: prevState.value + 1}));
    }

- Avoid updating the state after a **component mount** or **component update** as it  will trigger a second `render()` call and can lead to property/layout thrashing
    ```// bad
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

- NEVER mutate `this.state` directly, as calling `setState()` afterwards may replace the mutation you made. Treat `this.state` as if it were immutable.
    ```// bad
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

- Avoid having shouldComponentUpdate defined when defining a component that extends React.PureComponent. While having shouldComponentUpdate will still work, it becomes pointless to extend PureComponent.
    ```// bad
    class Foo extends React.PureComponent {
      shouldComponentUpdate() {
        // do check
      }
    
      render() {
        return <div>Radical!</div>
      }
    }
    
    function Bar() {
      return class Baz extends React.PureComponent {
        shouldComponentUpdate() {
          // do check
        }
    
        render() {
          return <div>Groovy!</div>
        }
      }
    }
    // good
    class Foo extends React.Component {
      shouldComponentUpdate() {
        // do check
      }
    
      render() {
        return <div>Radical!</div>
      }
    }
    
    function Bar() {
      return class Baz extends React.Component {
        shouldComponentUpdate() {
          // do check
        }
    
        render() {
          return <div>Groovy!</div>
        }
      }
    }
    
    class Qux extends React.PureComponent {
      render() {
        return <div>Tubular!</div>
      }
    }


- Avoid defining a property on the state, but it is not being used anywhere.
    ```// bad
    class MyComponent extends React.Component {
      state = { foo: 0 };
      render() {
        return <SomeComponent />;
      }
    }
    
    // good
    class MyComponent extends React.Component {
      state = { foo: 0 };
      render() {
        return <SomeComponent foo={this.state.foo} />;
      }
    }
    
- Avoid updating the state during the componentWillUpdate step as it can lead to indeterminate component state and is not allowed.
    ```// bad
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
