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
                console.log(this.user)
            }
        }
    }
</script>

<style>
</style>
