import React from 'react';
import { Link } from 'react-router-dom';

const TeacherDashboard = () => {
    return (
        <div>
            <h1>Panel del Docente</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/teacher/upload-exams">Subir Exámenes</Link>
                    </li>
                    <li>
                        <Link to="/teacher/upload-workshops">Subir Talleres</Link>
                    </li>
                    <li>
                        <Link to="/teacher/progress">Ver Progreso de Estudiantes</Link>
                    </li>
                    <li>
                        <Link to="/teacher/achievements">Ver Logros de Estudiantes</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default TeacherDashboard;