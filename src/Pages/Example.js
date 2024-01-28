import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import '../styles/Portfolio.css';
function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <div className='modaltext'>Modal heading</div></Modal.Title>
        </Modal.Header>
        <Modal.Body> Woohoo, you are reading this text in a modal!
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;