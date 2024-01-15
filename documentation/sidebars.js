module.exports = {
    someSidebar: [
      { 
        type: 'category',
        label: 'Getting Started',
        items: [
          'quick-start'
        ]
      },
      "refine",
      {
        type: 'category',
        label: "Next.js",
        items: [
          { "UI Frameworks": ['nextjs/tailwind111', 'nextjs/bootstrap111', 'nextjs/chakra-ui111', 'nextjs/antd11'] },
          { "CSS Preprocessors": ['nextjs/css', 'nextjs/scss', 'nextjs/styled-components'] },
          { "Features": ['nextjs/fetch', 'nextjs/axios', 'nextjs/storybook', 'nextjs/svgr', 'nextjs/env', 'nextjs/reverse-proxy', 'nextjs/bundle-analyzer', 'nextjs/apollo-graphql', 'nextjs/graphql-request'] },
          { "Hooks": ['nextjs/hooks/swr', 'nextjs/hooks/react-query', "nextjs/hooks/react-use"] },
          { "State Management": ['nextjs/state-management/redux-toolkit', 'nextjs/state-management/recoil', 'nextjs/state-management/mobx', 'nextjs/state-management/zustand'] },
          { "i18n": ['nextjs/i18n/next-translate', 'nextjs/i18n/next-i18next'] },
          { "Linting Tools": ['nextjs/linter/eslint', 'nextjs/linter/prettier', 'nextjs/linter/lint-staged'] },
          { "Testing": ['nextjs/testing/jest', 'nextjs/testing/testing-library', 'nextjs/testing/enzyme'] },
          { "E2E Testing": ['nextjs/e2e-testing/cypress', 'nextjs/e2e-testing/wdio'] },
          { "Deployment": ["nextjs/docker"] },
          { "Continuous integration": ["nextjs/ci/github-actions", "nextjs/ci/travis", "nextjs/ci/azure-pipelines"] }
        ]
      },
      {
        type: 'category',
        label: "React",
        items: [
          { "UI Frameworks": ['react/tailwind111', 'react/bootstrap11', 'react/chakra-ui11', 'react/antd11'] },
          { "CSS Preprocessors": ['react/css1111', 'react/scss11', 'react/styled-components11'] },
          { "Features": ['react/fetch11', 'react/axios11', 'react/storybook', 'react/svgr', 'react/env', 'react/reverse-proxy', 'react/bundle-analyzer', 'react/apollo-graphql', 'react/graphql-request'] },
          { "Hooks": ['react/hooks/swr', 'react/hooks/react-query', "react/hooks/react-use"] },
          { "State Management": ['react/state-management/redux-toolkit', 'react/state-management/recoil', 'react/state-management/mobx', 'react/state-management/zustand'] },
          { "i18n": ['react/i18n/react-i18next'] },
          { "Linting Tools": ['react/linter/eslint', 'react/linter/lint-staged'] },
          { "Testing": ['react/testing/jest', 'react/testing/testing-library'] },
          { "E2E Testing": ['react/e2e-testing/cypress', 'react/e2e-testing/wdio'] },
          { "Deployment": ["react/docker"] },
          { "Continuous integration": ["react/ci/github-actions", "react/ci/travis"] }
        ]
      },
      {
        type: 'category',
        label: "Development",
        items: [
          'development/how-it-works',
          'development/creating-a-plugin',
          'development/references',
        ]
      }
    ]
};
