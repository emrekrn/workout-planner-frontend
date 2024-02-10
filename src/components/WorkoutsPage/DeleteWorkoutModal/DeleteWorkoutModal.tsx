import React, { useContext } from 'react';
import './deleteWorkoutModal.scss';
import { Button, Card, Modal } from 'react-bootstrap';
import { UserAuthenticationContext } from '../../../context/UserAuthenticationContext';

interface DeleteWorkoutModalProps {
	id: number;
	show: boolean;
	handleClose: () => void;
	updateWorkoutDataStateOnDeleteWorkout: (id: number) => void;
}

const DeleteWorkoutModal = ({
	id,
	show,
	handleClose,
	updateWorkoutDataStateOnDeleteWorkout,
}: DeleteWorkoutModalProps) => {
	const { userId } = useContext(UserAuthenticationContext);
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
					<Card.Header as='h3'>Delete Workout</Card.Header>
					<Card.Body className='pt-4 pb-5'>
						Are you sure, you want to delete the workout?
					</Card.Body>
					<Card.Footer className='d-flex justify-content-end gap-3'>
						<Button
							variant='grey'
							onClick={() => {
								handleClose();
							}}
						>
							Close
						</Button>
						<Button
							className='bg-danger'
							type='submit'
							variant='secondary'
							onClick={() => {
								updateWorkoutDataStateOnDeleteWorkout(id);
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

export default DeleteWorkoutModal;
