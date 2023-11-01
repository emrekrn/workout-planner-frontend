import { ReactElement, createContext } from 'react';

interface IUserAuthenticationContext {
	userToken: string | null;
	userId: number | null;
}

const UserAuthenticationContext = createContext<IUserAuthenticationContext>({
	userToken: null,
	userId: null,
});

const UserAuthenticationContextProvider = ({
	children,
}: {
	children: ReactElement;
}) => {
	const value = {
		userToken: 'tes',
		userId: 1,
	};
	return (
		<UserAuthenticationContext.Provider value={value}>
			{children}
		</UserAuthenticationContext.Provider>
	);
};

export { UserAuthenticationContext, UserAuthenticationContextProvider };
