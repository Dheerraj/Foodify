import React from 'react'
import Navbar from '../componets/Navbar'
function About() {
  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <h1 className="text-center mb-4">About Us</h1>

        <div className="row">
          <div className="col-md-6">
            <img
              src="https://placekitten.com/400/300" // Replace with your actual image source
              alt="About Us"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
              turpis nisl. Ut ut gravida ligula, vel laoreet urna. Aliquam erat
              volutpat. Sed bibendum urna a elit luctus, vel ultrices nulla
              congue. Integer efficitur scelerisque urna vel vestibulum. Nullam
              accumsan, odio et sagittis accumsan, urna nisi cursus tortor, vel
              consequat eros nisi vel velit. Vivamus euismod, purus at
              consectetur gravida, ligula elit malesuada elit, eu congue metus
              eros vel tortor.
            </p>
            <p>
              Duis faucibus tellus nec justo semper, ut commodo metus
              malesuada. Vestibulum vulputate metus nec ligula aliquet, eget
              vehicula ex tincidunt. Suspendisse ultricies, arcu non cursus
              consectetur, ligula justo cursus urna, eget accumsan sem ante ut
              risus. Aliquam a nulla quis elit vehicula congue in vel erat.
            </p>
          </div>
        </div>

        <hr />

        <h2 className="text-center mb-4">Our Team</h2>

        <div className="row">
          {/* Add team member cards here */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="https://placekitten.com/200/200" // Replace with team member image
                alt="Team Member"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">John Doe</h5>
                <p className="card-text">Position</p>
              </div>
            </div>
          </div>
          {/* Repeat for additional team members */}
        </div>
      </div>
    </div>
  )
}

export default About
