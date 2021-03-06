/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const {
  assert,
} = chai;

import {verifyDefaultAdapter} from 'goog:mdc.test.unit.helpers.foundation';
import {setupFoundationTest} from 'goog:mdc.test.unit.helpers.setup';
import MDCTextFieldHelperTextFoundation from 'goog:mdc.textfield.helpertext.foundation';

const {cssClasses} = MDCTextFieldHelperTextFoundation;

suite('MDCTextFieldHelperTextFoundation');

test('exports cssClasses', () => {
  assert.isOk(MDCTextFieldHelperTextFoundation.cssClasses);
});

test('exports strings', () => {
  assert.isOk(MDCTextFieldHelperTextFoundation.strings);
});

test('defaultAdapter returns a complete adapter implementation', () => {
  verifyDefaultAdapter(MDCTextFieldHelperTextFoundation, [
    'addClass', 'removeClass', 'hasClass', 'setAttr', 'removeAttr', 'setContent',
  ]);
});

const setupTest = () => setupFoundationTest(MDCTextFieldHelperTextFoundation);

test('#setContent sets the content of the helper text element', () => {
  const {foundation, mockAdapter} = setupTest();
  foundation.setContent('foo');
  td.verify(mockAdapter.setContent('foo'));
});

test('#showToScreenReader removes aria-hidden from helperText', () => {
  const {foundation, mockAdapter} = setupTest();
  foundation.showToScreenReader();
  td.verify(mockAdapter.removeAttr('aria-hidden'));
});

test('#setValidity adds role="alert" to helper text if input is invalid and helper text is being used ' +
     'as a validation message', () => {
  const {foundation, mockAdapter} = setupTest();
  const inputIsValid = false;
  td.when(mockAdapter.hasClass(cssClasses.HELPER_TEXT_PERSISTENT)).thenReturn(false);
  td.when(mockAdapter.hasClass(cssClasses.HELPER_TEXT_VALIDATION_MSG)).thenReturn(true);
  foundation.setValidity(inputIsValid);
  td.verify(mockAdapter.setAttr('role', 'alert'));
});

test('#setValidity removes role="alert" if input is valid', () => {
  const {foundation, mockAdapter} = setupTest();
  const inputIsValid = true;
  td.when(mockAdapter.hasClass(cssClasses.HELPER_TEXT_PERSISTENT)).thenReturn(false);
  td.when(mockAdapter.hasClass(cssClasses.HELPER_TEXT_VALIDATION_MSG)).thenReturn(true);
  foundation.setValidity(inputIsValid);
  td.verify(mockAdapter.removeAttr('role'));
});

test('#setValidity sets aria-hidden="true" on helper text by default', () => {
  const {foundation, mockAdapter} = setupTest();
  const inputIsValid = true;
  td.when(mockAdapter.hasClass(cssClasses.HELPER_TEXT_PERSISTENT)).thenReturn(false);
  td.when(mockAdapter.hasClass(cssClasses.HELPER_TEXT_VALIDATION_MSG)).thenReturn(false);
  foundation.setValidity(inputIsValid);
  td.verify(mockAdapter.setAttr('aria-hidden', 'true'));
});

test('#setValidity does not set aria-hidden on helper text when it is persistent', () => {
  const {foundation, mockAdapter} = setupTest();
  const inputIsValid = true;
  td.when(mockAdapter.hasClass(cssClasses.HELPER_TEXT_PERSISTENT)).thenReturn(true);
  td.when(mockAdapter.hasClass(cssClasses.HELPER_TEXT_VALIDATION_MSG)).thenReturn(false);
  foundation.setValidity(inputIsValid);
  td.verify(mockAdapter.setAttr('aria-hidden', 'true'), {times: 0});
});

test('#setValidity does not set aria-hidden if input is invalid and helper text is validation message', () => {
  const {foundation, mockAdapter} = setupTest();
  const inputIsValid = false;
  td.when(mockAdapter.hasClass(cssClasses.HELPER_TEXT_PERSISTENT)).thenReturn(false);
  td.when(mockAdapter.hasClass(cssClasses.HELPER_TEXT_VALIDATION_MSG)).thenReturn(true);
  foundation.setValidity(inputIsValid);
  td.verify(mockAdapter.setAttr('aria-hidden', 'true'), {times: 0});
});

test('#setValidity sets aria-hidden=true if input is valid and helper text is validation message', () => {
  const {foundation, mockAdapter} = setupTest();
  const inputIsValid = true;
  td.when(mockAdapter.hasClass(cssClasses.HELPER_TEXT_PERSISTENT)).thenReturn(false);
  td.when(mockAdapter.hasClass(cssClasses.HELPER_TEXT_VALIDATION_MSG)).thenReturn(true);
  foundation.setValidity(inputIsValid);
  td.verify(mockAdapter.setAttr('aria-hidden', 'true'));
});