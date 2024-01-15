import React from 'react'
import "./Home.css"
import User from '../User/User'
const Home = () => {
  return (
    <div className='home'>
      <div className='homeleft'></div>
      <div className='homeright'>
        <User
            userId={"user._id"}
              name={"user.name"}
              avatar={"https://imgs.search.brave.com/6dLSAcjUsZ0PyjR_eSwad5me_5Z5PQTkoDytgeI4AAQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9maXh0/aGVwaG90by5jb20v/YmxvZy9Vc2VyRmls/ZXMvcGhvdG8tcHJv/ZmlsZS1wb3Npbmcu/anBn"}
        />
      </div>
    </div>
  )
}

export default Home
