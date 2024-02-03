import React, { useContext, useEffect, useId, useState } from 'react';
import './workoutPage.scss';
import Workout from '../../components/WorkoutsPage/Workout/Workout';
import WorkoutDetails from '../../components/WorkoutsPage/WorkoutDetails/WorkoutDetails';
import { Button } from 'react-bootstrap';
import CreateWorkoutModal from '../../components/WorkoutsPage/CreateWorkoutModal/CreateWorkoutModal';
import { WorkoutData } from '../../model/WorkoutDataModel';
import { getWorkoutsByUserId } from '../../services/api';
import { UserAuthenticationContext } from '../../context/UserAuthenticationContext';
import { AxiosResponse } from 'axios';

const WorkoutsPage = () => {
	const [showCreateWorkoutModal, setShowCreateWorkoutModal] = useState(false);
	const [workoutDataState, setWorkoutDataState] = useState<WorkoutData[]>([]);
	const [isSelected, setIsSelected] = useState(false);
	const { userId } = useContext(UserAuthenticationContext);

	const updateStateOnFormSubmit = (newWorkoutData: WorkoutData) => {
		setWorkoutDataState((prev) => [...prev, newWorkoutData]);
	};

	useEffect(() => {
		const getWorkoutsOfUser = (): Promise<AxiosResponse> => {
			return getWorkoutsByUserId(userId!);
		};
		getWorkoutsOfUser()
			.then((response) => {
				setWorkoutDataState(response.data);
			})
			.catch((e) => console.log(e));
	}, []);

	const workoutsElement = workoutDataState.map((workout) => (
		<Workout
			key={workout.workoutId}
			workoutName={workout.workoutName}
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
