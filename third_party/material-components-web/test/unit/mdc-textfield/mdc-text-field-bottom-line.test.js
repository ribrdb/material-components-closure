const {
  assert,
} = chai;

import bottomline from 'goog:mdc.textfield.bottomline';
const MDCTextFieldBottomLine = bottomline.MDCTextFieldBottomLine;
const MDCTextFieldBottomLineFoundation = bottomline.MDCTextFieldBottomLineFoundation;

const getFixture = () => bel`
  <div class="mdc-textfield__bottom-line"></div>
`;

suite('MDCTextFieldBottomLine');

test('attachTo returns an MDCTextFieldBottomLine instance', () => {
  assert.isOk(MDCTextFieldBottomLine.attachTo(getFixture()) instanceof MDCTextFieldBottomLine);
});

function setupTest() {
  const root = getFixture();
  const component = new MDCTextFieldBottomLine(root);
  return {root, component};
}

test('#adapter.addClass adds a class to the element', () => {
  const {root, component} = setupTest();
  component.getDefaultFoundation().adapter_.addClass('foo');
  assert.isTrue(root.classList.contains('foo'));
});

test('#adapter.removeClass removes a class from the element', () => {
  const {root, component} = setupTest();

  root.classList.add('foo');
  component.getDefaultFoundation().adapter_.removeClass('foo');
  assert.isFalse(root.classList.contains('foo'));
});

test('#adapter.setAttr adds a given attribute to the element', () => {
  const {root, component} = setupTest();
  component.getDefaultFoundation().adapter_.setAttr('aria-label', 'foo');
  assert.equal(root.getAttribute('aria-label'), 'foo');
});

test('#adapter.registerEventHandler adds event listener for a given event to the element', () => {
  const {root, component} = setupTest();
  const handler = td.func('transitionend handler');
  component.getDefaultFoundation().adapter_.registerEventHandler('transitionend', handler);
  root.dispatchEvent(new Event('transitionend'));

  td.verify(handler(td.matchers.anything()));
});

test('#adapter.deregisterEventHandler removes event listener for a given event from the element', () => {
  const {root, component} = setupTest();
  const handler = td.func('transitionend handler');

  root.addEventListener('transitionend', handler);
  component.getDefaultFoundation().adapter_.deregisterEventHandler('transitionend', handler);
  root.dispatchEvent(new Event('transitionend'));

  td.verify(handler(td.matchers.anything()), {times: 0});
});

test('#adapter.notifyAnimationEnd emits ' +
  `${MDCTextFieldBottomLineFoundation.strings.ANIMATION_END_EVENT}`, () => {
  const {component} = setupTest();
  const handler = td.func('leadingHandler');

  component.listen(
    MDCTextFieldBottomLineFoundation.strings.ANIMATION_END_EVENT, handler);
  component.getDefaultFoundation().adapter_.notifyAnimationEnd();

  td.verify(handler(td.matchers.anything()));
});