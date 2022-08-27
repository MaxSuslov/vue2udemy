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
                <p v-highlight:background.delayed="'red'">Color this</p>
                <p v-local-highlight:background.delayed.blink="'red'">Color this too</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            // Can be also in camelCase, should be prepended by v-... while using
            'local-highlight': {
                bind(el, binding, vnode) {
                    let delay = 0;
                    if (binding.modifiers['delayed']) {
                        delay = 3000;
                    }
                    if (binding.modifiers['blink']) {
                        let mainColor = binding.value;
                        let secondColor = 'blue';
                        let currentColor = mainColor;
                        setTimeout(() => {
                        setInterval(() => {
                            currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                            binding.arg == 'background' ? el.style.backgroundColor = currentColor : el.style.color = currentColor;
                        }, 1000);
                        }, delay);
                    } else {
                        setTimeout(() => {
                        if (binding.arg == 'background') {
                            el.style.backgroundColor = binding.value;
                        } else {
                            el.style.color = binding.value;
                        }
                        }, delay);
                    }
                }
            }
        }
    }
</script>

<style>

</style>
