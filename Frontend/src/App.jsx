import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
// import ResumeUpload from './components/ResumeUpload';
// import JobDescription from './components/JobDescription';
// import AnalysisResult from './components/AnalysisResult';
// import Profile from './components/Profile';
// import Login from './components/Auth/Login';
// import SignUp from './components/Auth/SignUp';


function Layout({ children }) {
  const location = useLocation();
  const hideHeaderFooter = ['/login', '/signup'].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">{children}</main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/upload" element={<ResumeUpload />} />
          <Route path="/description" element={<JobDescription />} />
          <Route path="/analysis" element={<AnalysisResult />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}
