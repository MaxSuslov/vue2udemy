<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <h3>Local filter</h3>
                <p>{{ firstText | reverse }}</p>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <h3>Global filter</h3>
                <p>{{ secondText | calculateLength }}</p>
                <hr>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <h3>Computed properties</h3>
                <p>{{ reversedTextComputed }}</p>
                <h4>Computed property imported as a mixin</h4>
                <p>{{ lengthAware }}</p>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
    import {lengthAwareMixin} from './lengthAwareMixin';

    export default {
        filters: {
            reverse(value) {
                return value.split("").reverse().join("");
            }
        }, 
        mixins: [lengthAwareMixin],
        data() {
            return {
                firstText: 'First Text',
                secondText: 'Second Text'
            }
        }, 
        computed: {
            reversedTextComputed() {
                return this.firstText.split("").reverse().join("");
            }
        }
    }
</script>

<style>
</style>
