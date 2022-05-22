import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', '44d'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '259'),
    routes: [
      {
        path: '/about',
        component: ComponentCreator('/about', '62f'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/demo',
        component: ComponentCreator('/demo', 'add'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/react-with-native/',
        component: ComponentCreator('/react-with-native/', 'e77'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/react-with-native/alert',
        component: ComponentCreator('/react-with-native/alert', 'c1a'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/react-with-native/form',
        component: ComponentCreator('/react-with-native/form', 'cfb'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/react-with-native/form-inputs',
        component: ComponentCreator('/react-with-native/form-inputs', '8f6'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/react-with-native/modal',
        component: ComponentCreator('/react-with-native/modal', 'aae'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/react-with-native/notification',
        component: ComponentCreator('/react-with-native/notification', '185'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/react-with-native/router',
        component: ComponentCreator('/react-with-native/router', 'ee2'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/react-with-native/select',
        component: ComponentCreator('/react-with-native/select', '4c1'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/react-with-native/store',
        component: ComponentCreator('/react-with-native/store', '8de'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/react-with-native/unsupported-things',
        component: ComponentCreator('/react-with-native/unsupported-things', 'd0a'),
        exact: true,
        sidebar: "docSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
