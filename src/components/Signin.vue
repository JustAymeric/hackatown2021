<template>
<div id="app">
    <v-app>
        <v-dialog v-model="dialog" persistent max-width="600px" min-width="360px">
            <div>
                <v-tabs v-model="tab" show-arrows background-color="deep-purple accent-4" icons-and-text dark grow>
                    <v-tabs-slider color="purple darken-4"></v-tabs-slider>
                    <v-tab v-for="(i,index) in tabs" :key="index">
                        <v-icon large>{{ i.icon }}</v-icon>
                        <div class="caption py-1">{{ i.name }}</div>
                    </v-tab>
                    <v-tab-item>
                        <v-card class="px-4">
                            <v-card-text>
                                <v-form ref="loginForm" v-model="valid" lazy-validation>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field v-model="loginEmail" :rules="loginEmailRules" label="E-mail" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="loginPassword" :append-icon="show1?'eye':'eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" counter @click:append="show1 = !show1"></v-text-field>
                                        </v-col>
                                         <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                                            <v-btn x-large block :disabled="!valid" color="success" @click="validate"> Login </v-btn>
                                        </v-col>
                                        <v-spacer></v-spacer>
                                         <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                                            <v-btn x-large block  color="error" @click="cancel"> Cancel </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item>
                        <v-card class="px-4">
                            <v-card-text>
                                <v-form ref="registerForm" v-model="valid" lazy-validation v-if="isValid">
                                    <v-row>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-text-field v-model="firstName" :rules="[rules.required]" label="First Name" maxlength="20" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-text-field v-model="lastName" :rules="[rules.required]" label="Last Name" maxlength="20" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" counter @click:append="show1 = !show1"></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field block v-model="verify" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, passwordMatch]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Confirm Password" counter @click:append="show1 = !show1"></v-text-field>
                                        </v-col>
                                           <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                                            <v-btn x-large block :disabled="!valid" color="success" @click="register">Register</v-btn>
                                        </v-col>
                                        <v-spacer></v-spacer>
                                         <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                                            <v-btn x-large block  color="error" @click="cancel"> Cancel </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-form>


                                            <v-form ref="validateCode" v-model="valid" lazy-validation v-if="!isValid">
                                    <v-row>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-text-field v-model="code" label="Code" maxlength="20" required></v-text-field>
                                        </v-col>
                                        <v-spacer></v-spacer>
                                         <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                                            <v-btn x-large block :disabled="!valid" color="primary" @click="submit"> Submit </v-btn>
                                        </v-col>
                                           <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                                            <v-btn x-large block  color="warning" @click="resendConfirmationCode"> Resend Code </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-form>
                                        <v-spacer></v-spacer>



                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs>
            </div>
   
        </v-dialog>
  


    </v-app>
</div>
</template>

<script>
import router from '../router'
import { Auth } from 'aws-amplify';
export default {
    computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    }
  },
  methods: {
    async validate() {
        if (this.$refs.loginForm.validate()) {
             try {
                await Auth.signIn(this.loginEmail, this.loginPassword);
                router.push({ name: "BountyCard" });

    } catch (error) {
       this.message = error.message;
        this.isShow = true;
      }          
     }
    },
    async  resendConfirmationCode() {
    try {
        await Auth.resendSignUp(this.email);
         this.message ='code resent successfully';
         this.isShow = true;
    } catch (err) {
        this.message = err.message;
         this.isShow = true;
    }
    },
      
    cancel(){
        router.push({ name: "Home" });
    },
    
    async register() {
      if (this.$refs.registerForm.validate()){
          try {
            const {dataUser}  =  await Auth.signUp({
                  username: this.email,
                  password: this.password,
                  attributes: {
                     email: this.email
                  },
                   response: { 
              autoVerifyEmail: true
              },
              });
              this.dataUser = dataUser;
              console.log(this.dataUser);
              //alert('User successfully registered.');
              this.isValid=false;
          } catch (error) {
              this.message = error.message;
               this.isShow = true;
          }
    }
    },
      async submit() {
          try {
            await Auth.confirmSignUp(this.email, this.code);
            router.push({ name: "BountyCard" });
          } catch (error) {
             this.message = error.message;
             this.isShow = true;
          }
      },

  },
  data: () => ({
    dialog: true,
    tab: 0,
    tabs: [
        {name:"Login", icon:"mdi-account"},
        {name:"Register", icon:"mdi-account-outline"}
    ],
    valid: true,
    message:"",
    isValid: true,
    firstName: "",
    lastName: "",
    email: "",
    isShow:false,
    isRegister:"",
    password: "",
    code:"",
    verify: "",
    loginPassword: "",
    dataUser: "",
    loginEmail: "",
    loginEmailRules: [
      v => !!v || "Required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    emailRules: [
      v => !!v || "Required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],

    show1: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => (v && v.length >= 8) || "Min 8 characters"
    }
  })
}
</script>

<style scoped>

</style>