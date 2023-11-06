import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import { Routes, Route } from "react-router-dom";
import CourseDetail from "./CourseDetail";
import Register from "./User/Register";
import Login from "./User/Login";
import Dashboard from "./User/Dashboard";
import MyCourses from "./User/MyCourses";
import FavCourses from "./User/FavCourses";
import RecCourses from "./User/RecCourses";
import Profile from "./User/Profile";
import ChangePass from "./User/ChangePass";
import TeacherLogin from "./Teacher/TeacherLogin";
import TeacherRegister from "./Teacher/TeacherRegister";
import TeacherDashboard from "./Teacher/TeacherDashboard";
import TeacherProfile from "./Teacher/TeacherProfile";
import TeacherCourses from "./Teacher/TeacherCourses";
import AddCourses from "./Teacher/AddCourses";
import MyUsers from "./Teacher/MyUsers";
import TeacherChangePass from "./Teacher/TeacherChangePass";
import TeacherDetail from "./Teacher/TeacherDetail";
import AllCourses from "./AllCourses";
import PopularCourses from "./PopularCourses";
import PopularTeachers from "./PopularTeachers";
import CategoryCourses from "./CategoryCourses";
import TeacherLogout from "./Teacher/TeacherLogout";
import AddChapter from "./Teacher/AddChapter";
import CourseChapter from "./Teacher/CourseChapter";
import EditChapter from "./Teacher/EditChapter";
import EditCourse from "./Teacher/EditCourse";
import TeacherSkillCourses from "./Teacher/TeacherSkillCourses";
import Logout from "./User/Logout";
import EnrolledStudents from "./Teacher/EnrolledStudents";
import AddAssignment from "./Teacher/AddAssignment";
import ShowAssignment from "./Teacher/ShowAssignment";
import StudentAssignments from "./User/StudentAssignments";
import AddQuiz from "./Teacher/AddQuiz";
import AllQuiz from "./Teacher/AllQuiz";

function Main() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:course_id" element={<CourseDetail />} />
        <Route path="/userlogin" element={<Login />} />
        <Route path="/userregister" element={<Register />} />
        <Route path="/userdashboard" element={<Dashboard />} />
        <Route path="/mycourses" element={<MyCourses />} />
        <Route path="/favcourses" element={<FavCourses />} />
        <Route path="/reccourses" element={<RecCourses />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/changepass" element={<ChangePass />} />
        <Route path="/teacherlogin" element={<TeacherLogin />} />
        <Route path="/teacherregister" element={<TeacherRegister />} />
        <Route path="/teacherdashboard" element={<TeacherDashboard />} />
        <Route path="/teachercourses" element={<TeacherCourses />} />
        <Route path="/addcourses" element={<AddCourses />} />
        <Route path="/myusers" element={<MyUsers />} />
        <Route path="/teacherprofile" element={<TeacherProfile />} />
        <Route path="/teacherchangepass" element={<TeacherChangePass />} />
        <Route path="/teacherdetail/:teacher_id" element={<TeacherDetail />} />
        <Route path="/allcourses" element={<AllCourses />} />
        <Route path="/allchapters/:course_id" element={<CourseChapter />} />
        <Route path="/popularcourses" element={<PopularCourses />} />
        <Route path="/popularteachers" element={<PopularTeachers />} />
        <Route path="/category/:category_slug" element={<CategoryCourses />} />
        <Route path="/teacherlogout" element={<TeacherLogout />} />
        <Route path="/addchapter/:course_id" element={<AddChapter />} />
        <Route path="/category/:category_slug" element={<CategoryCourses />} />
        <Route path="/editchapter/:chapter_id" element={<EditChapter />} />
        <Route path="/editcourse/:course_id" element={<EditCourse />} />
        <Route path="/teacherskillcourses/:skill_name/:teacher_id" element={<TeacherSkillCourses/>} />
        <Route path="/userlogout" element={<Logout />} />
        <Route path="/enrolled-students/:course_id" element={<EnrolledStudents />} />
        <Route path="/add-assignment/:student_id/:teacher_id" element={<AddAssignment />} />
        <Route path="/show-assignment/:student_id/:teacher_id" element={<ShowAssignment />} />
        <Route path="/my-assignments/" element={<StudentAssignments />} />
        <Route path="/add-quiz" element={<AddQuiz />} />
        <Route path="/quiz" element={<AllQuiz />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Main;
