import React from "react";
import './FAQ.css'
import '../Form/Form.css'

const FAQ = () => {
  return (
    <div className='login-form TooltipContent'>
      <h1>HOW DOES IT WORK?</h1>
        <p>Welcome to Nsat, your personal satellite information hub! Here's a quick guide on using Nsat effectively:</p>

        <h3>Search for Satellites:</h3>
        <p>Type or select a satellite on the homepage.
            Press the arrow to get detailed information.</p>

        <h3>User Account:</h3>
        <p>Create an account for personalized features.</p>

        <h3>Add to Favorites:</h3>
        <p>While viewing a satellite, click "Add to Favorites."</p>

        <h3>View Favorites:</h3>
        <p>Access your favorite satellites on the "My Account" page.</p>

        <h3>Manage Collection:</h3>
        <p>Organize and remove satellites as needed.</p>

        <h3>Log Out:</h3>
        <p>Ensure security by logging out when done.</p>

        <p>Congratulations! You're now ready to explore the world of satellites with Nsat. Happy browsing!</p>
    </div>
  )
}
export default FAQ