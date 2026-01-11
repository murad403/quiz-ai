"use server";
import { cookies } from "next/headers"


export const saveToken = async(accessToken: string, refreshToken: string) => {
    (await cookies()).set("accessToken", accessToken);
    (await cookies()).set("refreshToken", refreshToken);
}

export const getCurrentToken = async() =>{
    const accessToken = (await cookies()).get("accessToken")?.value;
    const refreshToken = (await cookies()).get("refreshToken")?.value;
    return {accessToken, refreshToken};
}

export const clearTokens = async() => {
    (await cookies()).delete("accessToken");
    (await cookies()).delete("refreshToken");
}