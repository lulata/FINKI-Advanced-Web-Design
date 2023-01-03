// Your Vue code here....

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "",
    };
  },
  mounted() {
    console.log("Mounted!");
  },
  computed: {
    has_uppercase() {
        return this.message.toLowerCase() != this.message;
    },
    has_lowercase() {
        return this.message.toUpperCase() != this.message;
    },
    has_number() {
        return this.message.match(/\d+/g);
    },
    has_special() {
        return this.message.match(/[^a-zA-Z0-9]/g);
    }
  },
}).mount("#app");
