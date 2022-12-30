import config from "../config";

//pages
import SamplePortfolio from "../pages/SamplePortfolio";
import CreatePortfolio from "../pages/CreatePortfolio";
import sample1 from "../pages/SamplePortfolio/Sample1";
import sample2 from "../pages/SamplePortfolio/Sample2";
import sample3 from "../pages/SamplePortfolio/Sample3";
import sample4 from "../pages/SamplePortfolio/Sample4";
import Background from "../pages/Background";

import Home from "../pages/Home";
import SampleLayout from "../components/Layout/SampleLayout";

// layout

const publicRoutes = [
    { path: config.routes.home, component: Home },
    {
        path: config.routes.CreatePortfolio,
        component: CreatePortfolio,
        layout: CreatePortfolio,
    },
    {
        path: config.routes.SamplePortfolio,
        component: SamplePortfolio,
        layout: SampleLayout,
    },
    { path: config.routes.sample1, component: sample1, layout: SampleLayout },
    { path: config.routes.Background, component: Background},
    { path: config.routes.sample2, component: sample2, layout: SampleLayout },
    { path: config.routes.sample3, component: sample3, layout: SampleLayout },
    { path: config.routes.sample4, component: sample4, layout: SampleLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
