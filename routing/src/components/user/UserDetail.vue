<template>
    <div>
        <h3>Some User Details</h3>
        <!-- We don't need any watcher here, because there is no way to load another component from here without rebuilding the component (we go back or to Home or to User anyway) -->
        <p>Loaded User ID is: {{ $route.params.id }}</p>
        <!-- constructing the route manually -->
        <router-link 
            tag='button' 
            :to="'/user/'+$route.params.id+'/edit'" 
            class = 'btn btn-primary'>Edit User</router-link>
    </div>
</template>