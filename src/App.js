import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
const App = () => {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            <div className="flex-grow overflow-y-auto">
                <Body />
            </div>
            <Footer />
        </div>
    );
};


const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<App />);
