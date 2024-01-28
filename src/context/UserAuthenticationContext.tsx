import { ReactElement, createContext, useState } from 'react';

interface IUserAuthenticationContext {
	userToken: string | null;
	setUserToken: React.Dispatch<React.SetStateAction<string | null>>;
	userId: number | null;
	setUserId: React.Dispatch<React.SetStateAction<number | null>>;
	handleLogout: () => void;
}

const UserAuthenticationContext = createContext<IUserAuthenticationContext>({
	userToken: null,
	setUserToken: () => {},
	userId: null,
	setUserId: () => {},
	handleLogout: () => {},
});

const UserAuthenticationContextProvider = ({
	children,
}: {
	children: ReactElement;
}) => {
	const [userToken, setUserToken] = useState<string | null>(null);
	const [userId, setUserId] = useState<number | null>(null);

	const handleLogout = (): void => {
		setUserToken(null);
		setUserId(null);
	};

	const value = {
		userToken,
		setUserToken,
		userId,
		setUserId,
		handleLogout,
	};
	return (
		<UserAuthenticationContext.Provider value={value}>
			{children}
		</UserAuthenticationContext.Provider>
	);
};

export { UserAuthenticationContext, UserAuthenticationContextProvider };
