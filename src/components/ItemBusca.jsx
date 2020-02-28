import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ItemBusca.css';

class ItemBusca extends Component {
  static linkETitle(list) {
    return (
      <Link
        to={{
          pathname: `/products/${list.id}`,
          state: {
            id: `${list.id}`,
            title: `${list.title}`,
            price: `${list.price}`,
            thumbnail: `${list.thumbnail}`,
            attributes: list.attributes.map((item) => `${item.name}: ${item.value_name}`),
          },
        }}
      >
        <h2 className="itemTituloTexto">{list.title}</h2>
      </Link>
    );
  }

  botaoSalvaItem(list) {
    const { callbackCarrinho } = this.props;
    return (
      <button
        className="itemBotaoAdd"
        type="button"
        onClick={() => callbackCarrinho(list)}
      >
        Adicionar ao Carrinho
      </button>
    );
  }

  render() {
    const { listagem } = this.props;
    return (
      <div>
        <div className="containerBusca">
          {listagem.map((list) => (
            <div className="itemBusca" key={list.id}>
              <div className="itemTitulo">
                {ItemBusca.linkETitle(list)}
              </div>
              <div className="itemCorpo">
                <img className="itemImage" src={list.thumbnail} alt={list.title} />
                <p>
                  {new Intl.NumberFormat('pt-BR',
                    { style: 'currency', currency: 'BRL' }).format(list.price)}
                </p>
                {this.botaoSalvaItem(list)}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

ItemBusca.propTypes = {
  callbackCarrinho: PropTypes.func.isRequired,
  listagem: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    attributes: PropTypes.array,
  })).isRequired,
};

export default ItemBusca;
