import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import useAuthStore from "../../store/authStore";
import { updateAbility } from "../../casl/ability";


function Login(){
    const navigate= useNavigate();
    const {setAuth}= useAuthStore();
    const [formData, setFormData]= useState({
        email:'',
        password:''
    });

    const [error, setError]= useState('')
    const [loading, setLoading]= useState(false)

    const handleChange= (e)=>{
      setFormData({...formData, [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e)=>{
      e.preventDefault();
      setError('');
      setLoading(true)

      try{

        const response = await api.post('/users/login', formData);
        const {token, user}= response.data;
        setAuth(user, token);

        updateAbility(user);
        navigate('/');
      }catch(error){
        console.log(error || 'Login Failed')
        setError(error.response?.data?.message || 'Login Failed')
      }finally{
        setLoading(false)
      }

    }

    return(
        <>
        <div className="card p-4">
            <div className="card-body d-flex flex-column gap-4">
              <h2 className="h5 text-center">Login to your account</h2>
            {error && (<div className="alert alert-danger">{error}</div>)}
              <form onSubmit={handleSubmit}
                className="row gap-3"
                
                autoComplete="off"
                noValidate 

              >
                <div>
                  <label className="form-label" htmlFor="email">
                    Email address
                  </label>

                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required

                  />
                </div>

                <div>
                  <div className="d-flex justify-content-between">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>

                    <a href="#">
                      I forgot password
                    </a>
                  </div>

                  <div className="input-group">
                    <input
                      className="form-control"
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Your password"
                      value={formData.password}
                      onChange={handleChange}
                      
                    />

                    <span className="input-group-text">
                      <button
                        className="bg-transparent border-0 p-0 link-secondary"
                        type="button"
                        data-coreui-toggle="tooltip"
                        aria-label="Show password"
                        data-coreui-original-title="Show password"
                      >
                         <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path class="ci-primary" fill="var(--ci-primary-color, currentcolor)" d="M256 144.927a103.309 103.309 0 1 0 103.309 103.309A103.426 103.426 0 0 0 256 144.927m0 174.618a71.309 71.309 0 1 1 71.309-71.309A71.39 71.39 0 0 1 256 319.545"></path>
                          <path class="ci-primary" fill="var(--ci-primary-color, currentcolor)" d="m397.222 131.1-.218-.223c-77.75-77.749-204.258-77.749-282.008 0L16 233.79v28.893l98.778 102.689.218.222a199.41 199.41 0 0 0 282.008 0l99-102.911V233.79ZM464 249.79l-89.732 93.285a167.41 167.41 0 0 1-236.536 0L48 249.79v-3.107l89.729-93.283c65.247-65.13 171.3-65.13 236.542 0L464 246.683Z"></path>
                          <path class="ci-primary" fill="var(--ci-primary-color, currentcolor)" d="M240 232h32v32h-32z"></path>
                        </svg>
                      </button>
                    </span>
                  </div>
                </div>

                <div>
                  <label className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                    />
                    <span className="form-check-label">
                      Remember me on this device
                    </span>
                  </label>
                </div>

                <div>
                  <button className="btn btn-primary w-100" type="submit" disabled={loading}>
                    {loading ? 'Logging In ...' :'Login' }
                  </button>
                </div>
              </form>

              <div className="position-relative">
                <hr />
                <div className="position-absolute top-50 start-50 translate-middle bg-body px-2 text-body-tertiary text-uppercase small">
                  or
                </div>
              </div>

              <div className="row">
                 <div>
                  <button className="btn btn-primary w-100" type="submit">
                     Need an account?{" "} Sign up
                  </button>
                </div>

              
              </div>
            </div>
          </div>
        </>
    )
}

export default Login;