import  { useState } from 'react';
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
            const response = await fetch('/enviar-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('E-mail enviado com sucesso!');
                // Aqui você pode adicionar lógica para lidar com o sucesso do envio
            } else {
                console.error('Erro ao enviar o e-mail.');
                // Aqui você pode adicionar lógica para lidar com o erro de envio
            }
        } catch (error) {
            console.error('Erro ao enviar o e-mail:', error);
            // Aqui você pode adicionar lógica para lidar com erros de rede ou outros erros
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
        <><section className="sessao-titulo" ><h1>Contato</h1></section>
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

            <div className= 'limitar-sessao box'>
                <h3>Caso queira Entrar em contato de forma mais Objetiva e Rapida clique no Botão saiba Mais </h3>
                
               <a className='btn1'href="https://wa.me/5583982190654" target='_blank' >Saiba mais </a>
            </div>
        </div>
        </>
    );
}

export default Contato;
