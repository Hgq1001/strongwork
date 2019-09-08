export default [
  {
    path: '/',
    component: '../layouts',
    routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: './Home/Home' },
      { path: '/aboutUs', component: './AboutUs/AboutUs' },
      { path: '/productService', component: './ProductService/ProductService' },
      { path: '/partner', component: './Partner/Partner' },
      { path: '/contactUs', component: './ContactUs/ContactUs' },
    ],
  },
];
