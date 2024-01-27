import { ReactElement, createContext, useState } from 'react';

interface IUserAuthenticationContext {
	userToken: string | null;
	setUserToken: React.Dispatch<React.SetStateAction<string>>;
	userId: number | null;
	setUserId: React.Dispatch<React.SetStateAction<number>>;
}

const UserAuthenticationContext = createContext<IUserAuthenticationContext>({
	userToken: null,
	setUserToken: () => {},
	userId: null,
	setUserId: () => {},
});

const UserAuthenticationContextProvider = ({
	children,
}: {
	children: ReactElement;
}) => {
	const [userToken, setUserToken] = useState<string>('');
	const [userId, setUserId] = useState<number>(0);

	const value = {
		userToken: userToken,
		setUserToken: setUserToken,
		userId: userId,
		setUserId: setUserId,
	};
	return (
		<UserAuthenticationContext.Provider value={value}>
			{children}
		</UserAuthenticationContext.Provider>
	);
};

export { UserAuthenticationContext, UserAuthenticationContextProvider };
