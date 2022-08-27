<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-customOn:click="clicked" class="btn btn-primary">Click me!</button>
                <hr>
                <div style="width: 100px; height: 100px; background-color: lightgreen"
                v-customOn:mouseenter="mouseEnter" 
                v-customOn:mouseleave="mouseLeave"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            customOn : {
                bind(el, binding) {
                    // el.onclick = function() {
                    //     binding.value();
                    // }
                    // currently it is :click but can be any event
                    const type = binding.arg;
                    // fn it will be a reference to a function we execute on event
                    const fn = binding.value;
                    // type constant will be converted to a string ('click'); fn should be without ()!!! JS will execute it for us! It should be just a fn reference to the event listener
                    el.addEventListener(type, fn);
                }
            }
        },
        methods: {
            clicked() {
                alert('I was clicked!')
            },
            mouseEnter() {
                console.log('Mouse entered!')
            },
            mouseLeave() {
                console.log('Mouse left!')
            }
        }
    }
</script>

<style>
</style>
