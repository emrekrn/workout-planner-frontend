import './exerciseCard.scss';

const Set = () => {
	return (
		<div className='set-card d-flex justify-content-center bg-secondary'>
			1x13
		</div>
	);
};

const ExerciseCard = () => {
	return (
		<div className='exercise-card bg-primary p-3'>
			<div className='exercise-name text-white'>Bench Press</div>
			<div className='exercise-info text-white d-flex gap-3 mt-2'>
				<Set />
				<Set />
				<Set />
			</div>
		</div>
	);
};

export default ExerciseCard;
