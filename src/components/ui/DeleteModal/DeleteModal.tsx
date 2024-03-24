import './deleteModal.scss';
import { Button, Card, Modal } from 'react-bootstrap';
import { useAppDispatch } from '../../../app/hooks.ts';
import { Action } from '@reduxjs/toolkit';

interface DeleteWorkoutModalProps {
	name: string;
	show: boolean;
	handleClose: () => void;
	dispatchFunction: () => Action;
}

const DeleteModal = ({
	name,
	show,
	handleClose,
	dispatchFunction,
}: DeleteWorkoutModalProps) => {
	const dispatch = useAppDispatch();

	return (
		<>
			<Modal
				data-bs-theme='dark'
				show={show}
				onHide={() => {}}
				backdrop='static'
				keyboard={true}
			>
				<Card className='bg-primary'>
					<Card.Header as='h3'>Delete "{name}"</Card.Header>
					<Card.Body className='pt-4 pb-5'>
						Are you sure, you want to delete the "{name}"?
					</Card.Body>
					<Card.Footer className='d-flex justify-content-end gap-3'>
						<Button variant='grey' onClick={handleClose}>
							Close
						</Button>
						<Button
							className='bg-danger'
							type='submit'
							variant='secondary'
							onClick={() => {
								dispatch(() => dispatch(dispatchFunction()));
							}}
						>
							Delete
						</Button>
					</Card.Footer>
				</Card>
			</Modal>
		</>
	);
};

export default DeleteModal;
