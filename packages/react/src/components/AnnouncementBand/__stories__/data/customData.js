/**
 * Copyright IBM Corp. 2016, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const customData = {
  active: true,
  blacklist: [
    '/blockchain',
    '/au-en',
    '/au-en/',
    '/nz-en',
    '/nz-en/',
    '/us-en',
    '/us-en/',
    '/nl-en',
    '/be-en',
    '/nl-en/products',
    '/be-en/products',
    '/nl-en/products/software',
    '/be-en/products/software',
    '/se-en/products',
    '/se-en/products/software',
    '/se-en/products/trials',
    '/se-en/services',
    '/se-en/industries',
    '/dk-en/products',
    '/dk-en/products/software',
    '/dk-en/products/trials',
    '/dk-en/services',
    '/dk-en/industries',
    '/uk-en',
    '/uk-en/',
    '/uk-en/products',
    '/uk-en/products/trials',
    '/uk-en/products/software',
    '/uk-en/analytics/journey-to-ai',
    '/uk-en/about',
    '/eg-en/products',
    '/eg-en/products/trials',
    '/eg-en/products/software',
    '/eg-en/products/hardware',
    '/eg-en/products/services',
    '/eg-en/about',
    '/eg-en/industries',
    '/eg-en',
    '/eg-en/',
    '/ae-en/products',
    '/ae-en/products/trials',
    '/ae-en/products/software',
    '/ae-en/products/hardware',
    '/ae-en/products/services',
    '/ae-en/about',
    '/ae-en/industries',
    '/ae-en',
    '/ae-en/',
    '/marketing/mea-businessclub/highlights/',
    '/sa-en/products',
    '/ae-en/products/trials',
    '/ae-en/products/software',
    '/ae-en/products/hardware',
    '/ae-en/products/services',
    '/sa-en/about',
    '/sa-en/industries',
    '/sa-en',
    '/sa-en/',
    '/za-en/products',
    '/za-en/products/trials',
    '/za-en/products/software',
    '/za-en/products/hardware',
    '/za-en/products/services',
    '/za-en/about',
    '/za-en/industries',
    '/za-en',
    '/za-en/',
    '/it-infrastructure',
    '/marketplace/purchase/configuration/en/us/checkout',
    '/nl-en/analytics/journey-to-ai',
    '/hk-en',
    '/cloud/aspera/pricing',
    '/it-infrastructure/solutions/ai',
    '/it-infrastructure/solutions/hybrid-cloud',
    '/it-infrastructure/storage/hybrid-cloud-storage',
    '/it-infrastructure/storage/ai-infrastructure',
    '/it-infrastructure/storage/tape',
    '/it-infrastructure/storage/flash',
    '/it-infrastructure/power/accelerated-computing',
    '/it-infrastructure/power/enterprise',
    '/it-infrastructure/power/scale-out',
    '/it-infrastructure/power/enterprise-ai',
    '/it-infrastructure/power/power9',
    '/it-infrastructure/power/os/ibm-i',
    '/it-infrastructure/power/os/aix',
    '/it-infrastructure/power/os/linux',
    '/it-infrastructure/spectrum-computing',
    '/it-infrastructure/z/news',
    '/it-infrastructure/z/hardware',
    '/it-infrastructure/z/resources/products-a-to-z',
    '/it-infrastructure/z/resources',
    '/it-infrastructure/z/education',
    '/it-infrastructure/z/omegamon',
    '/it-infrastructure/z/resources/banking',
    '/it-infrastructure/z/capabilities/transaction-processing',
    '/it-infrastructure/linuxone',
    '/it-infrastructure/linuxone/enterprise-linux-servers',
    '/it-infrastructure/linuxone/capabilities',
    '/it-infrastructure/linuxone/capabilities/blockchain-technology',
    '/it-infrastructure/linuxone/resources',
    '/it-infrastructure/linuxone/resources/case-studies',
    '/us-en/marketplace/z15',
    '/products/app-discovery-and-delivery-intelligence',
    '/us-en/marketplace/data-privacy-passports',
    '/us-en/marketplace/linuxone-iii',
    '/us-en/marketplace/app-delivery-foundation-on-zsystems',
    '/us-en/marketplace/application-performance-analyzer',
    '/us-en/marketplace/asset-discovery-for-zsystems',
    '/us-en/marketplace/cics-explorer',
    '/us-en/marketplace/cics-transaction-server',
    '/us-en/marketplace/cics-tx-on-cloud',
    '/us-en/marketplace/common-data-provider-for-z-systems',
    '/us-en/marketplace/connect-enterprise-edition',
    '/us-en/marketplace/debug-for-z-systems',
    '/us-en/marketplace/decision-support-for-zos',
    '/us-en/marketplace/developer-for-z-systems',
    '/us-en/marketplace/file-manager-for-zsystems',
    '/us-en/marketplace/host-access-client-package',
    '/us-en/marketplace/host-access-transformation-services',
    '/us-en/marketplace/host-on-demand',
    '/us-en/marketplace/hyper-protect-virtual-servers',
    '/us-en/marketplace/ibm-system-automation-for-z-systems',
    '/us-en/marketplace/ibm-tivoli-netview-for-zos',
    '/us-en/marketplace/ims-enterprise-suite',
    '/us-en/marketplace/ims-transaction-manager-vue/',
    '/us-en/marketplace/omegamon-for-jvm-on-zsystems',
    '/us-en/marketplace/omegamon-for-zos',
    '/us-en/marketplace/operations-analytics-for-z-systems',
    '/us-en/marketplace/operations-insight-suite',
    '/us-en/marketplace/service-management-suite-for-z',
    '/us-en/marketplace/z-app-performance-management-connect',
    '/us-en/marketplace/z-decision-support-for-capacity-planning',
    '/us-en/marketplace/z-integrated-information-processor-ziip/details',
    '/us-en/marketplace/z-open-development',
    '/us-en/marketplace/z-systems-development-test-environment',
    '/us-en/marketplace/ztransaction-processing-facility',
    '/it-infrastructure/servers',
    '/partners/start/',
    '/partners/build/',
    '/partners/sell/',
    '/partners/faq/',
    '/au-en',
    '/au-en/',
    '/nz-en',
    '/nz-en/',
    '/au-en/analytics',
    '/au-en/blockchain',
    '/au-en/cloud',
    '/au-en/supply-chain',
    '/au-en/internet-of-things',
    '/au-en/industries',
    '/au-en/services',
    '/thought-leadership/smart/au/',
    '/nz-en/cloud/api-connect',
    '/industries/resources/think-city',
    '/industries/resources/think-city/',
    '/services/us/resources/it-asset-discovery-demo/',
    '/services/resources/5-innovations-for-IT-support/index.html',
  ],
  blacklistWildcard: [
    '/events/think',
    '/marketplace/purchase',
    '/standards/web',
    '/industries/retail/resources',
    '/industries/industrial/resources',
    '/industries/insurance/resources',
    '/industries/government/resources',
    '/industries/banking-financial-markets/resources',
    '/industries/telecom-media-entertainment',
    '/industries/healthcare/resources',
  ],
  blacklistCountry: [],
  countdownDate: '2020-05-05T00:00:00.000-04:00',
  content: {
    en: {
      ctaLabel: 'Register for Think. Free.',
      ctaLabelLive: 'Register for Think. Free.',
      ctaUrl:
        'https://www.ibm.com/events/think/?cm_sp=DomainBanner-_-CrossIBM-_-Preevent',
      videoUrl:
        'https://1.dam.s81c.com/public/content/dam/worldwide-content/homepage/ul/g/c0/f7/think2021-registration-masthead-banner-bg-new.webm',
      bannerTextLine1: 'days to',
      bannerTextLine2: 'Think 2021',
      bannerTextLive1:
        "<span class='ibm-bold ibm-h4-small counter-text ibm-hidden-small'>The premier hybrid cloud and AI event</span><span class='ibm-bold ibm-h4-small counter-text ibm-hidden-medium ibm-hidden-large ibm-hidden-xlarge'>Think 2021</span>",
      bannerTextLive2: 'May 11 — Americas | May 12 — APAC & EMEA',
    },
  },
};

module.exports = customData;