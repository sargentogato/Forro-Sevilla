const cookies = {
  banner: {
    text: 'In compliance with the relevant regulations, we inform you that this notice is to indicate our cookie policy. As we do not use third-party cookies, we only use essential cookies to save this preference. By continuing to use the site, we consider that you accept their use.',
    accept: 'Accept',
    moreInfo: 'More info'
  },
  policy: {
    title: 'Cookie Policy',
    content: 'This website uses only its own essential cookies to ensure proper functionality (such as remembering your preference regarding this notice). We do not use third-party cookies for tracking, advertising, or analytics. By continuing to use the site, we consider that you accept their use.',
    howToDisableTitle: 'How to manage or disable cookies',
    howToDisableContent: 'You can allow, block or delete the cookies installed on your equipment by configuring the options of the browser installed on your computer. Below we provide links where you can find information on how to configure cookie management in the main browsers:',
    browserLinks: {
      chrome: 'Instructions for Google Chrome',
      firefox: 'Instructions for Mozilla Firefox',
      safari: 'Instructions for Apple Safari',
      edge: 'Instructions for Microsoft Edge'
    }
  },
  privacy: {
    title: 'Privacy Policy',
    content: 'We deeply respect your privacy. Our website does not collect personal data through third-party cookies or tracking tools. Any information you choose to provide us through other means (such as contact forms) will be treated with strict confidentiality and used exclusively for the purposes for which it was provided, in accordance with current data protection legislation.'
  }
} as const;

export default cookies;
