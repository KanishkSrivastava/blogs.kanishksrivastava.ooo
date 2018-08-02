import React, { Component } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import NavBar from "../component/NavBar";
import Highlight from "react-highlight";
const Parallax = dynamic(import("../component/Parallax"), { ssr: false });
export default class ReactNativeAndRedux extends Component {
  render() {
    return (
      <div>
        <Head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta
            name="description"
            content="This blog will tell you about how you can easily integrate redux in react native"
          />
          <meta
            name="description"
            content="Blogs about daily challenges faced in developers life"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css"
          />
          <link rel="stylesheet" href="static/styles/docco.css" />
          <link rel="stylesheet" href="static/styles/styles.css" />
        </Head>
        <NavBar />
        <Parallax name="images/Blogs/ReactNativeAndRedux/ReactNative.jpg" />
        <div className="row">
          <div className="col s1 m1 l1" />
          <div className="col s10 m9 l9">
            <div className="container">
              <h3>React Native and Redux</h3>
              <span className="text center-block">
                Redux is a state manager, it is widely used with React for
                managing its state. The state flows from top to down, i.e from
                parent component to child component in a React App. We cannot
                inject state form one child component to another, it has to flow
                from its top level component. This is where Redux comes handy.
                You can just update the state in a global object (Redux store),
                and fetch the state from it.
              </span>
              <img
                alt="Image explaning Redux Store"
                className="responsive-img image"
                src="../static/images/Blogs/ReactNativeAndRedux/ReduxStore.jpg"
              />
              <h4>React Native</h4>
              <span className="textCode center-block">
                <Highlight language="javascript">{`npm install -g create-react-native-app`}</Highlight>
              </span>
              <span className="text center-block">
                After installing, use this command to make a React Native App.
              </span>
              <span className="textCode center-block">
                <Highlight language="javascript">{`create-react-native-app RN_With_Redux`}</Highlight>
              </span>
              <span className="text center-block">
                Then we will eject the app, and run it on an andorid emulator.
              </span>
              <span className="textCode center-block">
                <Highlight language="javascript">npm run eject</Highlight>
              </span>
              <span className="text center-block">
                After thant we will install three dependencies Redux for state
                management, React-Redux for connecting it with our React App and
                Redux Thunk which makes dispatching actions very easy.
              </span>
              <span className="textCode center-block">
                <Highlight language="javascript">
                  npm install redux react-redux redux-thunk
                </Highlight>
              </span>
              <span className="text center-block">
                I have set up my folder structure, we will be having only one
                container for simplicity.
              </span>
              <img
                alt="image explaning folder structure of the app"
                className="responsive-img image"
                src="../static/images/Blogs/ReactNativeAndRedux/FolderStructureRNandRedux.jpg"
              />
              <span className="text center-block">
                Let us see how data flows in Redux and how we can request data
                from our store.
              </span>
              <img
                alt="explaning how we connect to our redux store"
                className="responsive-img image"
                src="../static/images/Blogs/ReactNativeAndRedux/Redux.jpg"
              />
              <h4>Getting Started</h4>
              <span className="text center-block">1. Actions</span>
              <span className="textCode center-block">
                <Highlight language="javascript">
                  {`// actions/index.js
export const actionOne = () => async dispatch => {
  dispatch({
    type: "CHANGE_STATE_OF_ONE"
  });
};
`}
                </Highlight>
              </span>
              <span className="text center-block">
                When any container in our app dispatches an action of the name
                `actionOne`, this piece of code is called. The action return a
                dispatch of type `CHANGE_STATE_OF_ONE`, which will then be
                catched by our reducers.
              </span>
              <br />
              <span className="text center-block">2. Reducers</span>
              <span className="textCode center-block">
                <Highlight language="javascript">
                  {`// reducers/one.js
const initialState = {
  one: "initial state"
};
export default function(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_STATE_OF_ONE":
      return {
        ...state,
        one: "final state"
      };
    default:
      return state;
  }
}`}
                </Highlight>
              </span>
              <span className="text center-block">
                Above we have created a reducer which listens for the dispatch
                `CHANGE_STATE_OF_ONE`, if it gets it, the state is changed from
                `initial state` to `final state` or else the initial state is
                returned.
                <br />
                We will also add a piece of code, so that all of our reducers
                finally combine pieces of state into one (combine reducers).
              </span>
              <span className="textCode center-block">
                <Highlight language="javascript">
                  {`// reducers/index.js
import { combineReducers } from "redux";
import oneReducer from "./one";

export default combineReducers({
  one: oneReducer
  // many other reducers can be added
});
`}
                </Highlight>
              </span>
              <span className="text center-block">3. Store</span>
              <span className="textCode center-block">
                <Highlight language="javascript">{`// store.js
                import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const middleware = [thunk];
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
`}</Highlight>
              </span>
              <span className="text center-block">4. Container</span>
              <span className="textCode center-block">
                <Highlight language="javascript">
                  {`// containers/One.js
import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { actionOne } from "../actions/index";
class One extends Component {
  componentDidMount() {
    this.props.actionOne();
  }
  render() {
    console.log(this.props.one);
    return (
      <View style={{ backgroundColor: "red" }}>
        <Text>{this.props.one.one}</Text>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    one: state.one
  };
};
export default connect(
  mapStateToProps,
  { actionOne }
)(One);

`}
                </Highlight>
              </span>
              <span className="text center-block">
                5. Connecting Every Thing with React
              </span>
              <span className="textCode center-block">
                <Highlight language="javascript">{`import React from "react";

import { Provider } from "react-redux";
import store from "./src/store";

import One from "./src/containers/One";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <One />
      </Provider>
    );
  }
}

`}</Highlight>
              </span>
              <a href="/" class="waves-effect waves-light btn">
                Home Page
              </a>
            </div>
          </div>
          <div className="col s1 m2 l2">Ads</div>
        </div>
      </div>
    );
  }
}
