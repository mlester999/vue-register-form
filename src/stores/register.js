import { defineStore } from "pinia";

export const useRegisterStore = defineStore("register", {
  state: () => ({
    firstName: "",
    lastName: "",
    age: "",
    username: "",
    emailAddress: "",
    country: "",
    province: "",
    city: "",
    barangay: "",
    firstNameError: false,
    lastNameError: false,
    ageError: false,
    usernameError: false,
    emailAddressError: false,
    countryError: false,
    provinceError: false,
    cityError: false,
    barangayError: false,
  }),
  actions: {
    registerUser() {
      if (this.firstName == "") {
        this.firstNameError = true;
      } else {
        this.firstNameError = false;
      }

      if (this.lastName == "") {
        this.lastNameError = true;
      } else {
        this.lastNameError = false;
      }

      if (this.age == "") {
        this.ageError = true;
      } else {
        this.ageError = false;
      }

      if (this.username == "") {
        this.usernameError = true;
      } else {
        this.usernameError = false;
      }

      if (this.emailAddress == "") {
        this.emailAddressError = true;
      } else {
        this.emailAddressError = false;
      }

      if (this.country == "") {
        this.countryError = true;
      } else {
        this.countryError = false;
      }

      if (this.province == "") {
        this.provinceError = true;
      } else {
        this.provinceError = false;
      }

      if (this.city == "") {
        this.cityError = true;
      } else {
        this.cityError = false;
      }

      if (this.barangay == "") {
        this.barangayError = true;
      }

      if (
        this.firstName != "" &&
        this.lastName != "" &&
        this.age != null &&
        this.username != "" &&
        this.emailAddress != "" &&
        this.country != "" &&
        this.province != "" &&
        this.city != "" &&
        this.barangay != ""
      ) {
        console.log("First Name: " + this.firstName);
        console.log("Last Name: " + this.lastName);
        console.log("Age: " + this.age);
        console.log("Username: " + this.username);
        console.log("Email Address: " + this.emailAddress);
        console.log("Country: " + this.country);
        console.log("Province: " + this.province);
        console.log("City: " + this.city);
        console.log("Barangay: " + this.barangay);
      }
    },
  },
});
