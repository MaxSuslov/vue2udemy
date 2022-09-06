<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>
                <transition name="fade">
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false
            }
        }
    }
</script>

<style>
/* is attached only to one first frame at the beginning */
/* we make it transparent to appear smoothly, as it will dissappear in a moment */
    .fade-enter {
        opacity: 0;
    }
/* this is the place to render the transition */
/* don't set the opacity to 1 here! */
    .fade-enter-active {
        transition: opacity 1s;
    }
    .fade-leave {
        /* by default */
        /* opacity: 1 */
    }
    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }
</style>
