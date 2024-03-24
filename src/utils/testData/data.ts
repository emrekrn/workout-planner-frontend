export const workoutData = [
	{
		id: 1,
		workoutName: 'Workout A',
		workoutCategory: 'Upper Body',
		workoutDescription:
			'This is an upper body workout focusing on chest and back muscles.',
		exercises: [
			{
				exerciseId: 1,
				exerciseName: 'Push-ups',
				sets: [
					{ setId: 1, setNumber: 1, repeat: 10 },
					{ setId: 2, setNumber: 2, repeat: 10 },
					{ setId: 3, setNumber: 3, repeat: 10 },
				],
			},
			{
				exerciseId: 2,
				exerciseName: 'Pull-ups',
				sets: [
					{ setId: 4, setNumber: 1, repeat: 8 },
					{ setId: 5, setNumber: 2, repeat: 8 },
					{ setId: 6, setNumber: 3, repeat: 8 },
				],
			},
		],
		isFavourite: false,
		isSelected: false,
	},
	{
		id: 2,
		workoutName: 'Workout B',
		workoutCategory: 'Legs & Glutes',
		workoutDescription:
			'This is a lower body workout focusing on legs and glutes.',
		exercises: [
			{
				exerciseId: 3,
				exerciseName: 'Squats',
				sets: [
					{ setId: 7, setNumber: 1, repeat: 12 },
					{ setId: 8, setNumber: 2, repeat: 10 },
					{ setId: 9, setNumber: 3, repeat: 8 },
				],
			},
			{
				exerciseId: 4,
				exerciseName: 'Deadlifts',
				sets: [
					{ setId: 10, setNumber: 1, repeat: 8 },
					{ setId: 11, setNumber: 2, repeat: 8 },
					{ setId: 12, setNumber: 3, repeat: 8 },
				],
			},
		],
		isFavourite: false,
		isSelected: false,
	},
	// Object 10
	{
		id: 10,
		workoutName: 'Workout C',
		workoutCategory: 'Core',
		workoutDescription: 'This is a core workout focusing on abdominal muscles.',
		exercises: [
			{
				exerciseId: 5,
				exerciseName: 'Plank',
				sets: [
					{ setId: 13, setNumber: 1, repeat: 60 },
					{ setId: 14, setNumber: 2, repeat: 60 },
					{ setId: 15, setNumber: 3, repeat: 60 },
				],
			},
			{
				exerciseId: 6,
				exerciseName: 'Russian Twists',
				sets: [
					{ setId: 16, setNumber: 1, repeat: 20 },
					{ setId: 17, setNumber: 2, repeat: 20 },
					{ setId: 18, setNumber: 3, repeat: 20 },
				],
			},
		],
		isFavourite: false,
		isSelected: false,
	},
];
