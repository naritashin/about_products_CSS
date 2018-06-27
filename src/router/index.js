import Router from 'vue-router';

import Caution from '@/components/pages/Caution';
import Contents from '@/components/pages/Contents';
import Detail from '@/components/pages/Detail';
import Finally from '@/components/pages/Finally';
import Index from '@/components/pages/Index';
import Nesting from '@/components/pages/Nesting';
import Oneself from '@/components/pages/Oneself';
import Order from '@/components/pages/Order';
import Using from '@/components/pages/Using';

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/oneself',
      component: Oneself
    },
    {
      path: '/contents',
      component: Contents
    },
    {
      path: '/using',
      component: Using
    },
    {
      path: '/cautions',
      component: Caution
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/nesting',
      component: Nesting
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/finally',
      component: Finally
    }
  ]
});
