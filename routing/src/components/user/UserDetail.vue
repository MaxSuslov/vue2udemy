<template>
    <div>
        <h3>Some User Details</h3>
        <!-- We don't need any watcher here, because there is no way to load another component from here without rebuilding the component (we go back or to Home or to User anyway) -->
        <p>Loaded User ID is: {{ $route.params.id }}</p>
        <!-- we can pass an object here, e.g. a named route with its params, it's much more convenient-->
        <router-link tag='button' :to='{ name: "userEdit", params: { id: $route.params.id }, query: {locale: "en", q: 100}}' 
            class = 'btn btn-primary'>Edit User</router-link>
    </div>
</template>