// Modal de inclusão/edição de lançamentos.

import React, { useState } from 'react';
import Modal from 'react-modal';
import './styles.css';

const CUSTOM_STYLE_MODAL = {
  overlay: {
    position: 'fixed',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    top: '55%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export default function TransactionModal(props) {
  const { onSave, dataSelected, isEdit, onClose } = props;
  const [formData, setFormData] = useState(dataSelected);
  const title = isEdit ? 'Edição de lançamento' : 'Inclusão de lançamento';

  const validate = () => {
    const { description, value } = formData;
    const validated = description && description !== '' && value > 0;
    return validated;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSave(formData, isEdit);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose(null);
    }
  };

  return (
    <div>
      <Modal isOpen={true} style={CUSTOM_STYLE_MODAL}>
        <div className="title">
          <h4>{title}</h4>
          <a
            href="#!"
            className="waves-effect waves-light btn red darken-4 modal-close"
            onClick={() => onClose(null)}
          >
            X
          </a>
        </div>
        <form action="" onSubmit={handleFormSubmit}>
          <fieldset>
            <legend>
              <label>Tipo de lançamento</label>
            </legend>
            <div className="items-type">
              <label className="deep-orange-text text-lighten-2">
                <input
                  name="type"
                  type="radio"
                  value="-"
                  onChange={handleInputChange}
                  checked={formData.type === '-'}
                  disabled={isEdit}
                />
                <span>Despesa</span>
              </label>
              <label className="green-text text-lighten-1">
                <input
                  name="type"
                  type="radio"
                  value="+"
                  onChange={handleInputChange}
                  checked={formData.type === '+'}
                  disabled={isEdit}
                />
                <span>Receita</span>
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>
              <label>Categorias</label>
            </legend>

            <div className="items-grid">
              <label
                className={formData.category === 'Mercado' ? 'selected' : ''}
              >
                <input
                  name="category"
                  type="radio"
                  value="Mercado"
                  onChange={handleInputChange}
                />
                <i className="small material-icons">shopping_cart</i>
                <span>Mercado</span>
              </label>

              <label
                className={formData.category === 'Receita' ? 'selected' : ''}
              >
                <input
                  name="category"
                  type="radio"
                  value="Receita"
                  onChange={handleInputChange}
                />
                <i className="small material-icons">local_atm</i>
                <span>Receita</span>
              </label>

              <label
                className={formData.category === 'Salário' ? 'selected' : ''}
              >
                <input
                  name="category"
                  type="radio"
                  value="Salário"
                  onChange={handleInputChange}
                />
                <i className="small material-icons">attach_money</i>
                <span>Salário</span>
              </label>

              <label
                className={formData.category === 'Transporte' ? 'selected' : ''}
              >
                <input
                  name="category"
                  type="radio"
                  value="Transporte"
                  onChange={handleInputChange}
                />
                <i className="small material-icons">drive_eta</i>
                <span>Transporte</span>
              </label>

              <label
                className={formData.category === 'Aluguel' ? 'selected' : ''}
              >
                <input
                  name="category"
                  type="radio"
                  value="Aluguel"
                  onChange={handleInputChange}
                />
                <i className="small material-icons">home</i>
                <span>Aluguel</span>
              </label>

              <label
                className={formData.category === 'Compras' ? 'selected' : ''}
              >
                <input
                  name="category"
                  type="radio"
                  value="Compras"
                  onChange={handleInputChange}
                />
                <i className="small material-icons">business_center</i>
                <span>Compras</span>
              </label>

              <label
                className={formData.category === 'Impostos' ? 'selected' : ''}
              >
                <input
                  name="category"
                  type="radio"
                  value="Impostos"
                  onChange={handleInputChange}
                />
                <i className="small material-icons">receipt</i>
                <span>Impostos</span>
              </label>

              <label
                className={formData.category === 'Outros' ? 'selected' : ''}
              >
                <input
                  name="category"
                  type="radio"
                  value="Outros"
                  onChange={handleInputChange}
                />
                <i className="small material-icons">linear_scale</i>
                <span>Outros</span>
              </label>
            </div>
          </fieldset>

          <div className="field">
            <label htmlFor="description">Descrição</label>
            <input
              id="description"
              name="description"
              type="text"
              className="validate"
              required
              defaultValue={formData && formData.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="value" style={{ left: '0px' }}>
                Valor
              </label>
              <input
                id="value"
                name="value"
                type="number"
                min="0"
                step="0.01"
                className="validate"
                required
                defaultValue={formData && formData.value}
                onChange={handleInputChange}
              />
            </div>

            <div className="field">
              <label htmlFor="yearMonthDay">Data</label>
              <input
                id="yearMonthDay"
                name="yearMonthDay"
                type="date"
                className="validate"
                required
                defaultValue={formData && formData.yearMonthDay}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className="waves-effect waves-light btn-small"
            disabled={!validate()}
          >
            Salvar
          </button>
        </form>
      </Modal>
    </div>
  );
}
