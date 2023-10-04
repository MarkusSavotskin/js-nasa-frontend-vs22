import './App.css';
import Tooltip from "./components/Tooltip/Tooltip"
import Button from './components/UI/Button';
import React, {useState} from "react";
import LoginForm from "./components/Form/loginForm";

function App() {

    const [showTooltip, setShowTooltip] = useState(false)

    const handleSignInClick = () => {
        setShowTooltip((showTooltip) => !showTooltip)
    }

    const showSignInTooltip = () => {
        handleSignInClick()
        console.log('ShowSignInTooltip: ', showTooltip)
    }


    return (
        <div className='App'>
            <div className='Header'>
                <div className='Logo'>
                    <img className='Image' src='/NSAT.svg' alt=''/>
                </div>

                <div className='Navigation'>
                    <Button onClick={showSignInTooltip} title='LOG IN'/>
                    <LoginForm showTooltip={showTooltip}/>
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