<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>
                <transition name="fade">
                    <!-- We can use v-show instead of v-if -->
                    <div class="alert alert-info" v-show="show">Using Transition CSS classes</div>
                </transition>
                <transition name="slide" type="animation">
                    <div class="alert alert-info" v-if="show">Using CSS Animations</div>
                </transition>
                <transition name="fade" appear>
                    <div class="alert alert-info" v-if="show">Initial animation</div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: true
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
        opacity: 0;
    }
    /* slide-in refers to the slide-in keyframe */
    /* forwards is to keep the element in the finish position and not snap back to start */
    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }
    .slide-leave {
        /* We don't set here anything, because the default opacity of 1 is what we want */
    }
    .slide-leave-active {
        /* Vue doesn't know what to use - animation or transition (if mixed) and takes the longer one. Due to different timing it will jump. To solve this issue we should set a type="animation(or transition)" in <transition> tag. If you mix animation and transitions - make sure to set which one dictates the duration */
        animation: slide-out 1s ease-out forwards;
        transition: opacity 3s;
        opacity: 0;
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
