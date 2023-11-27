function Footer()
{
    return(
        <div >
        <div className="container my-5">
          <footer
                  className="text-center text-lg-start text-white"
                  style={{backgroundColor:" #929fba"}}
                  >
            <div className="container p-4 pb-0">
              <section className="">
                <div className="row">
                  <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">
                      BLUE BUS
                    </h6>
                    <p>
                    BlueBus is the World's largest online bus ticket booking service trusted by over 
                    35 million happy customers globally.BlueBus offers bus ticket booking through its website,
                     iOS and Android mobile apps for all major routes.
                    </p>
                  </div>
                  <hr className="w-100 clearfix d-md-none" />
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Top Bus Travels</h6>
                    <p>
                      <a className="text-white">BlackPearl</a>
                    </p>
                    <p>
                      <a className="text-white">SwamyAyyappa</a>
                    </p>
                    <p>
                      <a className="text-white">Orange</a>
                    </p>
                    <p>
                      <a className="text-white">A1</a>
                    </p>
                  </div>
        
                  <hr className="w-100 clearfix d-md-none" />
        
                  <hr className="w-100 clearfix d-md-none" />
        
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                    <p><i className="fas fa-home mr-3"></i> Blue Bus Headoffice, Coimbatore, Tamil Nadu, India</p>
                    <p><i className="fas fa-envelope mr-3"></i> bluebus@gmail.com</p>
                    <p><i className="fas fa-phone mr-3"></i> 9042117381</p>
                    <p><i className="fas fa-print mr-3"></i> 8825690200</p>
                    <p><i className="fas fa-print mr-3"></i> 9361095126</p>
                  </div>
        
                  {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>
        
                    <a
                       className="btn btn-primary btn-floating m-1"
                       style={{backgroundColor:" #3b5998"}}
                       href="#!"
                       role="button"
                       ><i className="fab fa-facebook-f"></i
                      ></a>
        
                    <a
                       className="btn btn-primary btn-floating m-1"
                       style={{backgroundColor:" #55acee"}}
                       href="#!"
                       role="button"
                       ><i className="fab fa-twitter"></i
                      ></a>
        
                    <a
                       className="btn btn-primary btn-floating m-1"
                       style={{backgroundColor:" #dd4b39"}}
                       href="#!"
                       role="button"
                       ><i className="fab fa-google"></i
                      ></a>
        
                    <a
                       className="btn btn-primary btn-floating m-1"
                       style={{backgroundColor: "#ac2bac"}}
                       href="#!"
                       role="button"
                       ><i className="fab fa-instagram"></i
                      ></a>
        
                    <a
                       className="btn btn-primary btn-floating m-1"
                       style={{backgroundColor:" #0082ca"}}
                       href="#!"
                       role="button"
                       ><i className="fab fa-linkedin-in"></i
                      ></a>
                    <a
                       className="btn btn-primary btn-floating m-1"
                       style={{backgroundColor:" #333333"}}
                       href="#!"
                       role="button"
                       ><i className="fab fa-github"></i
                      ></a>
                  </div> */}
                </div>
              </section>
            </div>
        
            <div
                 className="text-center p-3"
                 style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
                 >
               Copyright ©
              <a className="text-white" href="https://mdbootstrap.com/"
                 >Blue Bus</a
                >
                {new Date().getFullYear()}
            </div>
          </footer>
        </div>
        </div>
    )
}
export default Footer