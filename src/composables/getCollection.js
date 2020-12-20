import { ref, watchEffect } from 'vue'
import {firestoreRef} from "../firebase/config";

const getCollection = collName => {
    const documents = ref(null)
    const error = ref(null)

    const collRef = firestoreRef.collection(collName).orderBy('createdAt')

    // listen for document changes
    const unsubscribe = collRef.onSnapshot(snapshot => {
        const results = []
        snapshot.docs.forEach(doc => {
            doc.data().createdAt && results.push({ id: doc.id, ...doc.data() })
        })
        documents.value = results
        if (error.value) error.value = null
    }, err => {
        error.value = err.message
    })

    // unsubscribe from collection when component unmounts
    watchEffect((onInvalidate) => {
        onInvalidate(() => unsubscribe())
    })

    return { error, documents }
}

export default getCollection