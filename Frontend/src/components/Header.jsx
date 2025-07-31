import { Link } from 'react-router-dom';
import logo from '../assets/logo1.svg'
export default function Header() {
  return (
    <header className="w-full px-6 py-4 sticky top-0 z-50">
        <div className="w-full flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-[#041536]">
                <img src={logo} alt="Logo" className="h-7 w-7 pt-1" />
                <span>JobMatch AI</span>
            </Link>

            <nav className="space-x-4">
            <Link to="/login" className="text-[#041536] hover:text-[#253046] font-medium">Login</Link>
            <Link
                to="/signup"
                className="bg-[#2772DD] text-white px-4 py-2.5 rounded-[10px] hover:bg-blue-500 transition"
            >
            Sign Up
            </Link>
            </nav>
        </div>
    </header>

  );
}
