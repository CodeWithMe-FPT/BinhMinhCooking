import config from '~/config';

import Home from '~/Pages/Home';

//Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Home },
];

export { publicRoutes };
