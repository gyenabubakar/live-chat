<template>
    <div class="welcome container">
        <p>Welcome</p>
        <SignupForm v-if="!showLogin" @switch-form="handleFormSwitch" @signup="enterChat"/>
        <LoginForm  v-else @switch-form="handleFormSwitch" @login="enterChat"/>
    </div>
</template>

<script>
import { ref } from 'vue'
import {useRouter} from "vue-router";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";

export default {
    name: 'Welcome',
    components: { SignupForm, LoginForm },

    setup () {
        const showLogin = ref(true)

        const router = useRouter()

        const handleFormSwitch = (value) => showLogin.value = value

        const enterChat = async () => await router.push({ name: 'Chatroom' })

        return { showLogin, enterChat, handleFormSwitch }
    }
}
</script>

<style>
.welcome {
    text-align: center;
    padding: 20px 0;
}
.welcome form {
    width: 300px;
    margin: 20px auto;
}
.welcome label {
    display: block;
    margin: 20px 0 10px;
}
.welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #ddd;
    outline: none;
    color: #999;
    margin: 10px auto;
}
</style>