import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import DefaultLayout from "./components/Layout/DefaultLayout";
import { Fragment } from "react";
import "./App.css";
import "./index.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// import Sample1 from "./pages/SamplePortfolio/Sample1";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMhMAyVDx7c5seL2q9oS0onNNpAuYNwCE",
  authDomain: "web-portfolio-87d34.firebaseapp.com",
  projectId: "web-portfolio-87d34",
  storageBucket: "web-portfolio-87d34.appspot.com",
  messagingSenderId: "133042693366",
  appId: "1:133042693366:web:10c506dc2f93b1be6478d7",
  measurementId: "G-FG48QPHCH3"
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
