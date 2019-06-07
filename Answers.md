# Answers

1.  What is React JS and what problems does it try and solve?
React is a commonly used, and very efficient, UI library which uses condensed pieces of UI called components to build elaborate applications. React utilizes the virtual DOM to update changes within our code. What makes React very useful is the way it utilizes JavaScript which is a familiar and much used language instead of relying heavily on its own API. This allows for one to gain much more in depth knowledge about the JavaScript programming simultaneously.

1.  What does it mean to _think_ in react?
Thinking in React means keeping in mind the functionality, for lack of a better term, of React while building an application. There are several steps to the methodology according to React's website. The steps inclue: mocking up the project, breaking the UI into a component hierarchy, building a static version in React, identifying the minimal (but complete) representation of UI state, identify where your state should live, and  inverse data flow. 

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
A class component requires you to extend from React.Component and create a render function which returns a React element while a stateful component relies on a state. A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element, while presentational components are primarily concerned with how things look. These components contains a render method and little other logic.

1.  Describe state.
State is at the heart of every React component, it is an object that determines how that component renders & behaves. In other words, State is what allows you to create components that are dynamic and interactive.

1.  Describe props.
Props which is short for properties, pass custom data to a React component and also
triggers state changes.