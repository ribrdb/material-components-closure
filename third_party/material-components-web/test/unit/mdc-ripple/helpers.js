goog.module('mdc.test.unit.ripple.helpers');
goog.module.declareLegacyNamespace();
const {
  setupFoundationTest,
} = goog.require('mdc.test.unit.helpers.setup');

const {
  createMockRaf,
} = goog.require('mdc.test.unit.helpers.raf');

const {
  captureHandlers,
} = goog.require('mdc.test.unit.helpers.foundation');

const MDCRippleFoundation = goog.require('mdc.ripple.foundation');

function setupTest(isCssVarsSupported = true) {
  const {foundation, mockAdapter} = setupFoundationTest(MDCRippleFoundation);
  td.when(mockAdapter.browserSupportsCssVars()).thenReturn(isCssVarsSupported);
  td.when(mockAdapter.computeBoundingRect()).thenReturn({width: 0, height: 0, left: 0, top: 0});
  td.when(mockAdapter.getWindowPageOffset()).thenReturn({x: 0, y: 0});
  return {foundation, adapter: mockAdapter};
}

function testFoundation(desc, isCssVarsSupported, runTests) {
  if (arguments.length === 2) {
    runTests = isCssVarsSupported;
    isCssVarsSupported = true;
  }

  test(desc, () => {
    const {adapter, foundation} = setupTest(isCssVarsSupported);
    const mockRaf = createMockRaf();
    runTests({adapter, foundation, mockRaf});
    mockRaf.restore();
  });
}

function captureRippleHandlers(adapter) {
  const handlers = captureHandlers(adapter.registerInteractionHandler);
  return handlers;
}

// Creates a mock window object with all members necessary to test util.supportsCssVariables
// in cases where window.CSS.supports indicates the feature is supported.
function createMockWindowForCssVariables() {
  const getComputedStyle = td.func('window.getComputedStyle');
  const remove = () => mockWindow.appendedNodes--;
  const mockDoc = {
    body: {
      appendChild: () => mockWindow.appendedNodes++,
    },
    createElement: td.func('document.createElement'),
  };

  td.when(getComputedStyle(td.matchers.anything())).thenReturn({
    borderTopStyle: 'none',
  });

  td.when(mockDoc.createElement('div')).thenReturn({
    remove: remove,
  });

  const mockWindow = {
    // Expose count of nodes that have been appended and not removed, to be verified in tests
    appendedNodes: 0,
    CSS: {
      supports: td.func('.supports'),
    },
    document: mockDoc,
    getComputedStyle: getComputedStyle,
  };
  return mockWindow;
}

exports = {
  setupTest,
  testFoundation,
  captureRippleHandlers,
  createMockWindowForCssVariables,
};