import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { FiLogIn } from 'react-icons/fi';
import Header from '../../components/Header';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <Header  />
                <main>
                    <h1>
                        Seu marketplace de coleta de resíduos.
                    </h1>
                    <p>
                        Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
                    </p>
                    <Link to="/cadastro">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>
                            Cadastre seu ponto de coleta
                        </strong>
                    </Link>
                </main>
            </div>
        </div>
    );
};

export default Home;