import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("../../pages/Home/Home"));
const About = lazy(() => import("../../pages/About/About"));
const Projects = lazy(() => import("../../pages/Projects/Projects"));
const Contacts = lazy(() => import("../../pages/Contacts/Contacts"));

export default function Main() {
  return (
    <main>
      <Suspense fallback={"Loader..."}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="projects" element={<Projects />}></Route>
          <Route path="contacts" element={<Contacts />}></Route>
        </Routes>
      </Suspense>
    </main>
  );
}
