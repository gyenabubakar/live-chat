<template>
    <h3>Log in</h3>
    <form @submit.prevent="handleSubmit" autocomplete="off">
        <input required type="email" placeholder="E-mail" v-model="email" />
        <input required type="password" placeholder="Password" v-model="password" />
        <div v-if="error">{{ error }}</div>
        <button>Log in</button>
        <p>
            Not registered?
            <span @click="switchToSignup">Sign up</span>
            instead.
        </p>
    </form>
</template>

<script>
    import { ref } from 'vue'
    import useLogin from "../composables/useLogin";

    export default {
        name: "LoginForm",
        emits: ['switch-form', 'login'],

        setup(props, { emit }) {
            const email = ref('')
            const password = ref('')

            const switchToSignup = () => emit('switch-form', false)

            const { error, login } = useLogin()

            const handleSubmit = async () => {
                await login(email.value, password.value)
                if (!error.value) {
                    emit('login')
                }
            }

            return { email, password, error, handleSubmit, switchToSignup }
        }
    }
</script>

<style scoped>
p span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}
</style>