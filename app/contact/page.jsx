"use client";
import { useState } from 'react';
import formData from '../api/formSchema/route.json'; // JSON dosyasını import et

export default function Contact() {
    const [formDataValues, setFormDataValues] = useState({}); // Form verilerini saklamak için bir state

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormDataValues({
            ...formDataValues,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formDataValues); // Form verilerini konsola yazdır
        // Burada form verilerini işleyebilirsiniz
    };

    return (
        <div>
            <h1>Dinamik Form</h1>
            <div className='container'>
            <form {...formData.formAttributes} onSubmit={handleSubmit}>
                {formData.formElements.map((field, index) => (
                    <div key={index} className='flex flex-col gap-2'>
                        {field.type !== 'checkbox' && field.type !== 'file' && field.type !== 'select' ? (
                            <label htmlFor={field.id}>{field.label}</label>
                        ) : null}
                        {field.type === 'textarea' ? (
                            <textarea
                            className='border-1 border border-solid border-black'
                                id={field.id}
                                name={field.name}
                                value={formDataValues[field.name] || ''}
                                onChange={handleChange}
                                required
                            />
                        ) : field.type === 'select' ? (
                            <select
                            className='border-1 border border-solid border-black'
                                id={field.id}
                                name={field.name}
                                value={formDataValues[field.name] || ''}
                                onChange={handleChange}
                            >
                                {field.options.map((option, index) => (
                                    <option key={index} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        ) : field.type === 'file' ? (
                            <input
                            className='border-1 border border-solid border-black'
                                type={field.type}
                                id={field.id}
                                name={field.name}
                                onChange={handleChange}
                                required
                            />
                        ) : (
                            <input
                            className='border-1 border border-solid border-black'
                                type={field.type}
                                id={field.id}
                                name={field.name}
                                value={formDataValues[field.name] || ''}
                                onChange={handleChange}
                                checked={formDataValues[field.name] || false}
                                required
                            />
                        )}
                    </div>
                ))}
                <button type="submit" className='cta'>Gönder</button>
            </form>
            </div>
           
        </div>
    );
}
