goog.module('mdc.textfield.adapter');
goog.module.declareLegacyNamespace();
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
const MDCTextFieldBottomLineFoundation = goog.require('mdc.textfield.bottomline.foundation');

const MDCTextFieldHelperTextFoundation = goog.require('mdc.textfield.helpertext.foundation');
const MDCTextFieldIconFoundation = goog.require('mdc.textfield.icon.foundation');
const MDCTextFieldLabelFoundation = goog.require('mdc.textfield.label.foundation');

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * @typedef {{
 *   value: string,
 *   disabled: boolean,
 *   badInput: boolean,
 *   checkValidity: (function(): boolean)
 * }}
 */
let NativeInputType;

/**
 * @typedef {{
 *   bottomLine: (!MDCTextFieldBottomLineFoundation|undefined),
 *   helperText: (!MDCTextFieldHelperTextFoundation|undefined),
 *   icon: (!MDCTextFieldIconFoundation|undefined),
 *   label: (!MDCTextFieldLabelFoundation|undefined)
 * }}
 */
let FoundationMapType;

/**
 * Adapter for MDC Text Field.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Text Field into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
class MDCTextFieldAdapter {
  /**
   * Adds a class to the root Element.
   * @param {string} className
   */
  addClass(className) {}

  /**
   * Removes a class from the root Element.
   * @param {string} className
   */
  removeClass(className) {}

  /**
   * Registers an event handler on the root element for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */
  registerTextFieldInteractionHandler(type, handler) {}

  /**
   * Deregisters an event handler on the root element for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */
  deregisterTextFieldInteractionHandler(type, handler) {}

  /**
   * Registers an event listener on the native input element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  registerInputInteractionHandler(evtType, handler) {}

  /**
   * Deregisters an event listener on the native input element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  deregisterInputInteractionHandler(evtType, handler) {}

  /**
   * Registers an event listener on the bottom line element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  registerBottomLineEventHandler(evtType, handler) {}

  /**
   * Deregisters an event listener on the bottom line element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */
  deregisterBottomLineEventHandler(evtType, handler) {}

  /**
   * Returns an object representing the native text input element, with a
   * similar API shape. The object returned should include the value, disabled
   * and badInput properties, as well as the checkValidity() function. We never
   * alter the value within our code, however we do update the disabled
   * property, so if you choose to duck-type the return value for this method
   * in your implementation it's important to keep this in mind. Also note that
   * this method can return null, which the foundation will handle gracefully.
   * @return {?Element|?NativeInputType}
   */
  getNativeInput() {}
}

exports = {
 MDCTextFieldAdapter,
 NativeInputType,
 FoundationMapType,
};