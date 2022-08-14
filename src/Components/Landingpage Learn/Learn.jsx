import React from 'react'
import './learn.css'

const Learn = () => {
  return (
    <section id="learn">
        <div className="container learn_container">
            <div className="learn_wrapper">
              <div className="learn_intro">
                  <h3> Accquire the skill of designing and making Tie-Dye clothing at sFh. With mentorship program to keep you always informed.</h3>
                  <a href="/signup" className='btn btn-primary btn-lg' id='buttons'> Register </a>
                  <div className="bg_design1"></div>
                  <div className="bg_design2"></div>
              </div>
              <div className="learn_displayimages">
                  <div className="learn1">  </div>
                  <div className="learn2"> </div>
                  <div className="learn3"> </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Learn