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
          <Route path="students" element={<StudentsPage />} />
          <Route path="student/add" element={<StudentAddPage />} />
          <Route path="student/edit/:id" element={<StudentEditPage />} />
          <Route path="instructors" element={<InstructorsPage />} />
          <Route path="instructor/add" element={<InstructorAddPage />} />
          <Route path="instructor/edit/:id" element={<InstructorEditPage />} />
          <Route path="rooms" element={<RoomsPage />} />
          <Route path="room/add" element={<NotImplemented />} />
          <Route path="room/edit/:id" element={<NotImplemented />} />
          <Route path="room/delete/:id" element={<NotImplemented />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="course/add" element={<NotImplemented />} />
          <Route path="course/edit/:id" element={<NotImplemented />} />
          <Route path="course/delete/:id" element={<NotImplemented />} />
          <Route path="batches" element={<BatchesPage />} />
          <Route path="batch/add" element={<NotImplemented />} />
          <Route path="batch/edit/:id" element={<NotImplemented />} />
          <Route path="batch/delete/:id" element={<NotImplemented />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
