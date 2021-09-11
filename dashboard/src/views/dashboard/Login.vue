/* eslint-disable */

<template>
  <v-app>
    <v-card>
      <v-container>
        <v-card-title>
          <h1>Login</h1>
        </v-card-title>
        <v-form v-model="isValid">
            <v-card-text>
                <v-text-field
                v-model="admin.email"
                :rules="emailRules"
                label="Email"
                prepend-icon="mdi-account-circle"
                />
                <v-text-field
                v-model="admin.password"
                :rules="passwordRules"
                label="Password"
                prepend-icon="mdi-lock"
                :type="showPassword ? 'text' : 'password' "
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off' "
                @click:append="handleClick"
                />
            </v-card-text>
            <v-card-action>
            <v-btn
                color="success"
                @click="login()"
                :disabled="!isValid"
            >
                Login
            </v-btn>
            <v-btn
                color="info"
            >
                Register
            </v-btn>
            </v-card-action>
        </v-form>
      </v-container>
    </v-card>
  </v-app>
</template>

<script>
  export default {
    name: 'Login',

    data(){
     return {
       showPassword: false,
       admin : {
           email : '',
           password: ''
       },
       emailRules: [
         v => v !== '' || 'Email is required',
         v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
       ],
       passwordRules: [
         v => v !== '' || 'Password is required'
       ],
       isValid : false,
       mockAccount : {
         email : 'cobaadmin@gmail.com',
         password : 'cobaadmin'
       }
     }
   },
   methods: {
       handleClick() {
           this.showPassword = !this.showPassword
       },
      //  handleSubmit() {
      //      console.log(this.admin)
      //      this.admin = {
      //        email : '',
      //        password : ''
      //      }
      //  },
       login() {
                if(this.admin.email !== "" && this.admin.password !== "") {
                    if(this.admin.email === this.mockAccount.email && this.admin.password === this.mockAccount.password) {
                        this.$router.push('index');
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
   }
};
</script>
