function rolesIndex() {
  return (
     <>
         <div class="body flex-grow-1">
        <div class="container-lg px-4">
      <div class="card mb-4">
            <div class="card-header">
              <strong>Tables</strong>
              <span class="small ms-1">Table foot</span>
            </div>
            <div class="card-body">
              <div class="example">
                <ul class="nav nav-underline-border" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" data-coreui-toggle="tab" href="#preview-1020" role="tab">
                      <svg class="icon me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="var(--ci-primary-color, currentcolor)" d="M444.4 235.236 132.275 49.449A24 24 0 0 0 96 70.072v364.142a24.017 24.017 0 0 0 35.907 20.839L444.03 276.7a24 24 0 0 0 .367-41.461ZM128 420.429V84.144l288.244 171.574Z" class="ci-primary" />
                      </svg>
                      Preview
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="https://coreui.io/bootstrap/docs/content/tables/#table-foot" target="_blank">
                      <svg class="icon me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="var(--ci-primary-color, currentcolor)" d="m388.632 393.82 107.191-137.88-107.139-137.762-25.26 19.644 91.864 118.122-91.92 118.236zm-240.053-19.639L56.712 255.999l91.917-118.176-25.258-19.646L16.177 255.993l107.137 137.826zM330.529 16h-32.97L178.441 496h32.971z" class="ci-primary" />
                      </svg>
                      Code
                    </a>
                  </li>
                </ul>
                <div class="tab-content rounded-bottom">
                  <div class="tab-pane p-3 active preview" role="tabpanel" id="preview-1020">
                    <table class="table">
                      <thead class="table-light">
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">First</th>
                          <th scope="col">Last</th>
                          <th scope="col">Handle</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td>Footer</td>
                          <td>Footer</td>
                          <td>Footer</td>
                          <td>Footer</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>    
        </>
  );

}
export default rolesIndex;