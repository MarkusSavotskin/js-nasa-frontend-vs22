import Tooltip from "./components/Tooltip/Tooltip"
import Button from './components/UI/Button';
import React, {useState} from "react";
import Form from "./components/Form/Form";
import FAQ from "./components/FAQ/FAQ";
import Searchbar from "./components/UI/Searchbar";
import '../src/fonts/Koulen-Regular.ttf';
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [showLoginTooltip, setShowLoginTooltip] = useState(false)
  const [showFAQTooltip, setShowFAQTooltip] = useState(false)

  const handleLoginClick = () => {
    setShowLoginTooltip(!showLoginTooltip)
    if (!showLoginTooltip) {
      closeOtherTooltip('faq')
    }
  }

  const handleFAQClick = () => {
    setShowFAQTooltip(!showFAQTooltip)
    if (!showFAQTooltip) {
      closeOtherTooltip('login')
    }
  }

  const closeOtherTooltip = (tooltip) => {
    if (tooltip === 'faq') {
      if (showFAQTooltip) {
        setShowFAQTooltip(!showFAQTooltip)
      }
    }

    if (tooltip === 'login') {
      if (showLoginTooltip) {
        setShowLoginTooltip(!showLoginTooltip)
      }
    }
  }


  return (
    <div className='App'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className='Header'>
              <div className='Logo'>
                <img className='Image' src='/NSAT.svg' alt=''/>
              </div>
              <div className="Links">
                <Button className='font-face-gm' style='Navbar' onClick={handleLoginClick} title='LOG IN'/>
                <Button className='font-face-gm' style='Navbar' onClick={handleFAQClick} title='?'/>
              </div>
            </div>
          </div>
        </div>

        <div className="row tooltip-row">
          <div className="col-12">
            <div className="Login-tooltip">
              <Tooltip showTooltip={showLoginTooltip} child='login-tooltip'>
                <Form/>
              </Tooltip>
            </div>
            <div className="FAQ-tooltip">
              <Tooltip showTooltip={showFAQTooltip} child='faq-tooltip'>
                <FAQ/>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid MainBody">
        <div className="row">
          <div className="col-lg-12 d-flex pt-5 MainContent">
            <div className="col-6">
              <div className="Globe"></div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 SearchWrapper">
              <Searchbar></Searchbar>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid Footer">
        <div className="row">
          <div className="col-12 d-flex">
            <div className="FooterContent">
              <h2>Created by </h2>
              <span>Markus Savotškin, Karl-Markus Sangerneebo, Hanna-Marii Kriisa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;