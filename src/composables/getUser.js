import {ref} from 'vue'
import {authRef} from "../firebase/config";


const user = ref(authRef.currentUser)

authRef.onAuthStateChanged(_user => {
    user.value = _user
})

const getUser = () => {
    return {
        user
    }
}

export default getUser