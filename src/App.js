import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { Fragment } from "react";
import "./App.css";
import "./index.css";
// import Sample1 from "./pages/SamplePortfolio/Sample1";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ_Gd_ZtFwYwPsVxIMimvYNIdny3Fx53w",
  authDomain: "tsimple-384dd.firebaseapp.com",
  projectId: "tsimple-384dd",
  storageBucket: "tsimple-384dd.appspot.com",
  messagingSenderId: "464046716285",
  appId: "1:464046716285:web:be9d507a1cb60dd2dfc814",
  measurementId: "G-E0LXX1DWFC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


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
