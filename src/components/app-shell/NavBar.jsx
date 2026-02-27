import { SearchBar } from './SearchBar';
import { useLocation, useMatch } from 'react-router-dom';
import { PATHS } from '../../utils/constants';

export function NavBar() {
  const location = useLocation();

  const isHomePage = location.pathname === PATHS.HOME;

  // useMatch is used to decode path parameters
  const isArticlePage = useMatch(PATHS.ARTICLE);
  const isTopicPage = useMatch(PATHS.TOPIC);
  const isUserPage = useMatch(PATHS.USER);

  return (
    <header className="navbar">
      <h1>Nav Bar Placeholder</h1>
      <nav className="navbar-nav">
        {/* add link to user page (must look like user menu*/}

        {isHomePage && (
          <>
            {/* add link to drawer (must look like hambruger menu */}
            <SearchBar />
          </>
        )}

        {isArticlePage && (
          <>
            {/* add link to share must look like three vertical dots*/}
            {/* add X ixon to close and go bac to previous cree n*/}
          </>
        )}

        {(isTopicPage || isUserPage) && <> {/* add back arrow ixon to go back */}</>}
      </nav>
    </header>
  );
}
