import { FormEvent } from 'react';
import './createWorkoutModal.scss';
import { Modal, Button, Card } from 'react-bootstrap';
import Input from '../../ui/Input';

interface CreateWorkoutModalProps {
	show: boolean;
	handleClose: () => void;
	updateWorkoutDataStateOnCreateFormSubmit: (
		workoutName: string,
		workoutCategory: string
	) => void;
}

const CreateWorkoutModal = ({
	show,
	handleClose,
	updateWorkoutDataStateOnCreateFormSubmit,
}: CreateWorkoutModalProps) => {
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const workoutName = e.currentTarget.elements.namedItem(
			'workoutName'
		) as HTMLInputElement;
		const workoutCategory = e.currentTarget.elements.namedItem(
			'workoutCategory'
		) as HTMLInputElement;
		updateWorkoutDataStateOnCreateFormSubmit(
			workoutName.value,
			workoutCategory.value
		);
	};
	return (
		<>
			<Modal
				data-bs-theme='dark'
				show={show}
				onHide={handleClose}
				backdrop='static'
				keyboard={true}
			>
				<Card className='bg-primary'>
					<form onSubmit={handleSubmit} noValidate>
						<Card.Header as='h3'>Create Workout</Card.Header>
						<Card.Body>
							<Input
								id='workoutName'
								labelText='Name'
								col='col-12'
								inputType='text'
							/>
							<Input
								id='workoutCategory'
								labelText='Category'
								col='col-12'
								inputType='text'
							/>
						</Card.Body>
						<Card.Footer className='d-flex justify-content-end gap-3'>
							<Button variant='grey' onClick={handleClose}>
								Close
							</Button>
							<Button type='submit' variant='secondary' onClick={handleClose}>
								Create
							</Button>
						</Card.Footer>
					</form>
				</Card>
			</Modal>
		</>
	);
};

export default CreateWorkoutModal;
