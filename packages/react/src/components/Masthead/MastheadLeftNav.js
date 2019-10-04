/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { settings as ddsSettings } from '@carbon/ibmdotcom-utilities';
import { settings } from 'carbon-components';
import {
  HeaderSideNavItems,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
} from 'carbon-components-react';
import { ArrowLeft16 } from '@carbon/icons-react';

const { stablePrefix } = ddsSettings;
const { prefix } = settings;

/**
 * Masthead left nav component
 *
 * @typedef {object} navigation Object containing left navigation elements
 * @param {boolean} isSideNavExpanded Is side nav expanded
 * @returns {*} Masthead left nav component
 */
const MastheadLeftNav = ({ navigation, isSideNavExpanded }) => {
  /**
   * Left side navigation
   *
   * @returns {*} Left side navigation
   */
  const sideNav = navigation.map((link, i) => {
    if (link.hasMenu) {
      return (
        <SideNavMenu aria-label={link.title} title={link.title}>
          <li className={`${prefix}--masthead__side-nav--submemu-back`}>
            <a
              className={`${prefix}--masthead__side-nav--submemu-back-link`}
              href="#">
              <ArrowLeft16 />
              Back
            </a>
          </li>
          {link.menuSections[0].menuItems[
            i
          ].megapanelContent.quickLinks.links.map((item, j) => {
            return (
              <SideNavMenuItem
                href={item.url}
                data-autoid={`${stablePrefix}--masthead__l0-sidenav--subnav-${j}`}>
                {item.title}
              </SideNavMenuItem>
            );
          })}
        </SideNavMenu>
      );
    } else {
      return (
        <SideNavLink
          href={link.url}
          data-autoid={`${stablePrefix}--masthead__l0-sidenav--nav-${i}`}>
          {link.title}
        </SideNavLink>
      );
    }
  });

  return (
    <SideNav
      aria-label="Side navigation"
      expanded={isSideNavExpanded}
      isPersistent={false}>
      <nav data-autoid={`${stablePrefix}--masthead__l0-sidenav`}>
        <SideNavItems>
          <HeaderSideNavItems>{sideNav}</HeaderSideNavItems>
        </SideNavItems>
      </nav>
    </SideNav>
  );
};

/**
 * @property propTypes
 * @description Defined property types for component
 * @type {{isSideNavExpanded: boolean, navigation: []}}
 */
MastheadLeftNav.propTypes = {
  navigation: PropTypes.array,
  isSideNavExpanded: PropTypes.bool,
};

export default MastheadLeftNav;
