import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import Advisory from './pages/Advisory';
import Config from './pages/Config';
import AdminDashboard from './pages/admin/Dashboard';
import ManageUsers from './pages/admin/ManageUsers';
import ManageGroups from './pages/admin/ManageGroups';
import StudentDashboard from './pages/student/Dashboard';
import CoursesStudent from './pages/student/Courses';
import ProgressStudent from './pages/student/Progress';
import AchievementsStudent from './pages/student/Achievements';
import TeacherDashboard from './pages/teacher/Dashboard';
import UploadExams from './pages/teacher/UploadExams';
import UploadWorkshops from './pages/teacher/UploadWorkshops';
import IndependentDashboard from './pages/independent/Dashboard';
import CoursesIndependent from './pages/independent/Courses';
import ProgressIndependent from './pages/independent/Progress';
import AchievementsIndependent from './pages/independent/Achievements';

const AppRoutes = ({ userRole }) => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/contact" component={Contact} />
                <Route path="/advisory" component={Advisory} />
                <Route path="/config" component={Config} />

                {userRole === 'admin' && (
                    <>
                        <Route path="/admin/dashboard" component={AdminDashboard} />
                        <Route path="/admin/manage-users" component={ManageUsers} />
                        <Route path="/admin/manage-groups" component={ManageGroups} />
                    </>
                )}

                {userRole === 'student' && (
                    <>
                        <Route path="/student/dashboard" component={StudentDashboard} />
                        <Route path="/student/courses" component={CoursesStudent} />
                        <Route path="/student/progress" component={ProgressStudent} />
                        <Route path="/student/achievements" component={AchievementsStudent} />
                    </>
                )}

                {userRole === 'teacher' && (
                    <>
                        <Route path="/teacher/dashboard" component={TeacherDashboard} />
                        <Route path="/teacher/upload-exams" component={UploadExams} />
                        <Route path="/teacher/upload-workshops" component={UploadWorkshops} />
                    </>
                )}

                {userRole === 'independent' && (
                    <>
                        <Route path="/independent/dashboard" component={IndependentDashboard} />
                        <Route path="/independent/courses" component={CoursesIndependent} />
                        <Route path="/independent/progress" component={ProgressIndependent} />
                        <Route path="/independent/achievements" component={AchievementsIndependent} />
                    </>
                )}

                <Redirect to="/" />
            </Switch>
        </Router>
    );
};

export default AppRoutes;