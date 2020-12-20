<template>
    <h3>Log in</h3>
    <form @submit.prevent="handleSubmit" autocomplete="off">
        <input required type="text" placeholder="Display name" v-model="displayName" />
        <input required type="email" placeholder="E-mail" v-model="email" />
        <input required type="password" placeholder="Password" v-model="password" />
        <div v-if="error" class="error">{{ error }}</div>
        <button>Sign up</button>
        <p>
            Already registered?
            <span @click="switchToLogin">Log in</span>
            instead.
        </p>
    </form>
</template>

<script>
    import { ref } from 'vue'
    import useSignup from "../composables/useSignup";

    export default {
        name: "SignupForm",
        emits: ['switch-form', 'signup'],

        setup(props, { emit }) {
            const displayName = ref('')
            const email = ref('')
            const password = ref('')

            const switchToLogin = () => {
                emit('switch-form', true)
            }

            const { error, signup } = useSignup()

            const handleSubmit = async () => {
                await signup(email.value, password.value, displayName.value)
                if (!error.value) {
                    emit('signup')
                }
            }

            return { displayName, email, password, error, handleSubmit, switchToLogin }
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