import React from 'react';
import SickComp from './components/SickComp';
import './styles/index.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1 className="text-2xl font-bold text-center">Welcome to Sick Comp Project</h1>
            <SickComp />
        </div>
    );
};

export default App;