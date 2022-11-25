import "./LoginCostum.css"

const LoginCostum = () =>{
    
    return (
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card" style={{borderRadius:'1rem'}}>
              <div className="card-body p-5 text-center">
  
                <div className="my-md-5 pb-5">
  
                  <h1 className="fw-bold mb-0">Welcome</h1>
  
                  <i className="fas fa-user-astronaut fa-3x my-5"></i>
  
                  <div className="form-outline mb-4 border-bottom">
                    <input type="email" id="typeEmail" className="form-control form-control-lg" />
                    <label className="form-label" for="typeEmail" >Email</label>
                  </div>
  
                  <div className="form-outline mb-5 border-bottom">
                    <input type="password" id="typePassword" className="form-control form-control-lg" />
                    <label className="form-label" for="typePassword">Password</label>
                  </div>
  
                  <button className="btn btn-primary btn-lg btn-rounded gradient-custom text-body px-5" type="submit">Login</button>
  
                </div>
  
                <div>
                  <p className="mb-0">Don't have an account? <a href="#!" className="text-body fw-bold">Sign Up</a></p>
                </div>
  
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}
export default LoginCostum
