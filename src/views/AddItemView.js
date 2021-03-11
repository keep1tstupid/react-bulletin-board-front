import React from 'react';
import Header from "../components/Header";
import AddItem from "../components/AddItem";

const AddItemView = (props) => {
  return (
    <div>
      <Header />
      <AddItem {...props} />
    </div>
  );
}

export default AddItemView;
