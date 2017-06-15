import React from "react";

import Analytics from "sajari-react/pipeline/analytics";

import { State } from "sajari-react/pipeline/state";

import Overlay from "./Overlay";
import InPage from "./InPage";

import stateProxy from "./stateProxy";

import "./styles.css";

const _state = State.default();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.initialiseValues = this.initialiseValues.bind(this);
    this.initialiseValues(true);
  }

  componentDidMount() {
    window._sjui.state = stateProxy;

    if (!this.props.config.disableGA) {
      new Analytics("default");
    }
  }

  initialiseValues(firstTime) {
    const config = this.props.config;

    _state.setProject(config.project);
    _state.setCollection(config.collection);
    _state.setPipeline(config.pipeline);

    let fields = "title,description,url";
    if (config.showImages) {
      fields += ",image";
    }

    const tabValues = {};
    // Set the initial tab filter
    if (config.tabFilters && config.tabFilters.defaultTab) {
      config.tabFilters.tabs.forEach(t => {
        if (t.title === config.tabFilters.defaultTab) {
          tabValues.filter = t.filter;
        }
      });
    }

    const userValues = config.values;

    // Only include initial values the first time App is initialise0d
    const initialValues = config.initialValues && firstTime
      ? config.initialValues
      : {};

    const combinedValues = {
      fields,
      ...initialValues,
      ...tabValues,
      ...userValues
    };

    const querySet = Boolean(combinedValues.q);
    _state.setValues(combinedValues, querySet);
  }

  render() {
    if (this.props.config.overlay) {
      return (
        <Overlay
          config={this.props.config}
          startActive={_state.getValues().q}
          initialiseValues={this.initialiseValues}
          setOverlayControls={this.props.setOverlayControls}
        />
      );
    }

    return (
      <InPage
        config={this.props.config}
        setupInPageResults={this.props.setupInPageResults}
      />
    );
  }
}

export default App;
