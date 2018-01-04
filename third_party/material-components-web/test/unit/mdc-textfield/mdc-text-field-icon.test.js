const {
  assert,
} = chai;

import {MDCTextFieldIcon, MDCTextFieldIconFoundation} from 'goog:mdc.textfield.icon';

const getFixture = () => bel`
  <div class="mdc-text-field__icon"></div>
`;

suite('MDCTextFieldIcon');

test('attachTo returns an MDCTextFieldIcon instance', () => {
  assert.isOk(MDCTextFieldIcon.attachTo(getFixture()) instanceof MDCTextFieldIcon);
});

function setupTest() {
  const root = getFixture();
  const component = new MDCTextFieldIcon(root);
  return {root, component};
}

test('#adapter.setAttr adds a given attribute to the element', () => {
  const {root, component} = setupTest();
  component.getDefaultFoundation().adapter_.setAttr('aria-label', 'foo');
  assert.equal(root.getAttribute('aria-label'), 'foo');
});

test('#adapter.registerInteractionHandler adds event listener for a given event to the element', () => {
  const {root, component} = setupTest();
  const handler = td.func('keydown handler');
  component.getDefaultFoundation().adapter_.registerInteractionHandler('keydown', handler);
  root.dispatchEvent(new Event('keydown'));

  td.verify(handler(td.matchers.anything()));
});

test('#adapter.deregisterInteractionHandler removes event listener for a given event from the element', () => {
  const {root, component} = setupTest();
  const handler = td.func('keydown handler');

  root.addEventListener('keydown', handler);
  component.getDefaultFoundation().adapter_.deregisterInteractionHandler('keydown', handler);
  root.dispatchEvent(new Event('keydown'));

  td.verify(handler(td.matchers.anything()), {times: 0});
});

test('#adapter.notifyIconAction emits ' + `${MDCTextFieldIconFoundation.strings.ICON_EVENT}`, () => {
  const {component} = setupTest();
  const handler = td.func('handler');

  component.listen(MDCTextFieldIconFoundation.strings.ICON_EVENT, handler);
  component.getDefaultFoundation().adapter_.notifyIconAction();

  td.verify(handler(td.matchers.anything()));
});