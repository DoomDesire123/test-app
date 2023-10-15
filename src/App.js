import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import placeholder from "./Assets/placeholder-image-dark.jpg"
import logo from "./Assets/logo.png"
import search from "./Assets/search.png"
import shopping from "./Assets/shopping-cart.png"
import expand from "./Assets/expand.png"
import facebook from "./Assets/fb.png"
import instagram from "./Assets/insta.png"
import telegram from "./Assets/telegram.png"
import twitter from "./Assets/twitter.png"
import viber from "./Assets/viber.png"



function App() {
  return (
    <div className="App">
      <header className='bg-light'>
        <div className='container fluid'>
          <nav class="navbar navbar-expand-sm navbar-light">
            <div class="container-fluid ">
            <a class="navbar-brand" href="#"><img src={logo} class="d-block w-100 logoimg"/></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#"><img src={search} class="d-block navicon"/></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><img src={shopping} class="d-block navicon"/></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><img src={expand} class="d-block navicon"/></a>
                </li>				
              </ul>		  
            </div>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={placeholder} class="d-block w-100 heroimg"/>
              <div class="container">
                <div class="carousel-caption">
                  <h2>The Best Look</h2>
                  <h1>Anytime Anywhere</h1>
                  <p>Starts from 10,000MMk</p>
                  <p><a class="btn btn-lg btn-dark rounded-pill border border-secondary herobtn" href="#">View</a></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
            <img src={placeholder} class="d-block w-100 heroimg"/>
              <div class="container">
                <div class="carousel-caption">
                  <h2>The Best Look 2</h2>
                  <h1>Anytime Anywhere</h1>
                  <p>Starts from 10,000MMk</p>
                  <p><a class="btn btn-lg btn-dark rounded-pill border border-secondary herobtn" href="#">View</a></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
            <img src={placeholder} class="d-block w-100 heroimg" />
              <div class="container">
                <div class="carousel-caption">
                  <h2>The Best Look 3</h2>
                  <h1>Anytime Anywhere</h1>
                  <p>Starts from 10,000MMk</p>
                  <p><a class="btn btn-lg btn-dark rounded-pill border border-secondary herobtn" href="#">View</a></p>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev bg-dark herosidebtn rounded-pill border border-secondary" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next bg-dark herosidebtn rounded-pill border border-secondary" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div className='container'>
          <div className='bestdeals'>
            <div class="row">
              <div className='col-md-12 bestheader'>
                <h1>Best Deals</h1>
                <h2>Just for You</h2>
              </div>
              <div className='col-md-2'>
                <img src={placeholder} class="d-block w-100 " />
                <p className='fs-4'>Refreshing Mint</p>
                <p className='fs-4'>30,000 MMk</p>
                <p className='fs-6 text-decoration-line-through'>30,000 MMK?</p>
                <p className='bestpoints fs-6 text-warning'>⭐600 points</p>
              </div>
              <div className='col-md-2'>
                <img src={placeholder} class="d-block w-100 " />
                <p className='fs-4'>Refreshing Mint</p>
                <p className='fs-4'>30,000 MMk</p>
                <p className='fs-6 text-decoration-line-through'>30,000 MMK?</p>
                <p className='bestpoints fs-6 text-warning'>⭐600 points</p>
              </div>
              <div className='col-md-2'>
                <img src={placeholder} class="d-block w-100 " />
                <p className='fs-4'>Refreshing Mint</p>
                <p className='fs-4'>30,000 MMk</p>
                <p className='fs-6 text-decoration-line-through'>30,000 MMK?</p>
                <p className='bestpoints fs-6 text-warning'>⭐600 points</p>
              </div>
              <div className='col-md-2'>
                <img src={placeholder} class="d-block w-100 " />
                <p className='fs-4'>Refreshing Mint</p>
                <p className='fs-4'>30,000 MMk</p>
                <p className='fs-6 text-decoration-line-through'>30,000 MMK?</p>
                <p className='bestpoints fs-6 text-warning'>⭐600 points</p>
              </div>
              <div className='col-md-2'>
                <img src={placeholder} class="d-block w-100 " />
                <p className='fs-4'>Refreshing Mint</p>
                <p className='fs-4'>30,000 MMk</p>
                <p className='fs-6 text-decoration-line-through'>30,000 MMK?</p>
                <p className='bestpoints fs-6 text-warning'>⭐600 points</p>
              </div>
              <div className='col-md-2'>
                <img src={placeholder} class="d-block w-100 " />
                <p className='fs-4'>Refreshing Mint</p>
                <p className='fs-4'>30,000 MMk</p>
                <p className='fs-6 text-decoration-line-through'>30,000 MMK?</p>
                <p className='bestpoints fs-6 text-warning'>⭐600 points</p>
              </div>
              <div className='col-md-12'>
                <p><a class="btn btn-lg btn-secondary rounded-pill bestbtn" href="#">View More</a></p>
              </div>
              <div className='col-md-6 d-flex membership'>
                <div class="card bg-dark text-white w-100">
                  <img src={placeholder} class="card-img w-100 h-100"></img>
                  <div class="card-img-overlay d-flex flex-column justify-content-end">
                    <h5 class="card-title fs-2">Membership Program</h5>
                    <p class="card-text fs-5">Be a Vape Pi member and get our <br/>special exclusive offers</p>
                    <p class="text-start"><a class="btn btn-lg btn-dark rounded-pill border border-secondary membershipbtn" href="#">View</a></p>
                  </div>
                </div>
              </div>
              <div className='col-md-3 d-flex devicegrid'>
                <div class="card bg-dark text-white w-100">
                  <img src={placeholder} class="card-img w-100 h-100"></img>
                    <div class="col-sm-10 card-img-overlay d-flex flex-column justify-content-end">
                      <h5 class="card-title fs-4">Devices</h5>
                      <p class="card-text fs-7">Find the best for you here!</p>
                      <p class="text-start"><a class="btn btn-lg btn-dark rounded-pill border border-secondary membershipbtn" href="#">View</a></p>
                    </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div class="row">
                  <div className='col-md-10 podsgrid d-flex'>
                    <div class="card bg-dark text-white w-100">
                      <img src={placeholder} class="card-img w-100 h-100"></img>
                        <div class="col-sm-10 card-img-overlay d-flex flex-column justify-content-end">
                          <h5 class="card-title fs-4">Pods</h5>
                          <p class="card-text fs-7">Variety of choices available</p>
                        </div>
                    </div>
                  </div>
                  <div className='col-md-2 podsgridbtn d-flex bg-dark'>        
                    <p class="text-start  w-100 h-100 "><a class="btn btn-lg btn-dark w-100 h-100" href="#">></a></p>
                  </div>
                  <div className='col-md-10 podsgrid d-flex'>
                    <div class="card bg-dark text-white w-100">
                      <img src={placeholder} class="card-img w-100 h-100"></img>
                        <div class="col-sm-10 card-img-overlay d-flex flex-column justify-content-end">
                          <h5 class="card-title fs-4">Disposable</h5>
                          <p class="card-text fs-7">Easy, clean & superb flavour</p>
                        </div>
                    </div>
                  </div>
                  <div className='col-md-2 podsgridbtn d-flex bg-dark'>        
                    <p class="text-start  w-100 h-100 "><a class="btn btn-lg btn-dark w-100 h-100" href="#">></a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="container fluid">
          <div class="row">
            <div className='col-md-3'>
              <h3>Customer Service</h3>
              <p>Terms and Policy</p>
              <p>Return Policy</p>
            </div>
            <div className='col-md-3'>
              <h3>Language</h3>
              <form>
                <input type="radio" id="unicode" name="language" value="Unicode"></input>
                <label for="unicode">Myanmar (Unicode)</label><br/>
                <input type="radio" id="zawgyi" name="language" value="Zawgyi"></input>
                <label for="zawgyi">Myanmar (Zawgyi)</label><br/>
                <input type="radio" id="english" name="language" value="Eng" checked></input>
                <label for="english">English</label><br/><br/>
              </form> 
            </div>
            <div className='col-md-3'>
              <h3>Contact Us</h3>
              <p>Lay Daunt Kan Main Road, Cashmere Stop, Near Zawana, Thingangyun Tsp, Yangon</p>
              <p>09458489458</p>
            </div>
            <div className='col-md-3'>
              <h3>Download Our App</h3>
              <p>QR code</p>
            </div>
            <div className='col-md-3'>
              <h3>Payment</h3>
              <p>KBZ Pay</p>
              <p>Wavepay</p>
            </div>
            <div className='col-md-3'>
              <h3>Follow Us On</h3>
              <div class="contactcontainer">
                <a class="nav-link" href="#"><img src={facebook} class="d-block navicon"/></a>
              </div>
              <div class="contactcontainer">
                <a class="nav-link" href="#"><img src={viber} class="d-block navicon"/></a>
              </div>
              <div class="contactcontainer">
                <a class="nav-link" href="#"><img src={instagram} class="d-block navicon"/></a>
              </div>
              <div class="contactcontainer">
                <a class="nav-link" href="#"><img src={telegram} class="d-block navicon"/></a>
              </div>
              <div class="contactcontainer">
                <a class="nav-link" href="#"><img src={twitter} class="d-block navicon"/></a>
              </div>
            </div>
            <div className='col-md-12'>
              <p class="text-center">Copyright 2023 All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
