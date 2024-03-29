import React, { useContext, useEffect, useState } from 'react';
import './workoutPage.scss';
import Workout from '../../components/WorkoutsPage/Workout/Workout';
import WorkoutDetails from '../../components/WorkoutsPage/WorkoutDetails/WorkoutDetails';
import { Button } from 'react-bootstrap';
import CreateWorkoutModal from '../../components/WorkoutsPage/CreateWorkoutModal/CreateWorkoutModal';
import { WorkoutData } from '../../model/WorkoutDataModel';
import { getWorkoutsByUserId } from '../../services/api';
import { UserAuthenticationContext } from '../../context/UserAuthenticationContext';
import { AxiosResponse } from 'axios';
import { changeIsFavourite, deleteWorkout } from '../../services/api';
import DeleteWorkoutModal from '../../components/WorkoutsPage/DeleteWorkoutModal/DeleteWorkoutModal';

const WorkoutsPage = () => {
	const [showCreateWorkoutModal, setShowCreateWorkoutModal] = useState(false);
	const [workoutDataState, setWorkoutDataState] = useState<WorkoutData[]>([]);
	const [selectedWorkout, setSelectedWorkout] = useState<WorkoutData>(
		{} as WorkoutData
	);
	const [selectedWorkoutId, setSelectedWorkoutId] = useState(0);

	const { userId } = useContext(UserAuthenticationContext);

	const updateWorkoutDataStateOnCreateFormSubmit = (
		newWorkoutData: WorkoutData
	) => {
		setWorkoutDataState((prev) => [...prev, newWorkoutData]);
	};
	const updateWorkoudDataStateOnDeleteWorkout = (workoutId: number) => {
		deleteWorkout(workoutId).then((response) => {
			if (response.status == 200) {
				setWorkoutDataState((prev) =>
					prev.filter((workout) => workout.workoutId != workoutId)
				);
			} else {
				console.log(`Workout ${workoutId} could not found!`);
			}
		});
	};
	const updateWorkoutIfFavourite = (id: number) => {
		changeIsFavourite(userId!, id).then((response) => {
			if (response.status == 200) {
				setWorkoutDataState((prev) => {
					return prev.map((workout) => {
						if (workout.workoutId == id) {
							return {
								...workout,
								isFavourite: !workout.isFavourite,
							};
						} else {
							return workout;
						}
					});
				});
			} else {
				console.log('isFavourite could not been updated');
			}
		});
	};
	const selectWorkout = (id: number) => {
		setSelectedWorkout(
			workoutDataState.find((workoutData) => workoutData.workoutId == id)!
		);
	};

	useEffect(() => {
		const getWorkoutsOfUser = (): Promise<AxiosResponse> => {
			return getWorkoutsByUserId(userId!);
		};
		getWorkoutsOfUser()
			.then((response) => {
				console.log(response.data);
				setWorkoutDataState(response.data);
			})
			.catch((e) => console.log(e));
	}, []);

	const workoutsElement = workoutDataState.map((workout) => (
		<Workout
			key={workout.workoutId}
			id={workout.workoutId}
			workoutName={workout.workoutName}
			isFavourite={workout.isFavourite}
			updateWorkoutIfFavourite={updateWorkoutIfFavourite}
			selectWorkout={selectWorkout}
			selectedWorkoutId={selectedWorkoutId}
			setSelectedWorkoutId={setSelectedWorkoutId}
			updateWorkoudDataStateOnDeleteWorkout={
				updateWorkoudDataStateOnDeleteWorkout
			}
		/>
	));

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
				{selectedWorkout && (
					<WorkoutDetails workoutName={selectedWorkout.workoutName} />
				)}
			</div>
			<CreateWorkoutModal
				show={showCreateWorkoutModal}
				handleClose={handleCloseCreateWorkoutModal}
				updateWorkoutDataStateOnCreateFormSubmit={
					updateWorkoutDataStateOnCreateFormSubmit
				}
			/>
		</div>
	);
};

export default WorkoutsPage;
