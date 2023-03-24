import { Component } from 'react';

const EditMaterialModal = ({ onClose, onEdit }) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          onEdit();
          onClose();
        }}
      >
        now you can edit
      </button>
      <button type="button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};
export class Material extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { item, onDelete, onUpdate } = this.props;
    const { isModalOpen } = this.state;
    return (
      <div>
        <p>
          <b>Title:</b> {item.title}
        </p>
        <p>
          <b>Link:</b> {item.link}
        </p>
        <button type="button" onClick={() => onDelete(item.id)}>
          Delete
        </button>
        <button
          type="button"
          onClick={this.openModal}
          // onClick={() => onUpdate({ id: item.id, title: Date.now() })}
        >
          Edit
        </button>
        {isModalOpen && (
          <EditMaterialModal
            onClose={this.closeModal}
            onEdit={() => onUpdate({ id: item.id, title: Date.now() })}
          />
        )}
      </div>
    );
  }
}
