import { Footer } from './Footer';
import { NavBar } from './NavBar';
import { Outlet } from 'react-router-dom';

export function AppShell() {
  return (
    <div className="app-shell">
      <NavBar />
      <main className="app-shell-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
