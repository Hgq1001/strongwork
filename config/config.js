import pageRoutes from './router_config';
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: '仕壮沃科（重庆）电子商务有限公司',
      dll: true,
    }],
  ],
  routes: pageRoutes,
  disableRedirectHoist: true,
  // proxy: {
  //   '/myapi': {
  //     'target': 'http://172.18.0.214:8181/api/gridedit/',//张屹林
  //     'changeOrigin': true,
  //     'pathRewrite': { '^/myapi': '' },
  //   },
  // },
};
