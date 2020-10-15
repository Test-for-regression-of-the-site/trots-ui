
'use strict';

function prepareLabData(LHResult, document) {
  const lhResult =
    typeof LHResult === 'string'
      ? /** @type {LH.Result} */ (JSON.parse(LHResult))
      : LHResult;

  const dom = new DOM(document);

  // Assume fresh styles needed on every call, so mark all template styles as unused.
  dom.resetTemplates();

  const reportLHR = Util.prepareReportResult(lhResult);
  const i18n = new I18n(reportLHR.configSettings.locale, {
    // Set missing renderer strings to default (english) values.
    ...Util.UIStrings,
    ...reportLHR.i18n.rendererFormattedStrings,
  });
  Util.i18n = i18n;

  const perfCategory = reportLHR.categories.performance;
  if (!perfCategory)
    throw new Error(`No performance category. Can't make lab data section`);
  if (!reportLHR.categoryGroups) throw new Error(`No category groups found.`);

  // Use custom title and description.
  reportLHR.categoryGroups.metrics.title = Util.i18n.strings.labDataTitle;
  reportLHR.categoryGroups.metrics.description =
    Util.i18n.strings.lsPerformanceCategoryDescription;

  const perfRenderer = new PerformanceCategoryRenderer(
    dom,
    new DetailsRenderer(dom)
  );
  // PSI environment string will ensure the categoryHeader and permalink elements are excluded
  const perfCategoryEl = perfRenderer.render(
    perfCategory,
    reportLHR.categoryGroups,
    'PSI'
  );

  const scoreGaugeEl = dom.find('.lh-score__gauge', perfCategoryEl);
  scoreGaugeEl.remove();
  const scoreGaugeWrapperEl = dom.find('.lh-gauge__wrapper', scoreGaugeEl);
  scoreGaugeWrapperEl.classList.add('lh-gauge__wrapper--huge');
  // Remove navigation link on gauge
  scoreGaugeWrapperEl.removeAttribute('href');

  const finalScreenshotDataUri = _getFinalScreenshot(perfCategory);

  const clonedScoreTemplate = dom.cloneTemplate(
    '#tmpl-lh-scorescale',
    dom.document()
  );
  const scoreScaleEl = dom.find('.lh-scorescale', clonedScoreTemplate);

  return { scoreGaugeEl, perfCategoryEl, finalScreenshotDataUri, scoreScaleEl };
}

/**
 * @param {LH.ReportResult.Category} perfCategory
 * @return {null|string}
 */
function _getFinalScreenshot(perfCategory) {
  const auditRef = perfCategory.auditRefs.find(
    (audit) => audit.id === 'final-screenshot'
  );
  if (
    !auditRef ||
    !auditRef.result ||
    auditRef.result.scoreDisplayMode === 'error'
  )
    return null;
  return /** @type {LH.Audit.Details.Screenshot} */ (auditRef.result.details)
    .data;
}

export default prepareLabData;