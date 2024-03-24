import './exerciseCard.scss';
import { useSelector } from 'react-redux';
import { getSelectedWorkout } from '../../../features/workout/workoutSlice.ts';
import { ExerciseData, SetData } from '../../../model/WorkoutDataModel.ts';

const Set = ({ setId, setNumber, repeat }: SetData) => {
	return (
		<div className='set-card d-flex justify-content-center bg-secondary'>
			{setNumber}x{repeat}
		</div>
	);
};

const ExerciseCard = ({ exerciseId, exerciseName, sets }: ExerciseData) => {
	const setsElement = sets.map((set) => (
		<Set
			key={set.setId}
			setId={set.setId}
			setNumber={set.setNumber}
			repeat={set.repeat}
		/>
	));
	return (
		<div className='exercise-card bg-primary p-3'>
			<div className='exercise-name text-white'>{exerciseName}</div>
			<div className='exercise-info text-white d-flex gap-3 mt-2'>
				{setsElement}
			</div>
		</div>
	);
};

export default ExerciseCard;
