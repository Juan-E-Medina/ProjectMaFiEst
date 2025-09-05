import React, { useState } from 'react';
import axios from 'axios';

const UploadExams = () => {
    const [examData, setExamData] = useState({
        title: '',
        description: '',
        file: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExamData({
            ...examData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setExamData({
            ...examData,
            file: e.target.files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', examData.title);
        formData.append('description', examData.description);
        formData.append('file', examData.file);

        try {
            const response = await axios.post('/api/exams/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Examen subido con éxito');
        } catch (error) {
            console.error('Error al subir el examen:', error);
            alert('Error al subir el examen');
        }
    };

    return (
        <div>
            <h2>Subir Exámenes</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label>
                    <input
                        type="text"
                        name="title"
                        value={examData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Descripción:</label>
                    <textarea
                        name="description"
                        value={examData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Archivo:</label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <button type="submit">Subir Examen</button>
            </form>
        </div>
    );
};

export default UploadExams;