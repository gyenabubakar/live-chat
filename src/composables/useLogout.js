import { ref } from 'vue'
import {authRef} from "../firebase/config";

const error = ref(null)

const logout = async () => {
    if (error.value) error.value = null

    try {
        await authRef.signOut()
        if (error.value) error.value = null
    } catch (e) {
        error.value = e.message
    }
}

export default function useLogout() {
    return { error, logout }
}