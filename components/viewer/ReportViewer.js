import React from 'react';
import DOM from './render/dom';
import ReportRenderer from './render/report-renderer';
import ReportUIFeatures from './render/report-ui-features';
import __html from './Template.js';
import Header from '../Header/Header';

export const Template = () => {
  return <div dangerouslySetInnerHTML={{ __html: __html }} />;
};

export default function ReportViewer({
  id = 'react-lighthouse-viewer',
  json = {},
}) {
  React.useEffect(() => {
    if (Object.keys(json).length === 0) return;
    if (json) {
      generateReport();
    }
  }, [json]);

  const generateReport = () => {
    const dom = new DOM(document);
    const renderer = new ReportRenderer(dom);

    const container = document.querySelector(`#${id}`);

    renderer.renderReport(json, container);

    // Hook in JS features and page-level event listeners after the report
    // is in the document.
    const features = new ReportUIFeatures(dom);
    features.initFeatures(json);
  };

  return (
	<>
		<Header />
		<div className="lh-root lh-vars">
			<Template />
			<div id={id} />
		</div>
	</>
  );
}