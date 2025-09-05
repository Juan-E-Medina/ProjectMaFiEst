import React from 'react';

const Landing = () => {
    return (
        <div className="landing">
            <header className="landing-header">
                <h1>Bienvenido a MaFiEst</h1>
                <p>Tu plataforma de aprendizaje en línea.</p>
            </header>
            <main className="landing-main">
                <section className="landing-features">
                    <h2>Características</h2>
                    <ul>
                        <li>Acceso a cursos en diversas áreas.</li>
                        <li>Interacción con docentes y otros estudiantes.</li>
                        <li>Registro de logros y progreso.</li>
                    </ul>
                </section>
                <section className="landing-cta">
                    <h2>Comienza tu viaje de aprendizaje</h2>
                    <button onClick={() => window.location.href='/register'}>Regístrate</button>
                    <button onClick={() => window.location.href='/login'}>Iniciar Sesión</button>
                </section>
            </main>
            <footer className="landing-footer">
                <p>&copy; 2023 MaFiEst. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Landing;