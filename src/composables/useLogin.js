import { ref } from 'vue'
import {authRef} from "../firebase/config";

const error = ref(null)

const login = async (email, password) => {
    if (error.value) error.value = null
    try {
        const loginResponse = await authRef.signInWithEmailAndPassword(email, password)

        return loginResponse
    } catch (e) {
        error.value = e.message
    }
}

export default function useLogin() {
    return { error, login }
}