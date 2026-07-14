import { useEffect, useState } from 'react'

import configScript from '../assets/js/config.js?url'
import colorModesScript from '../assets/js/color-modes.js?url'
import coreuiBundleScript from '../assets/vendors/@coreui/coreui/js/coreui.bundle.min.js?url'
import simplebarScript from '../assets/vendors/simplebar/js/simplebar.min.js?url'
import chartScript from '../assets/vendors/chart.js/js/chart.umd.js?url'
import coreuiChartjsScript from '../assets/vendors/@coreui/chartjs/js/coreui-chartjs.js?url'
import coreuiUtilsScript from '../assets/vendors/@coreui/utils/js/index.js?url'
import simpleMainjsScript from '../assets/js/main.js?url'

import { Outlet } from 'react-router-dom'

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'


function DashboardLayout() {
  const [openMenu, setOpenMenu] = useState("");
  useEffect(() => {
    if (window.__teamFlowDashboardScriptsLoaded) {
      return
    }

    window.__teamFlowDashboardScriptsLoaded = true

    const dashboardScripts = [
      configScript,
      colorModesScript,
      coreuiBundleScript,
      simplebarScript,
      chartScript,
      coreuiChartjsScript,
      coreuiUtilsScript,
      simpleMainjsScript,
    ]

    const getStyle = (propertyName, fallback) =>
      window.coreui?.Utils?.getStyle(propertyName) || fallback

    const initCardCharts = () => {
      if (!window.Chart) {
        return
      }

      const chartDefaults = window.Chart.defaults
      chartDefaults.pointHitDetectionRadius = 1
      chartDefaults.plugins.tooltip.enabled = false
      chartDefaults.plugins.tooltip.mode = 'index'
      chartDefaults.plugins.tooltip.position = 'nearest'

      const charts = [
        {
          id: 'card-chart1',
          color: getStyle('--cui-primary', '#5856d6'),
          data: [65, 59, 84, 84, 51, 55, 40],
        },
        {
          id: 'card-chart2',
          color: getStyle('--cui-info', '#39f'),
          data: [1, 18, 9, 17, 34, 22, 11],
        },
        {
          id: 'card-chart3',
          color: 'rgba(255,255,255,.55)',
          data: [78, 81, 80, 45, 34, 12, 40],
        },
        {
          id: 'card-chart4',
          color: 'rgba(255,255,255,.55)',
          data: [35, 23, 56, 22, 97, 23, 64],
        },
      ]

      charts.forEach(({ id, color, data }) => {
        const canvas = document.getElementById(id)
        if (!canvas) {
          return
        }

        // new window.Chart(canvas, {
        //   type: 'line',
        //   data: {
        //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        //     datasets: [
        //       {
        //         backgroundColor: 'transparent',
        //         borderColor: color,
        //         borderWidth: 2,
        //         data,
        //         pointBackgroundColor: color,
        //       },
        //     ],
        //   },
        //   options: {
        //     maintainAspectRatio: false,
        //     plugins: {
        //       legend: {
        //         display: false,
        //       },
        //     },
        //     scales: {
        //       x: {
        //         display: false,
        //       },
        //       y: {
        //         display: false,
        //       },
        //     },
        //   },
        // })
      })
    }

    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = resolve
        script.onerror = reject
        document.body.appendChild(script)
      })

    dashboardScripts.reduce(
      (chain, scriptSrc) => chain.then(() => loadScript(scriptSrc)),
      Promise.resolve(),
    ).then(initCardCharts)
  }, [])

  const toggleSidebar = () => {
    const sidebar = document.querySelector('#sidebar')
    const sidebarInstance = window.coreui?.Sidebar?.getOrCreateInstance(sidebar)

    sidebarInstance?.toggle()
  }

  useEffect(() => {
    const header = document.querySelector('header.header')
    const handleScroll = () => {
      header?.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
    }

    document.addEventListener('scroll', handleScroll)
    return () => document.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
<Sidebar/>
    <div className="wrapper d-flex flex-column min-vh-100">

      <Header/>
     
     {/* <MainDashboard/> */}
      <main className="body flex-grow-1">
     <Outlet/>

      </main>
    <Footer/>
    </div>
    </>
  )
}

export default DashboardLayout
