<template>
    <div class="user-wrapper">
        User edit
        <div>{{ id }}</div>
        <div>{{ firstName }}</div>
    </div>
</template>

<script>
    export default {
        name: 'UserEdit',
        props: {
          id: String,
          firstName: String
        }
    }
</script>
<style>
    .user-wrapper {
        margin-top: 30px;
    }
</style>