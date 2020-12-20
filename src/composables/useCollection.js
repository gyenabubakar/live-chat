import { ref } from 'vue'
import {firestoreRef} from "../firebase/config";

const useCollection = collName => {
    const error = ref(null)

    const collRef = firestoreRef.collection(collName)

    const addDoc = async doc => {
        error.value = null
        try {
            await collRef.add(doc)
        } catch (err) {
            error.value = err.message
        }
    }

    return { error, addDoc }
}

export default useCollection