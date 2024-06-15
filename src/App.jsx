import React from 'react'
import './App.scss'

import Header from './components/Header'
import Main from './components/Main'
import Background from './components/Background'

export default function App() {
    return (
        <div className='App'>
            <Background />
            <Header />
            <Main />
        </div>
    )
}
