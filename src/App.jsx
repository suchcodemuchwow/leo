import { Route, Routes } from "react-router-dom";
import "./app.scss";
import { AppLayout } from "./components/layout/AppLayout";
import { Main } from "./pages/main";
import { Starred } from "./pages/starred";
import { WatchLater } from "./pages/watch-later";

const App = () => (
  <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route path="/" element={<Main />} />
      <Route path="/starred" element={<Starred />} />
      <Route path="/watch-later" element={<WatchLater />} />
    </Route>
    <Route path="*" element={<h1 className="not-found">Page Not Found</h1>} />
  </Routes>
);

export default App;
