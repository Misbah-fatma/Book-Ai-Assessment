import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export const Navbar = () => {
  const { theme } = useTheme();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <>
      <nav
        className={`sticky top-0 ${theme === 'dark' ? 'bg-[#1E293B]' : 'bg-gray-100'
          } z-50 flex justify-between items-center px-4 py-2`}
      >
        <div className="flex items-center">
          <div className="flex items-center sm:order-1 order-2">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 mr-4"
            />
            <span className={`text-xl font-bold px-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              BooKAI
            </span>
          </div>
          <Menu />
        </div>
        <div className="flex items-center space-x-4 sm:order-2 order-1">
          <ThemeToggle />
          <LoginButton onClick={openLoginModal} />
        </div>
      </nav>

      <Dialog
        open={isLoginModalOpen}
        onClose={closeLoginModal}
        fullWidth
        maxWidth="sm"

      >
        <DialogTitle>
          <div className="flex items-center justify-between">
            <span style={{ color: "#90caf9" }}>Login</span>
            <IconButton onClick={closeLoginModal} aria-label="close">
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <form>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"

            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"

            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {/* handle login logic */ }}
          >
            Login
          </Button>

        </DialogActions>
      </Dialog>
    </>
  );
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { theme } = useTheme();

  return (
    <div className="flex items-center sm:order-2 order-1">
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <div className="flex flex-col items-center justify-center">
            <div
              className={`w-8 h-1 bg-current rounded-sm mb-1 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''
                } ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}
            ></div>
            <div
              className={`w-8 h-1 bg-current rounded-sm mb-1 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''
                } ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}
            ></div>
            <div
              className={`w-8 h-1 bg-current rounded-sm transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''
                } ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}
            ></div>
          </div>
        </button>
      </div>
      <ul
        className={`${isOpen ? 'block' : 'hidden'
          } sm:flex sm:items-center sm:space-x-6 text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-700'
          } absolute top-full left-0 w-full bg-[#1E293B] sm:bg-transparent sm:static sm:flex-row sm:w-auto`}
      >
        <NavItem label="OVERVIEW" href="#overview" />
        <NavItem label="AUTHENTICATION" href="#authentication" />
        <NavItem label="ENDPOINTS" href="#endpoints" />
        <NavItem label="TUTORIAL" href="#tutorial" />
        <NavItem label="CODE EXAMPLES" href="#code-examples" />
        <NavItem label="PRICING" href="#pricing" />
      </ul>
    </div>
  );
};

const NavItem = ({ label, href }) => {
  const { theme } = useTheme();
  return (
    <li
      className={`cursor-pointer ${theme === 'dark' ? 'hover:text-[#22d3ee]' : 'hover:text-blue-500'
        } transition-colors duration-300 pl-4 sm:pl-0`}
    >
      <a href={href} className="block py-2 sm:py-0">
        {label}
      </a>
    </li>
  );
};

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="relative">
      <input
        type="checkbox"
        className="sr-only"
        checked={theme === 'light'}
        onChange={toggleTheme}
      />
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
      >
        <mask id="moon-mask">
          <rect x="0" y="0" width="20" height="20" fill="white"></rect>
          <circle cx="11" cy="3" r="8" fill="black"></circle>
        </mask>
        <circle
          cx="10"
          cy="10"
          r="6"
          mask="url(#moon-mask)"
        ></circle>
        <g>
          <circle cx="18" cy="10" r="1.5"></circle>
          <circle cx="14" cy="16.928" r="1.5"></circle>
          <circle cx="6" cy="16.928" r="1.5"></circle>
          <circle cx="2" cy="10" r="1.5"></circle>
          <circle cx="6" cy="3.1718" r="1.5"></circle>
          <circle cx="14" cy="3.1718" r="1.5"></circle>
        </g>
      </svg>
    </label>
  );
};

const LoginButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
      Login
    </button>
  );
};
