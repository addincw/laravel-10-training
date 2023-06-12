<template>
    <h1>{{ user?.name }}</h1>
</template>
<script>
export default {
    data() {
        return {
            user: {},
        };
    },
    methods: {
        async fetchUserById() {
            const resp = await fetch("/api/user", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            const user = await resp?.json();
            this.user = user;
        },
    },
    mounted() {
        this.fetchUserById();
    },
};
</script>
