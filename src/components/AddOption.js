import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  }

  onSubmitOption = (event) => {
    event.preventDefault();

    const option = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({error}));

    if (!error) {
      event.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option-form" onSubmit={this.onSubmitOption}>
          <input className="add-option-input" type="text" name="option"/>
          <button className="button">Add option</button>
        </form>
      </div>
    );
  }
}