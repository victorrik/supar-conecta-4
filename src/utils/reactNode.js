//@ts-check
import * as React from 'react';

export const { isValidElement } = React;

/**
 * @param {any} child 
 * @returns {boolean}
 */
export function isFragment(child ) {
  return child && isValidElement(child) && child.type === React.Fragment;
}

/**
 * 
 * @typedef {Record<PropertyKey, any>} AnyObject
 * @typedef {AnyObject | ((originProps: AnyObject) => AnyObject | void)} RenderProps 
 * @param {React.ReactNode} element 
 * @param {React.ReactNode} replacement 
 * @param {RenderProps?} props 
 * @returns {React.ReactNode}
 */

export function replaceElement(
  element,
  replacement,
  props,
)  {
  if (!isValidElement(element)) {
    return replacement;
  }
  return React.cloneElement(
    element,
    typeof props === 'function' ? props(element.props || {}) : props,
  );
}
/**
 * 
 * @param {React.ReactNode} element 
 * @param {RenderProps?} props 
 * @returns {React.ReactElement}
 */
export function cloneElement(element, props ) {
  // @ts-ignore
  return replaceElement(element, element, props);
}