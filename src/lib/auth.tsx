import { configureAuth } from 'react-query-auth';
import { Navigate, useLocation } from 'react-router-dom';
import { z } from 'zod';

import { paths } from '@/config/paths';
import { User } from '@/types/api';

const hardcodedUser: User = {
  id: '1',
  firstname: 'Max',
  lastname: 'Mustermann',
  email: 'max.mustermann@beispiel.de',
  userUUID: 'u-123-456-789',
  country: {
    countryId: 1,
    name: 'DE',
  },
};

const getUser = async (): Promise<User> => {
  return Promise.resolve(hardcodedUser);
};

const logout = async (): Promise<void> => {
  localStorage.removeItem('accessToken');
  window.location.href = paths.auth.login.getHref();
};

export const loginInputSchema = z.object({
  email: z.string().min(1, 'Required').email('Invalid email'),
  password: z.string().min(3, 'Required'),
});

export type LoginInput = z.infer<typeof loginInputSchema>;
const loginWithEmailAndPassword = async (data: LoginInput): Promise<User> => {
  localStorage.setItem('accessToken', 'hardcoded-token');
  return getUser();
};

const authConfig = {
  userFn: getUser,
  loginFn: async (data: LoginInput) => {
    return await loginWithEmailAndPassword(data);
  },
  registerFn: async () => {
    return {} as User;
  },
  logoutFn: logout,
};

export const { useUser, useLogin, useLogout, AuthLoader } = configureAuth(authConfig);

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useUser();
  const location = useLocation();

  if (!user.data) {
    return <Navigate to={paths.auth.login.getHref(location.pathname)} replace />;
  }

  return children;
};
