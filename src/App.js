import { Routes, Route } from 'react-router-dom'
import "./App.css"

import Layout from "./components/Layout"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Login from "./pages/Login"
import NotFound from './pages/NotFound'
import Post from './pages/Post'

import { AuthProvider } from './context/AuthProvider'
import { RequireAuth } from './context/RequireAuth'


function App() {

  return (
    <div className="App">
        <AuthProvider>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <RequireAuth>
                <Blog />
            </RequireAuth>
          } />
          <Route path="posts/:id" element={<Post />} />
          <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
    </AuthProvider>
    </div>
  );
}

export default App;
