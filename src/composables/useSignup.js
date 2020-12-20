import { ref } from 'vue'
import {authRef} from "../firebase/config";

const error = ref(null)

const signup = async (email, password, displayName) => {
    if (error.value) error.value = null
    try {
        const signupResponse = await authRef.createUserWithEmailAndPassword(email, password)
        if (!signupResponse) {
            throw new Error('Could not sign up.')
        }

        await signupResponse.user.updateProfile({ displayName })
        if (error.value) error.value = null

        return signupResponse
    } catch (e) {
        error.value = e.message
    }
}

export default function useSignup() {
    return { error, signup }
}