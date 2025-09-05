import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Bienvenido al Panel del Estudiante</h1>
            <p>Desde aquí puedes acceder a tus cursos, ver tu progreso y tus logros.</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/student/courses">Cursos</Link>
                    </li>
                    <li>
                        <Link to="/student/progress">Progreso</Link>
                    </li>
                    <li>
                        <Link to="/student/achievements">Logros</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Dashboard;