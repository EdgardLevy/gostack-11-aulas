import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { Header, RepositoryInfo } from './styles';
import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} /> Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img src="" alt="" />
          <div>
            <strong>repo</strong>
            <p>descricao</p>
          </div>
        </header>
        <ul />
      </RepositoryInfo>
    </>
  );
};

export default Repository;
