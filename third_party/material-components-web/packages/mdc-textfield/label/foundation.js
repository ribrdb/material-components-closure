goog.module('mdc.textfield.label.foundation');
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
const MDCFoundation = goog.require('mdc.base.foundation');

const MDCTextFieldLabelAdapter = goog.require('mdc.textfield.label.adapter');

const {
  cssClasses,
} = goog.require('mdc.textfield.label.constants');


/**
 * @extends {MDCFoundation<!MDCTextFieldLabelAdapter>}
 * @final
 */
class MDCTextFieldLabelFoundation extends MDCFoundation {
  /** @return enum {string} */
  static get cssClasses() {
    return cssClasses;
  }

  /**
   * {@see MDCTextFieldLabelAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCTextFieldLabelAdapter}
   */
  static get defaultAdapter() {
    return /** @type {!MDCTextFieldLabelAdapter} */ ({
      addClass: () => {},
      removeClass: () => {},
    });
  }

  /**
   * @param {!MDCTextFieldLabelAdapter=} adapter
   */
  constructor(adapter = /** @type {!MDCTextFieldLabelAdapter} */ ({})) {
    super(Object.assign(MDCTextFieldLabelFoundation.defaultAdapter, adapter));
  }

  /** Makes the label float above the text field. */
  floatAbove() {
    this.adapter_.addClass(cssClasses.LABEL_FLOAT_ABOVE);
    this.adapter_.removeClass(cssClasses.LABEL_SHAKE);
  }

  /**
   * Deactivates the label's focus state based on whether the text
   * field input is empty and passes validity checks.
   * @param {boolean} shouldRemoveLabelFloat
   */
  deactivateFocus(shouldRemoveLabelFloat) {
    this.adapter_.removeClass(cssClasses.LABEL_SHAKE);

    if (shouldRemoveLabelFloat) {
      this.adapter_.removeClass(cssClasses.LABEL_FLOAT_ABOVE);
    }
  }

  /**
   * Updates the label's valid state based on the supplied validity.
   * @param {boolean} isValid
   */
  setValidity(isValid) {
    if (!isValid) {
      this.adapter_.addClass(cssClasses.LABEL_SHAKE);
    }
  }
}

exports = MDCTextFieldLabelFoundation;