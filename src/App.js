import Tooltip from "./components/Tooltip/Tooltip"
import Button from './components/UI/Button';
import React, {useState} from "react";
import LoginForm from "./components/Form/loginForm";
import '../src/fonts/Koulen-Regular.ttf';
import './app.css'

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
        <div className='App font-face-gm'>
            <div className='Header'>
                <div className='Logo'>
                    <img className='Image' src='/NSAT.svg' alt=''/>
                </div>

                <div className='Navigation'>
                    <Button className='font-face-gm' onClick={showSignInTooltip} title='LOG IN'/>

                    <Tooltip showTooltip={showTooltip}>
                    <LoginForm/>
                    </Tooltip>
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