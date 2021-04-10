import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { connect, useDispatch } from "react-redux";
import { editItem } from "../../redux/items-actions";
import {setNotification} from "../../redux/notification-actions";

// todo: WHERE IS FILE NAME AGAIN?!

const EditItem = (props) => {

    const getFileAttributes = (attachmentId) => {
        const file = props.attachments.find((file) => file.id === attachmentId)
        const path = file ? `${file.url}/${file.name}`: null;
        const name = file ? file.name : null;
        const exist = Boolean(file);

        return {
            name,
            path,
            exist,
        }
    }

    const dispatch = useDispatch();

    const INITIAL_STATE = {
        id: props.itemBeingEdited.id,
        author: props.itemBeingEdited.username,
        title: props.itemBeingEdited.title,
        type: props.itemBeingEdited.type,
        description: props.itemBeingEdited.description,
        attachmentId: props.itemBeingEdited.attachmentId,
        attachmentFile: '',
        contactInfo: props.itemBeingEdited.contactInfo,
        state: 'IN_MODERATION',
    }

    const [item, setItem] = useState(INITIAL_STATE);
    const fileAttributes = getFileAttributes(item.attachmentId);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
        // setItem(INITIAL_STATE);
    }

    const inputChanged = (event) => {
        setItem({...item, [event.target.name]: event.target.value});
    };

    const fileAdded = (event) => {
        //console.log("file added! ", event);
        const file = event.target.files[0];
        console.log("file is: ", file);
        setItem({...item, attachmentFile: file})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(editItem(item));
        dispatch(setNotification({variant: 'warning', msg: 'item is updated and sent for moderation'}))
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
                    <Modal.Title>Edit Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                        {(fileAttributes.exist) ?
                          (<>
                              <p>Existing file: {fileAttributes.name}</p>
                              {/*<img src={fileAttributes.path} alt="attachment"/>*/}
                              <Form.Group>
                                  <Form.File
                                    id='FormControlFile'
                                    label='Replace file: '
                                    name='attachment'
                                    onChange={fileAdded}
                                  />
                              </Form.Group>
                          </>)
                          :
                          (<>
                              <Form.Group>
                              <Form.File
                                id='FormControlFile'
                                label='Add file: '
                                name='attachment'
                                onChange={fileAdded}
                              />
                          </Form.Group>
                          </>) }

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
            itemBeingEdited: state.items.itemData.find((item) => item.id === ownProps.itemId),
            attachments: state.items.allAttachments,
        }
    }, {}
)(EditItem)