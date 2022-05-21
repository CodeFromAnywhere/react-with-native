import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '856'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '011'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '8ac'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '81e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '567'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'f2a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'ca1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '44d'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '9ac'),
    routes: [
      {
        path: '/about',
        component: ComponentCreator('/about', '0db'),
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
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
