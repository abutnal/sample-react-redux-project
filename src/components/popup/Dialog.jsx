import React from "react";
import { Modal, Button } from "react-bootstrap";
const Dialog = (props) => {
  return (<>
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.data.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.data.body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
          </Button>
      </Modal.Footer>
    </Modal>
  </>)
}

export default Dialog;