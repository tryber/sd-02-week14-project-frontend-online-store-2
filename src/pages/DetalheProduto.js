import React from 'react';
import { Link } from 'react-router-dom';
import DescricaoeQuant from '../components/DescricaoeQuant';
import FormComment from '../components/FormComment';
// import CommentList from '../components/CommentList'; utilizar este componente aqui ou no FormComment.

class DetalheProduto extends React.Component {

  render() {
    return (
      <div>
        <DescricaoeQuant />
        <FormComment />
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

export default DetalheProduto;
