<template>
    <div class="chatroom container">
        <Navbar />
        <ChatWindow />
        <NewChatForm />
    </div>
</template>

<script>
    import { watch, onMounted, onUnmounted } from 'vue'
    import {useRouter} from "vue-router";
    import Navbar from "../components/Navbar";
    import NewChatForm from "../components/NewChatForm";
    import getUser from "../composables/getUser";
    import ChatWindow from "../components/ChatWindow";

    export default {
        name: "Chatroom",
        components: { ChatWindow, NewChatForm, Navbar},

        setup() {
            const router = useRouter()

            const { user } = getUser()

            let stopUserWatch = null;

            // on mount
            onMounted(() => {
                stopUserWatch = watch([user], () => {
                    if (!user.value) {
                        router.push({ name: 'Welcome' })
                    }
                })
            })

            // when component is unmounted
            onUnmounted(() => {
                // stop watching the user ref
                stopUserWatch()
            })
        }
    }
</script>

<style scoped>

</style>