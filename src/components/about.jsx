import React from 'react';
import './about.css';

function About() {
  return (
    <section id="testimonials">
    <div id="carouselExampleControls" className="conatiner-fluid carousel carousel-dark slide" data-bs-ride="carousel" data-bs-pause="hover">
      <div className="carousel-inner">
        <div className="carousel-item active">
        <img className="kutta" src="src\media\lokesh.jpg" alt="dog-profile"/>
          <em>Lokesh Yadav</em>
          <h2>"I can finally shop with confidence, knowing that I'm getting the best deal possible."</h2>

        </div>
        <div className="carousel-item">
        <img className="kutta" src="src\media\dilpreet.jpg" alt="lady-profile"/>
          <em>Dilpreet Grover</em>
          <h2 className="testimonial-text">"I never realized how much money I was wasting before I started using this price tracker."</h2>


        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
</div>

 <div className="bg-light py-5">
  <div className=" team container py-5">
        <h1 className="ourteam ">Our team</h1>
        <p className="para">Our team is a group of dedicated and passionate individuals with diverse backgrounds and skillsets. Together, we share a common goal of providing our customers with exceptional products and services.</p>


    <div className="row text-center">
      <div className="col-xl-6 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="src\media\gurjotimage.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0">Gurjot Singh</h5><span className="small text-uppercase text-muted">Developer</span>
        </div>
      </div>

      <div className="col-xl-6 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="src\media\hitesh-image.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0">Hitesh Bansal</h5><span className="small text-uppercase text-muted">Developer</span>
        </div>
      </div>
    </div>

    </div>
    </div>
    <footer className="bg-light pb-5">
  <div className="container text-center">
    <p className="font-italic text-muted mb-0">&copy; Copyrights PriceOWL.com All rights reserved.</p>
  </div>
</footer>
</section>
  )
}

export default About