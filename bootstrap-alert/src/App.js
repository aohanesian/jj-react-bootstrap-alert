import logo from './logo.svg';
import './App.css';
import React from "react";
import Alert from "./components/Alert";

function App() {
    return (
        <React.Fragment>
            <Alert type="primary" text="what is love?"/>
            <Alert type="secondary" text="what is love?"/>
            <Alert type="success" text="what is love?"/>
            <Alert type="danger" text="what is love?"/>
            <Alert type="info" text="what is love?"/>
            <Alert type="light" text="what is love?"/>
            <Alert type="dark" text="what is love?"/>
        </React.Fragment>
    );
}

export default App;
