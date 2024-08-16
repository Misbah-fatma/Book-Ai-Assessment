import { Navbar } from './components/Navbar';
import { Pricing } from './components/Pricing';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Snowfall from './components/SnowFall';

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { theme } = useTheme();

  return (
    <div
      className={`w-full min-h-screen ${
        theme === 'dark' ? 'bg-[#0F172A]' : 'bg-white'
      } font-inter relative`}
    >
      <Snowfall /> {/* Add the Snowfall component */}
      <Navbar />
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        <Pricing />
      </main>
    </div>
  );
}

export default App;
