import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Andrea Bellini ·{' '}
        <Link to="/" className="footer-link">
          Home
        </Link>{' '}
        ·{' '}
        <a
          className="footer-link"
          href="https://github.com/vertigo1919/headless-press-api-frontend"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}
