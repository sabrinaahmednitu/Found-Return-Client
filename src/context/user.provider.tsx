import { createContext, Dispatch, SetStateAction, useState } from 'react';

const UserContext = createContext(undefined); //from react
interface IUserProviderValues{
    user: IUser | null;
    loading: boolean;
    setUser: (user: IUser | null) => void;
    setIsLoading:Dispatch<SetStateAction<undefined>>
}
const UserProvider = () => {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState();


    return (
      <UserContext.Provider
        value={{ user, setUser, isLoading, setIsLoading }}
      ></UserContext.Provider>
    );
};
export default UserProvider;
