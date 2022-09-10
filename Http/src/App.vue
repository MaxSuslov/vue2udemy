<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input v-model="user.username" class="form-control" type="text">
                </div>
                <div class="form-group">
                    <label>Mail</label>
                    <input v-model="user.email" class="form-control" type="text">
                </div>
                <button @click="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                user: {
                    username: '',
                    email: ''
                }
            }
        }, 
        methods: {
            submit() {
                // $http is enabled by VueResource; Firebase accepts only requests to .json, so we add at the end of the DB URL /data.json (name is up to you)
                this.$http.post('https://vue-http-aebd5-default-rtdb.europe-west1.firebasedatabase.app/data.json', this.user)
                // in POST request the 1st argument is the DB URL, the second argument is data that we want to send. It returns a promise, so we write .then() to execute it after we get back a response to our request.
                .then(response => {
                    console.log(response);
                }, error => {
                    console.log(error);
                });
            }
        }
    }
</script>

<style>
</style>
