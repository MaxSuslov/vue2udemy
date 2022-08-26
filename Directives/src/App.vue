<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Build-in Directives</h1>
                <p v-text="'Some Text'"></p>
                <p v-html="'<strong>Strong Text</strong>'"></p>
            </div>
        </div>
        <hr/>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <!-- <p v-highlight="'red'">Color this</p> -->
                <!-- :background will be treated as an argument in our directive. Here it is not have to be a string, we refer to it as to a string in main.js, it will be converted to a string behind the scene. If we remove :background, the text color will be red instead (v-if) -->
                <p v-highlight:background="'red'">Color this</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style>

</style>
