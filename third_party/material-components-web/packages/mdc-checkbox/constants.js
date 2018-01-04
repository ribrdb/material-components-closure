goog.module('mdc.checkbox.constants');
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

/** @const {string} */
const ROOT = 'mdc-checkbox';

/** @enum {string} */
const cssClasses = {
  UPGRADED: goog.getCssName('mdc-checkbox--upgraded'),
  CHECKED: goog.getCssName('mdc-checkbox--checked'),
  INDETERMINATE: goog.getCssName('mdc-checkbox--indeterminate'),
  DISABLED: goog.getCssName('mdc-checkbox--disabled'),
  ANIM_UNCHECKED_CHECKED: goog.getCssName('mdc-checkbox--anim-unchecked-checked'),
  ANIM_UNCHECKED_INDETERMINATE: goog.getCssName('mdc-checkbox--anim-unchecked-indeterminate'),
  ANIM_CHECKED_UNCHECKED: goog.getCssName('mdc-checkbox--anim-checked-unchecked'),
  ANIM_CHECKED_INDETERMINATE: goog.getCssName('mdc-checkbox--anim-checked-indeterminate'),
  ANIM_INDETERMINATE_CHECKED: goog.getCssName('mdc-checkbox--anim-indeterminate-checked'),
  ANIM_INDETERMINATE_UNCHECKED: goog.getCssName('mdc-checkbox--anim-indeterminate-unchecked'),
};

/** @enum {string} */
const strings = {
  NATIVE_CONTROL_SELECTOR: `.${ROOT}__native-control`,
  TRANSITION_STATE_INIT: 'init',
  TRANSITION_STATE_CHECKED: 'checked',
  TRANSITION_STATE_UNCHECKED: 'unchecked',
  TRANSITION_STATE_INDETERMINATE: 'indeterminate',
};

/** @enum {number} */
const numbers = {
  ANIM_END_LATCH_MS: 100,
};

exports = {
  cssClasses,
  strings,
  numbers,
};