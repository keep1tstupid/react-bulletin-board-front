import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import {connect, useDispatch} from "react-redux";
import {addFile, editItem} from "../../redux/actions";

const EditItem = (props) => {
    const dispatch = useDispatch();

    const INITIAL_STATE = {
        id: props.itemBeingEdited.id,
        author: props.itemBeingEdited.username,
        title: props.itemBeingEdited.title,
        type: props.itemBeingEdited.type,
        description: props.itemBeingEdited.description,
        attachment: props.itemBeingEdited.attachmentId,
        contactInfo: props.itemBeingEdited.contactInfo,
        state: props.itemBeingEdited.state,
    }

    const [item, setItem] = useState(INITIAL_STATE);
    const [show, setShow] = useState(false);

    const reload = () => window.location.reload();
    const handleShow = () => {
        setShow(true);
        console.log(INITIAL_STATE)
    }
    const handleClose = () => {
        setShow(false);
        reload();
        // setItem(INITIAL_STATE);
    }
    const inputChanged = (event) => {
        setItem({...item, [event.target.name]: event.target.value});
    };

    // todo: show existing file preview

    const fileAdded = (event) => {
        const file = event.target.files[0];
        console.log("file is: ", file);
        dispatch(addFile(file));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(editItem(item));
        handleClose();
    }

    return (
        <>
            <Button variant="outline-secondary" onClick={handleShow}>
                Edit
            </Button>
            <Modal
                size='lg'
                aria-labelledby='contained-modal-title-vcenter'
                show={show}
                onHide={handleClose}
                onExit={handleClose}
            >
                <Modal.Header>
                    <Modal.Title>Edit Item YaY</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p> {item.title} </p>
                    <Form onSubmit={handleSubmit}>
                    <Form.Group controlId='formTitle'>
                        <Form.Label>Title: </Form.Label>
                        <Form.Control
                            type='text'
                            name='title'
                            placeholder='Enter title'
                            value={item.title}
                            onChange={inputChanged}
                            required
                        />
                        <Form.Text className='text-muted'>
                            Keep your title short and descriptive.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId='typeSelector'>
                        <Form.Label>Type: </Form.Label>
                        <Form.Control
                            as='select'
                            name='type'
                            value={item.type}
                            onChange={inputChanged}
                        >
                            {props.types.map((type, index) => <option key={index}> {type} </option>) }
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='textArea'>
                        <Form.Label>Description: </Form.Label>
                        <Form.Control
                            as='textarea'
                            rows={3}
                            name='description'
                            value={item.description}
                            onChange={inputChanged}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.File
                            id='FormControlFile'
                            label='Add file: '
                            name='attachment'
                            onChange={fileAdded}
                        />
                    </Form.Group>

                    <Form.Group controlId='textAreaContact'>
                        <Form.Label>Contact info: </Form.Label>
                        <Form.Control
                            as='textarea'
                            rows={2}
                            name='contactInfo'
                            value={item.contactInfo}
                            onChange={inputChanged}
                        />
                    </Form.Group>

                    <Button type='submit'> Send to moderation / Update </Button> {' '}
                    <Button variant='outline-secondary' onClick={handleClose}> Cancel </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );

}

export default connect(
    (state, ownProps) => {
        return {
            types: state.items.types,
            itemBeingEdited: state.items.itemData.find((item) => item.id === ownProps.itemId)
        }
    }, {}
)(EditItem);