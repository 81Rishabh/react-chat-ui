import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
// import sass from 'sass';
import { BrowserRouter as Router , Routes, Route, Navigate} from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
      <Routes>
        <Route path='/*' element={<App />} />  
        <Route path="/" element={<Navigate to="/chat" replace/>} exact="true" />
      </Routes>
    </Router>
);
