<template>
    <nav v-if="user">
        <div>
            <p>Hey there {{ user.displayName }}</p>
            <span class="email">Currently logged in as {{ user.email }}</span>
        </div>
        <button @click="handleLogout">Log out</button>
    </nav>
</template>

<script>
    import useLogout from "../composables/useLogout";
    import getUser from "../composables/getUser";

    export default {
        name: "Navbar",

        setup() {
            const { error, logout } = useLogout()

            const { user } = getUser()

            const handleLogout = async () => {
                await logout()
                if (!error.value) {
                    console.log('Logged out!')
                }
            }

            return { user, handleLogout }
        }
    }
</script>

<style scoped>
    nav {
        padding: 20px;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    nav p {
        margin: 2px 0 !important;
        font-size: 16px;
        color: #555;
    }
    nav span.email {
        font-size: 14px;
        color: #999;
    }
</style>