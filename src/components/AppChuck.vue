<template>
    <div class="container">
        <h1>Chuck Norris Jokes</h1>
        <ul v-for="joke in jokes" :key="joke.id">
            <li>{{ joke.value }}</li>
            <hr>
        </ul>
        <button @click.prevent="getJokes">Click</button>
    </div>
</template>

<script>
import { store } from '@/store/store';
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'jokes'
        ])
    },
    methods: {
        ...mapActions([
            'getJokes'
        ])
    },
    // created() {
    //     store.dispatch('getJokes');
    // },
    beforeRouteEnter (to, from, next) {
        store.dispatch('getJokes').then(() => next());
    }
}
</script>

<style>
    ul {
        list-style-image: url('https://assets.chucknorris.host/img/avatar/chuck-norris.png');
    }
</style>
