import { userFormData } from "@/types/user";
import { userRoutes } from "./endpoints";
import Api from "./axios-config";
import errorHandler from "./error-handle";


export const signUp  = async (userData: userFormData) => {
    try {                
        const response = await Api.post(userRoutes.signup, userData);
        return response;
        
    } catch (error) {        
        const err:Error = error as Error;
        errorHandler(err);
    }
}


export const booking  = async (userData: userFormData) => {
    try {                
        const response = await Api.post(userRoutes.booking, userData);
        return response;
        
    } catch (error) {        
        const err:Error = error as Error;
        errorHandler(err);
    }
}


export const login  = async (userData: userFormData) => {
    try {                
        const response = await Api.post(userRoutes.login, userData);
        return response;
        
    } catch (error) {        
        const err:Error = error as Error;
        errorHandler(err);
    }
}