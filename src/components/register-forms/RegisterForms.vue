<template>
  <!-- component -->
  <div class="h-screen md:flex">
    <div
      class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden"
    >
      <div>
        <h1 class="text-white font-bold text-4xl font-sans">
          Fabuloussians PH
        </h1>
        <p class="text-white mt-1">
          The most popular selling stuffs based in Philippines
        </p>
        <button
          type="submit"
          class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
        >
          Read More
        </button>
      </div>
      <div
        class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"
      ></div>
      <div
        class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"
      ></div>
      <div
        class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"
      ></div>
      <div
        class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"
      ></div>
    </div>
    <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
      <form @submit.prevent="registerStore.registerUser" class="bg-white w-96">
        <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello!</h1>
        <p class="text-sm font-normal text-gray-600 mb-7">
          Please register your account
        </p>

        <BaseInput
          element="input"
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          v-model="registerStore.firstName"
          :error="registerStore.firstNameError"
        >
          <template #icon
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              /></svg></template
        ></BaseInput>

        <BaseInput
          element="input"
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          v-model="registerStore.lastName"
          :error="registerStore.lastNameError"
        >
          <template #icon
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              /></svg></template
        ></BaseInput>

        <BaseInput
          element="input"
          type="text"
          id="age"
          name="age"
          placeholder="Age"
          v-model="registerStore.age"
          :error="registerStore.ageError"
        >
          <template #icon
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              /></svg></template
        ></BaseInput>

        <BaseInput
          element="input"
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          v-model="registerStore.username"
          :error="registerStore.usernameError"
        >
          <template #icon
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
              /></svg></template
        ></BaseInput>

        <BaseInput
          element="input"
          type="email"
          id="emailAddress"
          name="emailAddress"
          placeholder="Email Address"
          v-model="registerStore.emailAddress"
          :error="registerStore.emailAddressError"
        >
          <template #icon
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              /></svg></template
        ></BaseInput>

        <BaseInput
          element="dropdown"
          id="country"
          name="country"
          placeholder="Choose your Country"
          v-model="registerStore.country"
          :datas="countries"
          :error="registerStore.countryError"
        >
        </BaseInput>

        <BaseInput
          element="dropdown"
          id="province"
          name="province"
          placeholder="Choose your Province"
          v-model="registerStore.province"
          :datas="provinces"
          :error="registerStore.provinceError"
        >
        </BaseInput>

        <BaseInput
          element="dropdown"
          id="city"
          name="city"
          placeholder="Choose your City"
          v-model="registerStore.city"
          :datas="cities"
          :error="registerStore.cityError"
        >
        </BaseInput>

        <BaseInput
          element="dropdown"
          id="barangay"
          name="barangay"
          placeholder="Choose your Barangay"
          v-model="registerStore.barangay"
          :datas="barangays"
          :error="registerStore.barangayError"
        >
        </BaseInput>

        <button
          type="submit"
          class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
        >
          Register
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import BaseInput from "../UI/BaseInput.vue";

import { useRegisterStore } from "../../stores/register";

export default {
  name: "LoginForms",
  components: { BaseInput },
  data() {
    return {
      countries: [
        "Alaska",
        "Brunei",
        "Cambodia",
        "Denver",
        "Erickson",
        "Florida",
        "Philippines",
      ],
      provinces: [
        "Bataan",
        "Batanes",
        "Davao del Norte",
        "Laguna",
        "Pampanga",
        "Pangasinan",
        "Rizal",
      ],
      cities: [
        "Binan",
        "Cabuyao",
        "Calamba",
        "Canlubang",
        "San Pablo",
        "San Pedro",
        "Santa Rosa",
        "Siniloan",
      ],
      barangays: [
        "Baclaran",
        "Bigaa",
        "Mamatid",
        "Pulo",
        "Banay-Banay",
        "Katapatan",
        "Gulod",
        "Butong",
        "Hongkong",
      ],
    };
  },
  setup() {
    const registerStore = useRegisterStore();

    return { registerStore };
  },
};
</script>
