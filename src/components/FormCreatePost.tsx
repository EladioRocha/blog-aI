'use client';

import React, { useState } from 'react';

export default function FormCreatePost() {
    const [topic, setTopic] = useState('');
    const [keywords, setKeywords] = useState('');
    const [generating, setGenerating] = useState(false);

    return (
        <div className='h-full overflow-hidden bg-gray-800 text-gray-100'>
            {!!generating && (
                <div className='text-purple-500 flex h-full animate-pulse items-center justify-center w-full flex-col'>
                    <h6>Generando contenido...</h6>
                </div>
            )}
            {!generating && (
                <div className='w-full h-full flex flex-col overflow-auto'>
                    <form className='m-auto w-full max-w-md bg-gray-700 p-6 rounded-lg shadow-lg border border-gray-600'>
                        <div className='mb-4'>
                            <label className='block text-sm font-bold mb-2'>Tema del blog:</label>
                            <textarea 
                                className='resize-none border border-gray-600 bg-gray-800 w-full text-gray-100 px-4 py-2 rounded'
                                placeholder='Escribe el tema de tu blog'
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                maxLength={80}
                            ></textarea>
                        </div>
                        <div className='mb-4'>
                            <label className='block text-sm font-bold mb-2'>Palabras clave:</label>
                            <textarea 
                                className='resize-none border border-gray-600 bg-gray-800 w-full text-gray-100 px-4 py-2 rounded'
                                placeholder='Escribe las palabras clave de tu blog'
                                value={keywords}
                                onChange={(e) => setKeywords(e.target.value)}
                                maxLength={80}
                            ></textarea>
                            <small className='block text-gray-400 mt-1'>Separadas por comas</small>
                        </div>
                        <button 
                            type='submit'
                            className='w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 text-gray-100 font-bold rounded'
                            disabled={!topic || !keywords}
                        >
                            Generar publicación
                        </button>
                    </form>
                </div>
            )}
        </div>
    )
}