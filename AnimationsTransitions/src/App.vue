<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>
                <transition name="fade">
                    <div class="alert alert-info" v-if="show">Using Transition CSS classes</div>
                </transition>
                <transition name="slide">
                    <div class="alert alert-info" v-if="show">Using CSS Animations</div>
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
    /* Sliding effect using CSS animations */
    .slide-enter {
        /* No need to define it here as we set it in the keyframes */
        /* transform: translateY(20px); */
    }
    /* slide-in refers to the slide-in keyframe */
    /* forwards is to keep the element in the finish position and not snap back to start */
    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
    }
    .slide-leave {
    }
    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;

    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0px);
        }
    }
    @keyframes slide-out {
        from {
            transform: translateY(0px);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>
