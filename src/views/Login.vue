<template>

  <div class="flex items-center  justify-center h-screen">
    
    <div
      class="box w-[327px] bg-smokeblack mx-auto items-center my-auto h-[365px] flex-shrink-0 rounded-[10px] md:w-[400px] md-h-[373px]"
    >
      <h2 class="pt-[24px] pl-[24px] md:pt-[32px] md:pl-[32px] pb-[33px] ">Login</h2>
      <form @submit="this.$router.push('/home')">
        <div class=" input w-[298px] h-[37px] md:w-[336px] md:h-[37px] mx-auto mb-[38px]">
          <label for="email" class="pl-[16px] md:pl-[24px]" :class="{ 'opacity-0': email.length > 0, 'invisible': email.length > 0 }">Email address</label>
          <input class="bg-smokeblack focus:outline-none text-white border-b-2 h-[30px] border-white" @focus="handleInputFocus"
      @blur="handleInputBlur"  type="email" id="email" v-model="email" required />    <h4  v-if="showEmailError" class="text-red-500 text-[12px] relative bottom-10 left-[180px] ">email can't be empty</h4>
        </div>

        <div class=" input w-[298px] h-[37px] md:w-[336px] md:h-[37px] mx-auto mb-[38px]">
          <label for="password" class="pl-[16px] md:pl-[24px]" :class="{ 'opacity-0': password.length > 0, 'invisible': password.length > 0 }">Password</label>
          <input class="bg-smokeblack focus:outline-none text-white border-b-2 h-[30px] border-white" @focus="handleInputFocus"
      @blur="handleInputBlur" type="password" id="password" v-model="password" required />      <h4 v-if="showPasswordError"  class="text-red-500 text-[12px] relative bottom-10 left-[180px] ">Password can't be empty</h4>
        </div>
       

        <button type="submit" @click="handleLogin()" class="ml-[14.5px] md:ml-[30.5px]  hover:bg-white hover:text-black rounded-[6px] text-white w-[298px] h-[48px] md:w-[336px] bg-pinkishred">Login </button>

        <div class="text-center pt-[21px]"><h3 class="text-white">Don’t have an account? <router-link to="/signup"> <span class="text-pinkishred">sign up </span></router-link> </h3></div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch  } from "vue";
import * as HeroiconsSolid from '@heroicons/vue/solid';
const email = ref("")
const password = ref("");
 const isFormValid = ref("")
const error = ref('')


const showEmailError = ref(false);
    const showPasswordError = ref(false);


    const checkEmail = () => {
      if (email.value === '' ) {
        showEmailError.value = true;

      } else {
        showEmailError.value = false;
      }
    };
    const checkPassword = () => {
      if (password.value === '' ) {
        showPasswordError.value = true;

      } else {
        showPasswordError.value = false;
      }
    };



    const handleLogin = () => {
      checkEmail();
      checkPassword();
     
    };
    const isInputFocused = ref(false);

    const handleInputFocus = () => {
      isInputFocused.value = true;
    };

    const handleInputBlur = () => {
      isInputFocused.value = false;
    };






const login = () => {
  // Implement login logic here
  console.log("Login functionality will be implemented here.");
};
</script>

<style scoped>
h2 {
  color: var(--Pure-White, #fff);
  font-feature-settings: "clig" off, "liga" off;

  /* Heading (L) */
  font-family: Outfit;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.5px;
}
@media (min-width: 768px) {
  h2 {
    font-family: Outfit;
font-size: 32px;
font-style: normal;
font-weight: 300;
line-height: normal;
letter-spacing: -0.5px;
  }
}
.input{
  display: flex;
  flex-direction: column;
  text-decoration: none;
}
label{
  color: var(--Pure-White, #FFF);
font-feature-settings: 'clig' off, 'liga' off;

/* Body (M) */
font-family: Outfit;
font-size: 15px;
font-style: normal;
font-weight: 300;
line-height: normal;
}

  .opacity-0 {
    opacity: 0;
  }

  .invisible {
    visibility: hidden;
  }
</style>
