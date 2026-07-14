import {useState } from 'react'
import { Link } from 'react-router-dom'
import { Can } from '../casl/AbilityContext.js';

function Sidebar(){
  const [openMenu, setOpenMenu] = useState("");

  const toggleSidebar = () => {
    const sidebar = document.querySelector('#sidebar')
    const sidebarInstance = window.coreui?.Sidebar?.getOrCreateInstance(sidebar)
    sidebarInstance?.toggle()
 }


    return (
        <>
        <div className="sidebar sidebar-dark sidebar-fixed border-end" id="sidebar">
      <div className="sidebar-header border-bottom">
        <div className="sidebar-brand me-auto">
          <svg role="img" aria-label="CoreUI Logo Full" className="sidebar-brand-full" width="88" height="32" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 312 115">
            <g style={{ fill: 'currentColor' }}>
              <path d="M96 24.124 57 1.608a12 12 0 0 0-12 0L6 24.124a12.034 12.034 0 0 0-6 10.393V79.55a12.033 12.033 0 0 0 6 10.392l39 22.517a12 12 0 0 0 12 0l39-22.517a12.033 12.033 0 0 0 6-10.392V34.517a12.034 12.034 0 0 0-6-10.393ZM94 79.55a4 4 0 0 1-2 3.464l-39 22.517a4 4 0 0 1-4 0L10 83.014a4 4 0 0 1-2-3.464V34.517a4 4 0 0 1 2-3.464L49 8.536a4 4 0 0 1 4 0l39 22.517a4 4 0 0 1 2 3.464V79.55Z" />
              <path d="M74.022 70.071h-2.866a4 4 0 0 0-1.925.494L51.95 80.05 32 68.531V45.554l19.95-11.519 17.29 9.455a4 4 0 0 0 1.919.49h2.863a2 2 0 0 0 2-2v-2.71a2 2 0 0 0-1.04-1.756L55.793 27.02a8.04 8.04 0 0 0-7.843.09L28 38.626a8.025 8.025 0 0 0-4 6.929V68.53a8 8 0 0 0 4 6.928l19.95 11.519a8.043 8.043 0 0 0 7.843.088l19.19-10.532a2 2 0 0 0 1.038-1.753v-2.71a2 2 0 0 0-2-2Z" />
              <g transform="translate(118 33)">
                <path d="M50.745.428c-8.28.01-14.99 6.72-15 15v17.277c0 8.285 6.715 15 15 15 8.284 0 15-6.715 15-15V15.428c-.01-8.28-6.72-14.99-15-15Zm7 32.277a7 7 0 0 1-14 0V15.428a7 7 0 0 1 14 0v17.277ZM14.079 8.488a7.01 7.01 0 0 1 7.868 6.075.99.99 0 0 0 .984.865h6.03a1.01 1.01 0 0 0 1-1.097C29.354 6.206 22.38.046 14.243.447 6.161 1-.086 7.762 0 15.864V32.27c-.087 8.101 6.161 14.864 14.244 15.416 8.137.401 15.11-5.759 15.716-13.883a1.01 1.01 0 0 0-.999-1.098h-6.03a.99.99 0 0 0-.985.865 7.01 7.01 0 0 1-7.868 6.076A7.164 7.164 0 0 1 8 32.461V15.672a7.164 7.164 0 0 1 6.079-7.184ZM96.922 27.994a12.158 12.158 0 0 0 7.184-11.077v-3.7c0-6.71-5.44-12.15-12.149-12.15H75a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-17h6.621l7.916 17.413a1 1 0 0 0 .91.587h6.591a1 1 0 0 0 .91-1.414l-8.026-17.659Zm-.816-11.077a4.154 4.154 0 0 1-4.148 4.15h-9.852v-12h9.852a4.154 4.154 0 0 1 4.148 4.15v3.7ZM139 1.067h-26a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-19v-12h13a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-13v-10h19a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1ZM177 1.067h-6a1 1 0 0 0-1 1v22.647a7.007 7.007 0 1 1-14 0V2.067a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v22.647a15.003 15.003 0 1 0 30 0V2.067a1 1 0 0 0-1-1Z" />
                <rect width="8" height="38" x="186" y="1.067" rx="1" />
              </g>
            </g>
          </svg>
          <svg role="img" aria-label="CoreUI Logo Signet" className="sidebar-brand-narrow" width="88" height="32" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 102 115">
            <g style={{ fill: 'currentColor' }}>
              <path d="M96 24.124 57 1.608a12 12 0 0 0-12 0L6 24.124a12.034 12.034 0 0 0-6 10.393V79.55a12.033 12.033 0 0 0 6 10.392l39 22.517a12 12 0 0 0 12 0l39-22.517a12.033 12.033 0 0 0 6-10.392V34.517a12.034 12.034 0 0 0-6-10.393ZM94 79.55a4 4 0 0 1-2 3.464l-39 22.517a4 4 0 0 1-4 0L10 83.014a4 4 0 0 1-2-3.464V34.517a4 4 0 0 1 2-3.464L49 8.536a4 4 0 0 1 4 0l39 22.517a4 4 0 0 1 2 3.464V79.55Z" />
              <path d="M74.022 70.071h-2.866a4 4 0 0 0-1.925.494L51.95 80.05 32 68.531V45.554l19.95-11.519 17.29 9.455a4 4 0 0 0 1.919.49h2.863a2 2 0 0 0 2-2v-2.71a2 2 0 0 0-1.04-1.756L55.793 27.02a8.04 8.04 0 0 0-7.843.09L28 38.626a8.025 8.025 0 0 0-4 6.929V68.53a8 8 0 0 0 4 6.928l19.95 11.519a8.043 8.043 0 0 0 7.843.088l19.19-10.532a2 2 0 0 0 1.038-1.753v-2.71a2 2 0 0 0-2-2Z" />
            </g>
          </svg>
        </div>
        <button className="btn-close d-lg-none" type="button" data-coreui-theme="dark" aria-label="Close" onClick={toggleSidebar}>  </button>
      </div>
      <ul className="sidebar-nav" data-coreui="navigation" data-simplebar>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="var(--ci-primary-color, currentcolor)" d="M425.706 142.294A240 240 0 0 0 16 312v88h144v-32H48v-56c0-114.691 93.309-208 208-208s208 93.309 208 208v56H352v32h144v-88a238.43 238.43 0 0 0-70.294-169.706" className="ci-primary" />
              <path fill="var(--ci-primary-color, currentcolor)" d="M80 264h32v32H80zm160-136h32v32h-32zm-104 40h32v32h-32zm264 96h32v32h-32zm-102.778 71.1 69.2-144.173-28.85-13.848-69.183 144.135a64.141 64.141 0 1 0 28.833 13.886M256 416a32 32 0 1 1 32-32 32.036 32.036 0 0 1-32 32" className="ci-primary" />
            </svg>
            Dashboard
            <span className="badge badge-sm bg-info ms-auto">NEW</span>
          </Link>
        </li>
        <li className="nav-title">UI Elements</li>
        <li className="nav-item">
          <Link className="nav-link" to="/users">
            <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="var(--ci-primary-color, currentcolor)" d="M105.361 398.32A195.891 195.891 0 0 1 343.42 91.125l23.256-23.255A227.875 227.875 0 0 0 82.733 420.948 228.03 228.03 0 0 0 366.24 452.1l-23.312-23.312c-75.028 43.98-173.271 33.829-237.567-30.468" className="ci-primary" />
              <path fill="var(--ci-primary-color, currentcolor)" d="M468.916 353.07a243.54 243.54 0 0 0 0-186.459 248 248 0 0 0-2.747-6.354 242.3 242.3 0 0 0-50.059-72.686L404.8 76.257l-11.317 11.314-172.27 172.269 172.63 172.631 10.957 10.953 11.31-11.314a242.2 242.2 0 0 0 49.452-71.358 249 249 0 0 0 3.354-7.682m-64.557-231.12a211.57 211.57 0 0 1 0 275.781L266.468 259.84Z" className="ci-primary" />
            </svg>
           Users
          </Link>
        </li>
        <li className={`nav-group ${openMenu === "components" ? "show" : ""}`}>
          <a className="nav-link nav-group-toggle" href="#" onClick={(e) => {
                    e.preventDefault();
                    setOpenMenu(openMenu === "components" ? "" : "components");
                }} >
            <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="var(--ci-primary-color, currentcolor)" d="m491.693 256.705-54.957-49.461 16.407-13.406a80.5 80.5 0 0 0 18.363-21.522c18.148-31.441 12.867-70.042-13.144-96.052s-64.612-31.291-96.051-13.142a80.5 80.5 0 0 0-21.52 18.362l-13.408 16.407-49.461-54.956-.579-.611a24.03 24.03 0 0 0-33.941 0l-65.6 65.605 1.19 23.7 33.108 27.056a48.6 48.6 0 0 1 11.079 12.889c10.807 18.722 7.57 41.8-8.056 57.426s-38.7 18.862-57.426 8.058a48.7 48.7 0 0 1-12.9-11.086l-27.047-33.1-23.7-1.189-71.26 71.26a24 24 0 0 0 0 33.942l175.357 175.359a80 80 0 0 0 113.138 0L492.3 291.225a24.03 24.03 0 0 0 0-33.94ZM288.657 449.617a48 48 0 0 1-67.883 0L51.069 279.911l53.1-53.095 15.91 19.473.1.119a80.5 80.5 0 0 0 21.521 18.363c31.441 18.149 70.041 12.867 96.052-13.144s31.291-64.61 13.143-96.05a80.5 80.5 0 0 0-18.363-21.521l-19.591-16.01 47.124-47.124 56.018 62.241 24.282-.579 25.062-30.67a48.6 48.6 0 0 1 12.888-11.078c18.722-10.807 41.8-7.569 57.426 8.056s18.864 38.7 8.057 57.426a48.6 48.6 0 0 1-11.079 12.889l-30.67 25.061-.58 24.282 62.243 56.018Z" className="ci-primary" />
            </svg>
            Components
          </a>
          <ul className="nav-group-items compact">
            <li className="nav-item">
              <a className="nav-link" href="components/accordion.html">
                <span className="nav-icon"><span className="nav-icon-bullet"></span></span>
                Accordion
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="components/alerts.html">
                <span className="nav-icon"><span className="nav-icon-bullet"></span></span>
                Alerts
              </a>
            </li>
           
          
          </ul>
        </li>
        <li className={`nav-group ${openMenu === "forms" ? "show" : ""}`}>
          <a className="nav-link nav-group-toggle" href="#" onClick={(e) => {
                    e.preventDefault();
                    setOpenMenu(openMenu === "forms" ? "" : "forms");
                }}>
            <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="var(--ci-primary-color, currentcolor)" d="M112 152h288v32H112zm0 88h288v32H112zm0 88h152v32H112z" className="ci-primary" />
              <path fill="var(--ci-primary-color, currentcolor)" d="M480 48H32v416h448Zm-32 384H64V80h384Z" className="ci-primary" />
            </svg>
            Forms
          </a>
          <ul className="nav-group-items compact">
           
            <li className="nav-item">
              <a className="nav-link" href="forms/form-control.html">
                <span className="nav-icon"><span className="nav-icon-bullet"></span></span>
                Form Control
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="forms/input-group.html">
                <span className="nav-icon"><span className="nav-icon-bullet"></span></span>
                Input group
              </a>
            </li>
           
          </ul>
        </li>
        <li className={`nav-group ${openMenu === "usermanagement" ? "show" : ""}`}>
          <a className="nav-link nav-group-toggle" href="#" onClick={(e) => {
                    e.preventDefault();
                    setOpenMenu(openMenu === "usermanagement" ? "" : "usermanagement");
                }}>
            <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="var(--ci-primary-color, currentcolor)" d="M494 198.671a40.54 40.54 0 0 0-32.174-27.592l-115.909-18.837-53.732-104.414a40.7 40.7 0 0 0-72.37 0l-53.732 104.414-115.907 18.837a40.7 40.7 0 0 0-22.364 68.827l82.7 83.368-17.9 116.055a40.672 40.672 0 0 0 58.548 42.538L256 428.977l104.843 52.89a40.69 40.69 0 0 0 58.548-42.538l-17.9-116.055 82.7-83.368A40.54 40.54 0 0 0 494 198.671m-32.53 18.7L367.4 312.2l20.364 132.01a8.671 8.671 0 0 1-12.509 9.088L256 393.136 136.744 453.3a8.671 8.671 0 0 1-12.509-9.088L144.6 312.2l-94.069-94.83a8.7 8.7 0 0 1 4.778-14.706l131.841-21.426 61.119-118.767a8.694 8.694 0 0 1 15.462 0l61.119 118.767 131.841 21.426a8.7 8.7 0 0 1 4.778 14.706Z" className="ci-primary" />
            </svg>
            User Management
          </a>
          <ul className="nav-group-items compact">
              <Can I="read" a="Role">
            <li className="nav-item">
              <Link className="nav-link" to="/roles">
                <span className="nav-icon"><span className="nav-icon-bullet"></span></span>
                Roles
               
              </Link>
            </li>
            </Can>
            <Can I="read" a="Permission">
              <li className="nav-item">
              <Link className="nav-link" to="/permissions">
                <span className="nav-icon"><span className="nav-icon-bullet"></span></span>
                Permissions
              </Link>
            </li>
            </Can>
              <Can I="View" a="User">
             <li className="nav-item">
              <Link className="nav-link"  to="/users">
                <span className="nav-icon"><span className="nav-icon-bullet"></span></span>
                Users
               
              </Link>
            </li>
            </Can>

           
           
          </ul>
        </li>
       
        <li className="nav-divider"></li>
        <li className="nav-title">Extras</li>
       
      </ul>
      <div className="sidebar-footer border-top d-none d-md-flex">
        <button className="sidebar-toggler" type="button" data-coreui-toggle="unfoldable"></button>
      </div>
    </div>
        </>
    )
}

export default Sidebar