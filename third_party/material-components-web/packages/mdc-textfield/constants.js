goog.module('mdc.textfield.constants');
goog.module.declareLegacyNamespace();
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
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

/** @enum {string} */
const strings = {
  ARIA_CONTROLS: 'aria-controls',
  INPUT_SELECTOR: '.mdc-text-field__input',
  LABEL_SELECTOR: '.mdc-text-field__label',
  ICON_SELECTOR: '.mdc-text-field__icon',
  BOTTOM_LINE_SELECTOR: '.mdc-text-field__bottom-line',
};

/** @enum {string} */
const cssClasses = {
  ROOT: goog.getCssName('mdc-text-field'),
  UPGRADED: goog.getCssName('mdc-text-field--upgraded'),
  DISABLED: goog.getCssName('mdc-text-field--disabled'),
  FOCUSED: goog.getCssName('mdc-text-field--focused'),
  INVALID: goog.getCssName('mdc-text-field--invalid'),
  BOX: goog.getCssName('mdc-text-field--box'),
};

exports = {
  cssClasses,
  strings,
};