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
    component: ComponentCreator('/', '019'),
    routes: [
      {
        path: '/about',
        component: ComponentCreator('/about', '0db'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/react-with-native',
        component: ComponentCreator('/react-with-native', '8dd'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/react-with-native-form',
        component: ComponentCreator('/react-with-native-form', 'e0b'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/react-with-native-modal',
        component: ComponentCreator('/react-with-native-modal', '00e'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/react-with-native-notification',
        component: ComponentCreator('/react-with-native-notification', 'f51'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/react-with-native-router',
        component: ComponentCreator('/react-with-native-router', 'f54'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/react-with-native-select',
        component: ComponentCreator('/react-with-native-select', '6e2'),
        exact: true,
        sidebar: "docSidebar"
      },
      {
        path: '/react-with-native-store',
        component: ComponentCreator('/react-with-native-store', '397'),
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
