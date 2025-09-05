import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Panel de Administración</h1>
            <p>Bienvenido al panel de administración de MaFiEst.</p>
            <div className="dashboard-links">
                <Link to="/admin/manage-users">Gestionar Usuarios</Link>
                <Link to="/admin/manage-groups">Gestionar Grupos</Link>
                <Link to="/admin/manage-achievements">Gestionar Logros</Link>
            </div>
        </div>
    );
};

export default Dashboard;