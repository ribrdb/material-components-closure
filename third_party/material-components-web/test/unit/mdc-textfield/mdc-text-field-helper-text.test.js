const {
  assert,
} = chai;

import {MDCTextFieldHelperText} from 'goog:mdc.textfield.helpertext';

const getFixture = () => bel`
  <div class="mdc-textfield__helper-text"></div>
`;

suite('MDCTextFieldHelperText');

test('attachTo returns an MDCTextFieldHelperText instance', () => {
  assert.isOk(MDCTextFieldHelperText.attachTo(getFixture()) instanceof MDCTextFieldHelperText);
});

function setupTest() {
  const root = getFixture();
  const component = new MDCTextFieldHelperText(root);
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

test('#adapter.hasClass returns whether or not the element contains a certain class', () => {
  const {root, component} = setupTest();
  root.classList.add('foo');
  assert.isOk(component.getDefaultFoundation().adapter_.hasClass('foo'));
  root.classList.remove('foo');
  assert.isNotOk(component.getDefaultFoundation().adapter_.hasClass('foo'));
});

test('#adapter.setAttr adds a given attribute to the element', () => {
  const {root, component} = setupTest();
  component.getDefaultFoundation().adapter_.setAttr('aria-label', 'foo');
  assert.equal(root.getAttribute('aria-label'), 'foo');
});

test('#adapter.removeAttr removes a given attribute from the element', () => {
  const {root, component} = setupTest();
  root.setAttribute('aria-label', 'foo');
  component.getDefaultFoundation().adapter_.removeAttr('aria-label', 'foo');
  assert.isNotOk(root.hasAttribute('aria-label'));
});

test('#adapter.setContent sets the text content of the element', () => {
  const {root, component} = setupTest();
  component.getDefaultFoundation().adapter_.setContent('foo');
  assert.equal(root.textContent, 'foo');
});