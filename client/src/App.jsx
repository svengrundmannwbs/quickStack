import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import StartPage from "./pages/StartPage";
import StudentsPage from "./features/students/Students";
import StudentAddPage from "./features/students/components/StudentAddPage";
import StudentEditPage from "./features/students/components/StudentEditPage";
import InstructorsPage from "./features/instructors/Instructors";
import InstructorAddPage from "./features/instructors/components/InstructorAddPage";
import InstructorEditPage from "./features/instructors/components/InstructorEditPage";
import RoomsPage from "./features/rooms/Rooms";
import CoursesPage from "./features/courses/Courses";
import BatchesPage from "./features/batches/Batches";
import NotImplemented from "./pages/NotImplemented";
import Error404 from "./pages/Error404";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index element={<StartPage />} />
        </Route>
        <Route path="student">
          <Route index element={<StudentsPage />} />
          <Route path="add" element={<StudentAddPage />} />
          <Route path="edit/:id" element={<StudentEditPage />} />
        </Route>
        <Route path="instructor">
          <Route index element={<InstructorsPage />} />
          <Route path="add" element={<InstructorAddPage />} />
          <Route path="edit/:id" element={<InstructorEditPage />} />
        </Route>
        <Route path="room">
          <Route index element={<RoomsPage />} />
          <Route path="add" element={<NotImplemented />} />
          <Route path="edit/:id" element={<NotImplemented />} />
          <Route path="delete/:id" element={<NotImplemented />} />
        </Route>
        <Route path="course">
          <Route index element={<CoursesPage />} />
          <Route path="add" element={<NotImplemented />} />
          <Route path="edit/:id" element={<NotImplemented />} />
          <Route path="delete/:id" element={<NotImplemented />} />
        </Route>
        <Route path="batch">
          <Route index element={<BatchesPage />} />
          <Route path="add" element={<NotImplemented />} />
          <Route path="edit/:id" element={<NotImplemented />} />
          <Route path="delete/:id" element={<NotImplemented />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
