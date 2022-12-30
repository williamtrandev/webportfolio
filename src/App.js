import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { Fragment } from "react";
import "./App.css";
import "./index.css";
// import Sample1 from "./pages/SamplePortfolio/Sample1";
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* <Route path="/" element={<SampleCV />} />
                        <Route path="/CreateCV" element={<CreateCV />} />
                        <Route path="/CVCreated" element={<CVCreated />} /> */}
                    {publicRoutes.map((route, index) => {
                        // const Layout = (route.layout = DefaultLayout);
                        const Page = route.component;
                        let Layout = Fragment;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
        // <div className="App">
        //     <Sample1></Sample1>
        // </div>
    );
}

export default App;
