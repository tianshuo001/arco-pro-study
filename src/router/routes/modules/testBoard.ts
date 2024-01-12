import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const TestBoard: AppRouteRecordRaw = {
  path: '/test-board',
  name: 'test-board',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.test',
    requiresAuth: true,
    icon: 'icon-bg-colors',
    order: 0,
  },
  children: [
    {
      path: 'test',
      name: 'Test',
      component: () => import('@/views/test-board/test/index.vue'),
      meta: {
        locale: 'menu.test.test',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'test2',
      name: 'Test2',
      component: () => import('@/views/test-board/test/test2.vue'),
      meta: {
        locale: 'menu.test.test2',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default TestBoard;
