function MainDashboardPage() {
return (
<>
 <div className="body flex-grow-1">
        <div className="container-lg px-4">
          <div className="row g-4 mb-4">
            <div className="col-sm-6 col-xl-3">
              <div className="card text-white bg-primary">
                <div className="card-body pb-0 d-flex justify-content-between align-items-start">
                  <div>
                    <div className="fs-4 fw-semibold">
                      26K
                      <span className="fs-6 fw-normal">
                        (-12.4%
                        <svg className="icon me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="var(--ci-primary-color, currentcolor)" d="m367.997 338.75-95.998 95.997V17.503h-32v417.242l-95.996-95.995-22.627 22.627L256 496l134.624-134.623z" className="ci-primary" />
                        </svg>
                        )
                      </span>
                    </div>
                    <div>Users</div>
                  </div>
                  <div className="dropdown">
                    <button className="btn btn-transparent text-white p-0" type="button" data-coreui-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <svg className="icon me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="var(--ci-primary-color, currentcolor)" d="M256 144a64 64 0 1 0-64-64 64.07 64.07 0 0 0 64 64m0-96a32 32 0 1 1-32 32 32.036 32.036 0 0 1 32-32m0 320a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32 32.036 32.036 0 0 1-32 32m0-272a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32 32.036 32.036 0 0 1-32 32" className="ci-primary" />
                      </svg>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>
                </div>
                <div className="c-chart-wrapper mt-3 mx-3" style={{ height: '70px' }}>
                  <canvas className="chart" id="card-chart1" height="70"></canvas>
                </div>
              </div>
            </div>
            {/* /.col */}
            <div className="col-sm-6 col-xl-3">
              <div className="card text-white bg-info">
                <div className="card-body pb-0 d-flex justify-content-between align-items-start">
                  <div>
                    <div className="fs-4 fw-semibold">
                      $6.200
                      <span className="fs-6 fw-normal">
                        (40.9%
                        <svg className="icon me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="var(--ci-primary-color, currentcolor)" d="M390.624 150.625 256 16 121.376 150.625l22.628 22.627 95.997-95.998v417.982h32V77.257l95.995 95.995z" className="ci-primary" />
                        </svg>
                        )
                      </span>
                    </div>
                    <div>Income</div>
                  </div>
                  <div className="dropdown">
                    <button className="btn btn-transparent text-white p-0" type="button" data-coreui-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <svg className="icon me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="var(--ci-primary-color, currentcolor)" d="M256 144a64 64 0 1 0-64-64 64.07 64.07 0 0 0 64 64m0-96a32 32 0 1 1-32 32 32.036 32.036 0 0 1 32-32m0 320a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32 32.036 32.036 0 0 1-32 32m0-272a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32 32.036 32.036 0 0 1-32 32" className="ci-primary" />
                      </svg>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>
                </div>
                <div className="c-chart-wrapper mt-3 mx-3" style={{ height: '70px' }}>
                  <canvas className="chart" id="card-chart2" height="70"></canvas>
                </div>
              </div>
            </div>
            {/* /.col */}
            <div className="col-sm-6 col-xl-3">
              <div className="card text-white bg-warning">
                <div className="card-body pb-0 d-flex justify-content-between align-items-start">
                  <div>
                    <div className="fs-4 fw-semibold">
                      2.49%
                      <span className="fs-6 fw-normal">
                        (84.7%
                        <svg className="icon me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="var(--ci-primary-color, currentcolor)" d="M390.624 150.625 256 16 121.376 150.625l22.628 22.627 95.997-95.998v417.982h32V77.257l95.995 95.995z" className="ci-primary" />
                        </svg>
                        )
                      </span>
                    </div>
                    <div>Conversion Rate</div>
                  </div>
                  <div className="dropdown">
                    <button className="btn btn-transparent text-white p-0" type="button" data-coreui-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <svg className="icon me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="var(--ci-primary-color, currentcolor)" d="M256 144a64 64 0 1 0-64-64 64.07 64.07 0 0 0 64 64m0-96a32 32 0 1 1-32 32 32.036 32.036 0 0 1 32-32m0 320a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32 32.036 32.036 0 0 1-32 32m0-272a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32 32.036 32.036 0 0 1-32 32" className="ci-primary" />
                      </svg>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>
                </div>
                <div className="c-chart-wrapper mt-3" style={{ height: '70px' }}>
                  <canvas className="chart" id="card-chart3" height="70"></canvas>
                </div>
              </div>
            </div>
            {/* /.col */}
            <div className="col-sm-6 col-xl-3">
              <div className="card text-white bg-danger">
                <div className="card-body pb-0 d-flex justify-content-between align-items-start">
                  <div>
                    <div className="fs-4 fw-semibold">
                      44K
                      <span className="fs-6 fw-normal">
                        (-23.6%
                        <svg className="icon me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="var(--ci-primary-color, currentcolor)" d="m367.997 338.75-95.998 95.997V17.503h-32v417.242l-95.996-95.995-22.627 22.627L256 496l134.624-134.623z" className="ci-primary" />
                        </svg>
                        )
                      </span>
                    </div>
                    <div>Sessions</div>
                  </div>
                  <div className="dropdown">
                    <button className="btn btn-transparent text-white p-0" type="button" data-coreui-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <svg className="icon me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="var(--ci-primary-color, currentcolor)" d="M256 144a64 64 0 1 0-64-64 64.07 64.07 0 0 0 64 64m0-96a32 32 0 1 1-32 32 32.036 32.036 0 0 1 32-32m0 320a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32 32.036 32.036 0 0 1-32 32m0-272a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32 32.036 32.036 0 0 1-32 32" className="ci-primary" />
                      </svg>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>
                </div>
                <div className="c-chart-wrapper mt-3 mx-3" style={{ height: '70px' }}>
                  <canvas className="chart" id="card-chart4" height="70"></canvas>
                </div>
              </div>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        
          {/* /.row */}
        </div>
      </div>
</>
)
}

export default MainDashboardPage