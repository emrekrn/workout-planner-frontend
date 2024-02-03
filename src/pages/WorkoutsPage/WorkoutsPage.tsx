import React, { useState } from 'react';
import './workoutPage.scss';
import Workout from '../../components/WorkoutsPage/Workout/Workout';
import WorkoutDetails from '../../components/WorkoutsPage/WorkoutDetails/WorkoutDetails';
import { Button } from 'react-bootstrap';
import CreateWorkoutModal from '../../components/WorkoutsPage/CreateWorkoutModal/CreateWorkoutModal';
import { WorkoutData } from '../../model/WorkoutDataModel';
import { workoutData } from '../../utils/testData/data';

const WorkoutsPage = () => {
	const [showCreateWorkoutModal, setShowCreateWorkoutModal] = useState(false);
	const [workoutDataState, setWorkoutDataState] =
		useState<WorkoutData[]>(workoutData);
	const [isSelected, setIsSelected] = useState(false);

	const updateStateOnFormSubmit = (newWorkoutData: WorkoutData) => {
		setWorkoutDataState((prev) => [...prev, newWorkoutData]);
	};
	const workoutsElement = workoutDataState.map(({ workoutName }) => (
		<Workout
			workoutName={workoutName}
			selectWorkout={() => handleSelectWorkout}
			isSelected={isSelected}
		/>
	));

	const handleSelectWorkout = (): void => {
		setIsSelected(true);
	};

	const handleShowCreateWorkoutModal = () => {
		setShowCreateWorkoutModal(true);
	};

	const handleCloseCreateWorkoutModal = () => {
		setShowCreateWorkoutModal(false);
	};

	return (
		<div className='workout-page d-flex'>
			<div className='workout-cards-field d-flex flex-column align-items-center pt-5'>
				<div className='workout-cards-field-header w-100 d-flex align-items-center justify-content-between'>
					<h1 className='ms-4 text-white'>My Workouts</h1>
					<Button
						variant='secondary'
						className='me-5'
						onClick={handleShowCreateWorkoutModal}
						data-bs-theme='light'
					>
						+
					</Button>
				</div>
				<div className='workouts-field d-flex flex-column align-items-center gap-3 mt-3'>
					{workoutsElement}
				</div>
			</div>
			<div className='workout-details-field bg-secondary'>
				<WorkoutDetails />
			</div>
			<CreateWorkoutModal
				show={showCreateWorkoutModal}
				handleClose={handleCloseCreateWorkoutModal}
				updateStateOnFormSubmit={updateStateOnFormSubmit}
			/>
		</div>
	);
};

export default WorkoutsPage;
