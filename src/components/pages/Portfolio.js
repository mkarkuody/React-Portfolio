import React from "react";

const Portfolio = () => {
  return(  <div className="container" id= "cube">
  
  <main className="row">
    <div className="col-md-8">
      <article className="block">
        <h1 className="block-header">Portfolio</h1>
        <hr />
        <div className="row">
          <div className=" col-lg-6">
          
            <a href="https://github.com/mkarkuody/responsiveportfoliomerdad" target="_self"><img className="img-fluid port-image" src="https://github.com/mkarkuody/responsiveportfoliomerdad/raw/master/portfolio.jpg" alt="responsive portfolio"/> </a>
          </div>

          <div className="col-sm-6 col-md-12 col-lg-6">
           
            <a href="https://github.com/mkarkuody/Work-Day-Scheduler" target="_self"><img className="img-fluid port-image" src="https://github.com/twopcz/HW-5/raw/master/assets/images/day-planner.png?raw=true" alt="HTML code refactor" /></a>
          </div>
          <div className="row">
            <div className=" col-lg-6">
              <div className="col-sm-12 col-md-12 col-lg-12">
               
                <a href="https://github.com/mkarkuody" target="_self"><img className="img-fluid port-image" src="https://avatars.githubusercontent.com/u/70052833?s=460&u=f26f745025c7db563d1bf1d3a58590f1411f64d1&v=4" alt="Merdad in the hat" /></a>
              </div>
            </div>
            <div className="col-sm-6 col-md-12 col-lg-6">
             
              <a href="https://github.com/mkarkuody/yourName" target="_self"><img className="img-fluid port-image" src="https://github.com/mkarkuody/yourName/raw/main/YourName.jpg" alt="Your Name" /></a>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-12 col-lg-6">
             
              <a href="https://github.com/mkarkuody/passwordgenerator" target="_self"><img className="img-fluid port-image" src="Password Generator.png" alt="Password Generator" /></a>
            </div>
          </div>
          <div className="col-sm-6 col-md-12 col-lg-6">
         
            <a href="https://github.com/mkarkuody/Weather-Dashboard" target="_self"><img className="img-fluid port-image" src="Weather Dashboard.png" alt="weather dashboard" /></a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-12 col-lg-6">
           
            <a href="https://github.com/mkarkuody/HTMLcodeRefactor" target="_self"><img className="img-fluid port-image" src="HTML reflactor.png" alt="HTML code refactor" /></a>
          </div>
        </div>
      </article>
    </div>
    </main>
    </div>
  
);
}
export default Portfolio;
