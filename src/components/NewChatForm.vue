<template>
    <form>
        <textarea
            placeholder="Please type a message here..."
            v-model="message"
            @keypress.enter.prevent="handleSendMessage"
        ></textarea>
        <div class="error">{{ error }}</div>
    </form>
</template>

<script>
    import { ref } from 'vue';
    import getUser from "../composables/getUser";
    import {timestamp} from "../firebase/config";
    import useCollection from "../composables/useCollection";

    export default {
        name: "NewChatForm",

        setup() {
            const message = ref('')

            const { user } = getUser()

            const { error, addDoc } = useCollection('messages')

            const handleSendMessage = async () => {
                const constructedMsg = {
                    message: message.value,
                    user: user.value.displayName,
                    createdAt: timestamp()
                }

                await addDoc(constructedMsg)

                if (!error.value) message.value = ''
            }

            return { error, message, handleSendMessage }
        }
    }
</script>

<style scoped>
    form {
        margin: 10px;
    }
    textarea {
        width: 100%;
        max-width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
        resize: none;
    }
</style>