<template>
  <div class="login-wrapper">
    <div
      class="box w-[327px] bg-smokeblack mx-auto items-center my-auto h-[432px] flex-shrink-0 rounded-[10px] md:w-[400px] md:h-[458px]"
    >
      <h2 class="pt-[20px] pl-[24px] md:pt-[38px] md:pl-[32px] pb-[33px]">
        Sign up
      </h2>
      <form @submit.prevent="validateForm">
        <div
          class="input w-[298px] h-[37px] md:w-[336px] md:h-[37px] mx-auto mb-[33px]"
        >
          <label for="email">Email address:</label>
          <input
            class="bg-smokeblack focus:outline-none text-white border-b-2 h-[30px] border-white"
            type="email"
            id="email"
            v-model="email"
            required
          />
        </div>
        <div
          class="input w-[298px] h-[37px] md:w-[336px] md:h-[37px] mx-auto mb-[33px]"
        >
          <label for="password">Password:</label>
          <input
            class="bg-smokeblack focus:outline-none text-white border-b-2 h-[30px] border-white"
            v-model="password"
            required
            type="password"
          />
        </div>
        <div
          class="input w-[298px] h-[37px] md:w-[336px] md:h-[37px] mx-auto mb-[33px]"
        >
          <label for="repeatPassword">Repeat Password:</label>
          <input
            class="bg-smokeblack focus:outline-none text-white border-b-2 h-[30px] border-white"
            v-model="repeatPassword"
            required
            type="password"
          />
        </div>
        <button
          type="submit"
          class="ml-[14.5px] md:ml-[30.5px] hover:bg-white hover:text-black rounded-[6px] text-white w-[298px] h-[48px] md:w-[336px] bg-pinkishred"
        >
          Login
        </button>
        <div class="text-center pt-[21px]">
          <h3 class="text-white">
            Already have an account?
            <router-link to="/signup">
              <span class="text-pinkishred">Login.</span></router-link
            >
          </h3>
          <p v-if="errorMessage" class="text-white">{{ errorMessage }}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
// Reactive state variables
const email = ref("");
const password = ref("");
const repeatPassword = ref("");
const errorMessage = ref("");

const router = useRouter();
// Form validation function
// Form validation function
function validateForm() {
  if (!isValidEmail(email.value)) {
    errorMessage.value = "Invalid email address.";
  } else if (!isValidPassword(password.value)) {
    errorMessage.value = "Password must be at least 6 characters long.";
  } else if (password.value !== repeatPassword.value) {
    errorMessage.value = "Passwords do not match.";
  } else {
    errorMessage.value = "";
    // Proceed with sign-up
    console.log("Form submitted:", {
      email: email.value,
      password: password.value,
      repeatPassword: repeatPassword.value,
    });
    router.push('/home'); // Redirect after successful sign-up
  }
}

const isInputFocused = ref(false);


const handleInputFocus = () => {
  isInputFocused.value = true;
};

const handleInputBlur = () => {
  isInputFocused.value = false;
};

// Email validation function
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Password validation function
function isValidPassword(password) {
  return password.length >= 6;
}
</script>

<style scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full height of the viewport */
}

label {
  display: block;
  margin-bottom: 0.5em;
}
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
.input {
  display: flex;
  flex-direction: column;
  text-decoration: none;
}

label {
  color: var(--Pure-White, #fff);
  font-feature-settings: "clig" off, "liga" off;

  /* Body (M) */
  font-family: Outfit;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}
p {
  color: red;
}
</style>
