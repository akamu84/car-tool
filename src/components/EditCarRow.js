import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import { carPropType } from '../propTypes/cars';

export class EditCarRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props.car,
    };

    this.defaultInputRef = createRef();

    this.change = this.change.bind(this);
    this.saveCar = this.saveCar.bind(this);
  }

  componentDidMount() {
    if (this.defaultInputRef.current) {
      this.defaultInputRef.current.focus();
    }
  }

  change({ target: { name, type, value } }) {
    this.setState({
      [name]: type === 'number' ? Number(value) : value,
    });
  }

  saveCar() {
    const {
      onSaveCar,
      car: { id },
    } = this.props;
    onSaveCar({ ...this.state, id });
  }

  render() {
    const {
      onCancelCar,
      car: { id },
    } = this.props;

    const { make, model, year, color, price } = this.state;
    return (
      <tr>
        <td>{id}</td>
        <td>
          <input
            type="text"
            id="edit-make-input"
            name="make"
            ref={this.defaultInputRef}
            value={make}
            onChange={this.change}
          />
        </td>
        <td>
          <input
            type="text"
            id="edit-model-input"
            name="model"
            value={model}
            onChange={this.change}
          />
        </td>
        <td>
          <input
            type="number"
            id="edit-year-input"
            name="year"
            value={year}
            onChange={this.change}
          />
        </td>
        <td>
          <input
            type="text"
            id="edit-color-input"
            name="color"
            value={color}
            onChange={this.change}
          />
        </td>
        <td>
          <input
            type="number"
            id="edit-make-input"
            name="price"
            value={price}
            onChange={this.change}
          />
        </td>
        <td>
          <button type="button" onClick={this.saveCar}>
            Save
          </button>
          <button type="button" onClick={onCancelCar}>
            Cancel
          </button>
        </td>
      </tr>
    );
  }
}

EditCarRow.propTypes = {
  car: carPropType.isRequired,
  onSaveCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
};
