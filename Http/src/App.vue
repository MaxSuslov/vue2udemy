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
                <hr>
                <input type="text" class="form-control" v-model="node">
                <br>
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                <br>
                <br>
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users">{{ u.username }} - {{ u.email }}</li>
                </ul>
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
                },
                users: [],
                resource: {}, 
                node: 'data'
            }
        }, 
        methods: {
            submit() {
                // this.$http.post('data.json', this.user)
                // .then(response => {
                //     console.log(response);
                // }, error => {
                //     console.log(error);
                // });
                // this.resource.save({}, this.user);
                this.resource.saveAlt(this.user);
            }, 
            fetchData() {
                // this.$http.get('data.json')
                // .then(response => {
                //     // It returns a promise, not the data right away
                //     return response.json(); 
                // })
                //     // .json() extracts the value of the response and converts it into a JS object. 
                // .then(data => {
                //     const resultArray = [];
                //     for (let key in data) {
                //         resultArray.push(data[key]);
                //     }
                //     this.users = resultArray;
                // });
                this.resource.getData({node: this.node})
                .then(data => {
                    const resultArray = [];
                    for (let key in data) {
                        resultArray.push(data[key]);
                    }
                    this.users = resultArray;
                });
            }
        },
        created() {
            const customActions = {
                saveAlt: {method: 'POST', url: 'alternative.json'},
                getData: {method: 'GET'}
            }
            this.resource = this.$resource('{node}.json', {}, customActions);
        }
    }
</script>

<style>
</style>
