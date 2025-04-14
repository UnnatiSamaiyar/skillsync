'use server'

import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";


export async function signUp(params: SignUpParams) {
    const {uid, name, email} = params;

    try {
         const userRecord = await db.collection('users').doc(uid).get() ;
         if(userRecord.exists){
            return{
                success: false,
                message: 'User already exists. Please login instead.',
            }
         }
         await db.collection('users').doc(uid).set({
            name, email
         })
    } catch (e: any) {
        console.error('Error creating a user', e)

        if(e.code === 'auth/email-already-exists'){
            return{
                success: false,
                message: 'Email already exists',
            }
        }

        return{
            success: false,
            message: 'Error creating a user',
        }
    }
}

export async function setSessionCookie(idToken:string) {
    const cookieStore = await cookies();
    const sessionCookie = await auth.createSessionCookie(idToken, {
        
    })
}