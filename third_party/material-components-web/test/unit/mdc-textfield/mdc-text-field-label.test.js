const {
  assert,
} = chai;

import {MDCTextFieldLabel} from 'goog:mdc.textfield.label';

const getFixture = () => bel`
  <div class="mdc-text-field__label"></div>
`;

suite('MDCTextFieldLabel');

test('attachTo returns an MDCTextFieldLabel instance', () => {
  assert.isOk(MDCTextFieldLabel.attachTo(getFixture()) instanceof MDCTextFieldLabel);
});

function setupTest() {
  const root = getFixture();
  const component = new MDCTextFieldLabel(root);
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