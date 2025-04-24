import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import MainLayout     from './layouts/MainLayout'
import LoginPage      from './pages/LoginPage'
import HomePage       from './pages/HomePage'
import AboutPage      from './pages/AboutPage'

// Learning pages
import EarlyYears     from './pages/Learning/EarlyYears'
import WhatWeTeach    from './pages/Learning/WhatWeTeach'
import HowWeTeach     from './pages/Learning/HowWeTeach'
import English        from './pages/Learning/English'
import Mathematics        from './pages/Learning/Mathematics'
import Science        from './pages/Learning/Science'
import Sustainability        from './pages/Learning/Sustainability'
import Wellness        from './pages/Learning/Wellness'
import GlobalProject        from './pages/Learning/GlobalProject'
import ICT        from './pages/Learning/ICT'
import Music        from './pages/Learning/Music'
import PE        from './pages/Learning/PE'
import Assessment        from './pages/Learning/Assessment'


// Activities pages
import Afterschool    from './pages/Activities/Afterschool'
import StudentLead    from './pages/Activities/StudentLeadership'
import ECAClubs       from './pages/Activities/ECAClubs'
import Events         from './pages/Activities/Events'

// Information pages
import NewsPage       from './pages/Information/News'
import CalendarPage   from './pages/Information/Calendar'
import UniformPage   from './pages/Information/Uniform'

// Admission pages
import PolicyPage     from './pages/Admission/Policy'
import EcaSignup      from './pages/Admission/EcaSignup'
import AdmissionForm  from './pages/Admission/Form'
import FeesPage       from './pages/Admission/Fees'

// Other
import ContactPage    from './pages/Contact'
import BlogOverview   from './pages/BlogOverview'
import NewsDashboard  from './pages/NewsDashboard'
import BlogManager    from './pages/BlogManager'
import ProtectedLayout from './layouts/ProtectedLayout'

export default function AppRoutes() {
  return useRoutes([
    { path: '/login', element: <LoginPage /> },

    // everything else is behind auth
    {
      element: <ProtectedLayout />, 
      children: [
        { path: '/', element: <MainLayout><HomePage/></MainLayout> },
        { path: 'about', element: <MainLayout><AboutPage/></MainLayout> },

        { path: 'learning', element: <MainLayout><Outlet/></MainLayout>, children: [
          { index: true, element: <Navigate to="early-years" replace /> },
          { path: 'early-years', element: <EarlyYears/> },
          { path: 'what-we-teach', element: <WhatWeTeach/> },
          { path: 'how-we-teach', element: <HowWeTeach/> },
          { path: 'english', element: <English/> },
          { path: 'mathematics', element: <Mathematics/> },
          { path: 'science', element: <Science/> },
          { path: 'sustainability', element: <Sustainability/> },
          { path: 'wellness', element: <Wellness/> },
          { path: 'globalproject', element: <GlobalProject/> },
          { path: 'ict', element: <ICT/> },
          { path: 'music', element: <Music/> },
          { path: 'pe', element: <PE/> },
          { path: 'assessment', element: <Assessment/> },
        ]},

        { path: 'activities', element: <MainLayout><Outlet/></MainLayout>, children: [
          { path: 'afterschool', element: <Afterschool/> },
          { path: 'student-leadership', element: <StudentLead/> },
          { path: 'eca-clubs', element: <ECAClubs/> },
          { path: 'events', element: <Events/> },
        ]},

        { path: 'information', element: <MainLayout><Outlet/></MainLayout>, children: [
          { path: 'news', element: <NewsPage/> },
          { path: 'calendar', element: <CalendarPage/> },
          { path: 'uniform', element: <UniformPage/> },
        ]},

        { path: 'admission', element: <MainLayout><Outlet/></MainLayout>, children: [
          { path: 'policy', element: <PolicyPage/> },
          { path: 'eca-signup', element: <EcaSignup/> },
          { path: 'form', element: <AdmissionForm/> },
          { path: 'fees', element: <FeesPage/> },
        ]},

        { path: 'contact', element: <MainLayout><ContactPage/></MainLayout> },
        { path: 'blog', element: <MainLayout><BlogOverview/></MainLayout> },

        // your “app” tools
        { path: 'news-dashboard', element: <MainLayout><NewsDashboard/></MainLayout> },
        { path: 'blog-manager', element: <MainLayout><BlogManager/></MainLayout> },

        { path: '*', element: <Navigate to="/" replace /> },
      ]
    }
  ])
}
