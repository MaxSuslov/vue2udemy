<template>
    <div>
        <h3>Some User Details</h3>
        <!-- We don't need any watcher here, because there is no way to load another component from here without rebuilding the component (we go back or to Home or to User anyway) -->
        <p>Loaded User ID is: {{ $route.params.id }}</p>
    </div>
</template>