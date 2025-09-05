import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Bienvenido a tu Panel Independiente</h1>
            <p>Desde aquí puedes acceder a tus cursos y ver tu progreso.</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/independent/courses">Cursos Disponibles</Link>
                    </li>
                    <li>
                        <Link to="/independent/progress">Tu Progreso</Link>
                    </li>
                    <li>
                        <Link to="/independent/achievements">Tus Logros</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Dashboard;