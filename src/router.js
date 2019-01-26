import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [{
    path: '*',
    redirect: '/index'
  },
  {
    name: 'index',
    component: () =>
      import ('./view/index'),
    meta: {
      title: '首页'
    }
  },
  {
    name: 'point',
    component: () =>
      import ('./view/point'),
    meta: {
      title: '积分明细'
    }
  },
  {
    name: 'cards',
    component: () =>
      import ('./view/cards'),
    meta: {
      title: '卡券包'
    }
  },
  {
    name: 'record',
    component: () =>
      import ('./view/record'),
    meta: {
      title: '消费记录'
    }
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};