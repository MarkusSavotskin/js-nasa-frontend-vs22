import './App.css';
import axios from 'axios'
import {useEffect, useState} from "react";
import Button from "./components/UI/Button";

const url = 'http://localhost:8081/hello'

const getHello = async () => {
    const res = await axios.get(url)
    if (res.status !== 200) {
        throw Object.assign(new Error(`${res.status}: ${res.statusText}`))
    }
    return res.data
}

function App() {
    const [hello, setHello] = useState();

    useEffect(() => {
        getHello().then(setHello).catch(console.error)
    });

    return (
        <div className='App'>
            <div className='Header'>
                <div className='Title'>
                    <h1>Backend says: {hello}</h1>
                </div>

                <div className='Navigation'>
                    <Button title='Sing-in'/>
                </div>
            </div>

            <div className='MainBody'>
                <div className='Globe'>

                </div>
                <div className='Search'>

                </div>
            </div>
        </div>
    );
}

export default App;