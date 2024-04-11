import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Tajmahal from './Tajmahal'
import Chinawall from './Chinawall'
import Colosseum from './Colosseum'
const App = () => {
    return(
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Tajmahal' element={<Tajmahal/>}/>
        <Route path='/Chinawall' element={<Chinawall/>}/>
        <Route path='/Colosseum'element={<Colosseum/>}/>
        </Routes>
        </BrowserRouter>
    );

}

export default App