'use server';

import axiosInstance from '@/src/lib/AxiosInstance';
import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { FieldValues } from 'react-hook-form';

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post('/auth/register', userData);
    if (data.success) {
      (await cookies()).set('accessToken', data?.data?.accessToken);
      (await cookies()).set('refreshToken', data?.data?.refreshToken);
    }
    return data;
    //  const res = await axiosInstance.post('/auth/register', userData);
    //  console.log(res.data)
  } catch (error: any) {
    throw new Error(error);
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post('/auth/login', userData);
    if (data.success) {
      (await cookies()).set('accessToken', data?.data?.accessToken);
      (await cookies()).set('refreshToken', data?.data?.refreshToken);
    }
    return data;
    //  const res = await axiosInstance.post('/auth/register', userData);
    //  console.log(res.data)
  } catch (error: any) {
    throw new Error(error);
  }
};

export const logout = async() => {
   (await cookies()).delete("accessToken");
   (await cookies()).delete("refreshToken");
}

export const getCurrentUser = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  let decodedToken = null;
  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);
    //console.log(decodedToken)
    return {
      _id: decodedToken._id,
      name: decodedToken.name,
      email: decodedToken.email,
      mobileNumber: decodedToken.mobileNumber,
      role: decodedToken.role,
      status: decodedToken.status,
    };
  }
 return decodedToken;
}