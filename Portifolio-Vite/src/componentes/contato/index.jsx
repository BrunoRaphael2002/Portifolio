import { useState } from 'react';
import emailjs from 'emailjs-com'; // Importe a biblioteca EmailJS

import './index.css';

function Contato() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        assunto: '',
        mensagem: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await emailjs.sendForm(
                'service_599nbb2', // Substitua pelo seu ID de serviço do EmailJS
                'template_bulf3hv', // Substitua pelo ID do seu template de email
                e.target,
                'w0ret6yc-zUsJL8mJ' // Substitua pelo seu ID de usuário do EmailJS
            );

            console.log('E-mail enviado com sucesso!', response);
            // Adicione lógica adicional conforme necessário para lidar com o sucesso do envio
        } catch (error) {
            console.error('Erro ao enviar o e-mail:', error);
            // Adicione lógica adicional para lidar com erros de envio
        }

        // Reinicie o estado do formulário após o envio bem-sucedido
        setFormData({
            nome: '',
            email: '',
            assunto: '',
            mensagem: ''
        });
    };

    return (
        <>
            <section className="sessao-titulo"><h1>Contato</h1></section>
            <div className='contato' id='Contato'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="assunto">Assunto:</label>
                        <input
                            type="text"
                            id="assunto"
                            name="assunto"
                            value={formData.assunto}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="mensagem">Mensagem:</label>
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            value={formData.mensagem}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>

                <div className='limitar-sessao box'>
                    <h3>Caso queira Entrar em contato de forma mais Objetiva e Rápida clique no Botão saiba Mais </h3>
                    <a className='btn1' href="https://wa.me/5583982190654" target='_blank'>Saiba mais</a>
                </div>
            </div>
        </>
    );
}

export default Contato;
