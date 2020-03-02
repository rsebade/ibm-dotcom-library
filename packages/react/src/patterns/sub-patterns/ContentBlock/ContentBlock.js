/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  settings as ddsSettings,
  markdownToHtml,
} from '@carbon/ibmdotcom-utilities';
import { CTA } from '../../../components/CTA';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { settings } from 'carbon-components';

const { stablePrefix } = ddsSettings;
const { prefix } = settings;

/**
 * ContentBlock Sub-pattern
 *
 * @param {object} props props object
 * @param {string} props.heading Heading text
 * @param {string} props.copy copy text
 * @param {*} props.children JSX Components
 * @param {string} props.customClassName allows user to pass in custom class name
 * @param {*} props.cta CTA props object
 * @returns {*} JSX ContentArrayBlock component
 */
const ContentBlock = ({ heading, copy, children, customClassName, cta }) => {
  return (
    <div
      data-autoid={`${stablePrefix}--content-block`}
      className={cx(`${prefix}--content-block`, customClassName)}>
      {heading && (
        <h2
          data-autoid={`${stablePrefix}--content-block__title`}
          className={`${prefix}--content-block__title`}>
          {heading}
        </h2>
      )}
      {copy && (
        <div
          className={`${prefix}--content-block__intro`}
          dangerouslySetInnerHTML={{ __html: markdownToHtml(copy) }}
        />
      )}
      <div
        data-autoid={`${stablePrefix}--content-block__children`}
        className={`${prefix}--content-block__children`}>
        {children}
      </div>
      {cta && (
        <div
          data-autoid={`${stablePrefix}--content-block__cta`}
          className={cx(`${prefix}--content-block__cta`)}>
          {cta && <CTA style={cta.style} type={cta.type} {...cta} />}
        </div>
      )}
    </div>
  );
};

ContentBlock.propTypes = {
  heading: PropTypes.string,
  copy: PropTypes.string,
  children: PropTypes.element,
  cta: PropTypes.object,
  customClassName: PropTypes.string,
};

export default ContentBlock;
