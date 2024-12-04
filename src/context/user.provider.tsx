import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import { IUser } from '../types';
import { getCurrentUser } from '../services/AuthService';

const UserContext = createContext<IUserProviderValues | undefined>(undefined); //from react
interface IUserProviderValues {
  user: IUser | null;
  isLoading: boolean;
  setUser: (user: IUser | null) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}
const UserProvider = ({children}:{children:ReactNode}) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleUser = async () => {
    const newUser = await getCurrentUser();
    setUser(newUser);
  }

  useEffect(() => {
    handleUser();
    setIsLoading(false);
  },[])

  return (
    <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
