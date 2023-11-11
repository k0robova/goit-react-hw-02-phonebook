import React from 'react';

export class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmitForm(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <input
          type="tel"
          name="number"
          required
          value={this.state.number}
          onChange={this.handleNameChange}
        />

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
