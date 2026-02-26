import { Route, Routes } from 'react-router-dom';

import { AppShell } from './components/app-shell/AppShell';
import { ArticlePage } from './pages/ArticlePage';
import { HomePage } from './pages/HomePage';
import { TopicPage } from './pages/TopicPage';
import { UserPage } from './pages/UserPage';
import { PATHS } from './utils/constants';

function App() {
  return (
    <Routes>
      {/* I'm setting up a parent route and children route in order to use outlet in my AppShel , index
      means use this one if path is and in the single article path I mimick reddit url structure, 
      comment is needed to distinguis it form topic route */}

      <Route path={PATHS.HOME} element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path={PATHS.ARTICLE} element={<ArticlePage />} />
        <Route path={PATHS.TOPIC} element={<TopicPage />} />
        <Route path={PATHS.USERNAME} element={<UserPage />} />
      </Route>
    </Routes>
  );
}

export default App;
