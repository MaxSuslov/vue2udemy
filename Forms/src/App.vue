<template>
    <div class="container">
        <!-- <form v-if="!submitted"> -->
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Submit your data</h1>
                    <hr>

                    <app-full-name v-model="fullName"></app-full-name>

                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                v-model="userData.email"
                                type="text"
                                id="email"
                                class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <!-- .lazy is a modifier. Using it we update the input on.leave (not on every keystroke). 
                        Another modifiers could be .trim (if you need to trim whitespeces) or .number if it should be converted to a number.
 -->
                        <input
                                v-model.lazy="userData.password"
                                type="password"
                                id="password"
                                class="form-control">
                                <p>{{ userData.password }}</p>
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
                                v-model="userData.age"
                                type="number"
                                id="age"
                                class="form-control">
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea style="white-space: pre"
                            id="message"
                            rows="5"
                            class="form-control"
                            v-model="message"
                            >
                    </textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"
                                    v-model="sendMail"> Receive Emails
                        </label>
                        <label for="newsletter">
                            <input
                                    type="checkbox"
                                    id="Newsletter"
                                    value="Newsletter" 
                                    v-model="sendMail"> Newsletter Sign-up
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                v-model="gender"> Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                                v-model="gender"> Female
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <select
                            id="priority"
                            class="form-control">
                        <option></option>
                    </select>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            type="submit" class="btn btn-primary" @click.prevent="submitted = true">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <!-- <div class="row" v-if="submitted"> -->
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Age: {{ userData.age }}</p>
                        <p>Message: {{ message }}</p>
                        <p><strong>Store in Database? {{ storeData }}</strong></p>
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <li v-for="item in sendMail">{{ item }}</li>
                        </ul>
                        <p>Gender: {{ gender }}</p>
                        <p>Priority:</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FullName from './FullName.vue';

    export default {
        data() {
            return {
                fullName: 'Max Suslov',
                userData: {
                email: '',
                password: '',
                age: 44,
                },
                storeData: 'Yes',
                submitted: false,
                message: 'Please write your message here',
                sendMail: [], 
                gender: 'Male'
            }
        },
        components: {
            appFullName: FullName
        }
    }
</script>

<style>

</style>
