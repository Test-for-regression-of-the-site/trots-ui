import React, { Component } from "react";

import DOM from "./render/dom";
import ReportRenderer from "./render/report-renderer";
import ReportUIFeatures from "./render/report-ui-features";
import Logger from "./render/logger";
import Template from "./Template";
import Header from '../Header/Header';

class ReportViewer extends Component {
  
  componentDidMount() {
    this.event();
  }
  componentDidMount() {
    this.generateReport();
  }

  event() {
    document.addEventListener("lh-log", e => {
      const logger = new Logger(document.querySelector("#lh-log"));
      switch (e.detail.cmd) {
        case "log":
          logger.log(e.detail.msg);
          break;
        case "warn":
          logger.warn(e.detail.msg);
          break;
        case "error":
          logger.error(e.detail.msg);
          break;
        case "hide":
          logger.hide();
          break;
        default:
      }
    });
  }

  generateReport() {
    const { json } = this.props;

    const dom = new DOM(document);
    const renderer = new ReportRenderer(dom);

    const container = document.querySelector("main.react-lighthouse-viewer");

    renderer.renderReport(json, container);

    // Hook in JS features and page-level event listeners after the report
    // is in the document.
    const features = new ReportUIFeatures(dom);
    features.initFeatures(json);
  }

  render() {
    return (
      <div className="lh-root lh-vars">
        <div>
          <Template />
        </div>
        <Header />
        <main className="react-lighthouse-viewer">
          {/* report populated here */}
        </main>
        <div id="lh-log" />
      </div>
    );
  }
}

export default ReportViewer;