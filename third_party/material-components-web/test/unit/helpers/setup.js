goog.module('mdc.test.unit.helpers.setup');
goog.module.declareLegacyNamespace();
// Returns a foundation configured to use a mock object with the same api as a default adapter,
// as well as that adapter itself.
/**
 * @param {*} FoundationClass
 * @param {*=} adapter
 * @suppress {checkTypes}
 */
function setupFoundationTest(FoundationClass, adapter) {
  const mockAdapter = td.object(adapter||FoundationClass.defaultAdapter);
  const foundation = new FoundationClass(mockAdapter);
  return {mockAdapter, foundation};
}

exports = {
 setupFoundationTest,
};