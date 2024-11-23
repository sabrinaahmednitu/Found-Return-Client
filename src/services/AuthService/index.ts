'use server';

import axiosInstance from "@/src/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData:FieldValues) => {
  try {
    const res = axiosInstance.post('/auth/register', userData);
  } catch (error: any) {
    throw new Error(error);
  }
};
