<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <div class="navbar-brand">
                        <router-link :to="{ name: 'trivia' }">Trivia</router-link>
                    </div>
                </li>
                <li class="nav-item active">
                    <div class="navbar-brand">
                        <router-link :to="{ name: 'chuck' }">Chuck</router-link>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>