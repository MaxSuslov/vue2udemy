<template>
    <div class="container">
        <form v-if="!submitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="firstname">First Name</label>
                        <input
                                v-model="firstName"
                                type="text"
                                id="firstname"
                                class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="lastname">Last Name</label>
                        <input
                                v-model="lastName"
                                type="text"
                                id="lastname"
                                class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                v-model="email"
                                type="text"
                                id="email"
                                class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                v-model="password"
                                type="password"
                                id="password"
                                class="form-control">
                    </div>
                    <div class="form-group">
                        <label>
                            <input type="radio" value="Yes" v-model="storeData"> Yes
                        </label>
                        <label>
                            <input type="radio" value="No" v-model="storeData"> No
                        </label>
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                v-model="age"
                                type="number"
                                id="age"
                                class="form-control">
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            type="submit" class="btn btn-primary" @click.prevent="submitted = true">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ firstName }} {{ lastName }}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Age: {{ age }}</p>
                        <p><strong>Store in Database? {{ storeData }}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                firstName: '',
                lastName: '',
                password: '',
                age: '',
                storeData: true,
                submitted: false
            }
        }
    }
</script>

<style>

</style>
