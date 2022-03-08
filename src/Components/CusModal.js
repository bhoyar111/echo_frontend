import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button } from 'react-bootstrap';

const CusModal = ({ isShowing, hide , children, title}) => isShowing ? ReactDOM.createPortal(
	<Fragment>
		<Modal
			show={isShowing}
			onHide={hide}
			keyboard={false}
			// dialogClassName="modal-80w"
			// animation={false}
		>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{children}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={hide}>
					Close
				</Button>
				{/* <Button variant="primary">Understood</Button> */}
			</Modal.Footer>
		</Modal>
	</Fragment>, document.getElementById('root')
) : null;

export default CusModal;