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
                        <!-- Instead of v-model="userData.email" we manually create the same behaviour in the input to show how v-model works behind the scenes -->
                        <input
                                :value="userData.email"
                                @input="userData.email = $event.target.value"
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
                    <!-- v-model in drop-down is used not on the <option>, but on <select> itself! -->
                    <select
                            id="priority"
                            class="form-control"
                            v-model="selectedPriority">
                        <!-- :selected="priority == 'Medium'" is to set the default value, but it will work only if we don't use v-model in <select>, so it will be overwritten by property from v-model! -->
                        <option 
                        v-for="priority in priorities"
                        :selected="priority == 'Medium'"
                        >{{ priority }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <app-switch v-model="dataSwitch"></app-switch>
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
                        <p>Priority: {{ selectedPriority }}</p>
                        <p>Switched: {{ dataSwitch }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FullName from './FullName.vue';
import Switch from './Switch.vue'

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
                gender: 'Male',
                priorities: ['High', 'Medium', 'Low'],
                // another way to setup the defauld value (via v-model)
                selectedPriority: 'High',
                dataSwitch: true
            }
        },
        components: {
            appFullName: FullName,
            appSwitch: Switch
        }
    }
</script>

<style>

</style>
