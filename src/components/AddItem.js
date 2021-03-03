import React, {useEffect, useState} from 'react';

const AddItem = (props) => {
  const INITIAL_STATE = {
    title: '',
    type: '',
    description: '',
    contact: '',
  }

  const [items, setItems] = useState([]);
  const [item, setItem] = useState(INITIAL_STATE);

  const onDelete = (index) => {
    setItems(items.filter((_, idx) => index !== idx))
  };

  const onEdit = (index, item) => {
    setItems(items.map((i, idx) => index === idx ? item : i))
  };

  const onAdd = (newItem) => {
  }


  return (
    <div className="submit-form">
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={item.title}
              onChange={onEdit}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={item.description}
              onChange={onEdit}
              name="description"
            />
          </div>

          <button onClick={onAdd} className="btn btn-success">
            Submit
          </button>
        </div>
    </div>
  )
}

export default AddItem;
