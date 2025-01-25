<template>
  <AppHeader />
  <div>
    <h2>Convert $ to €</h2>
    <h3>Currency exchange rate: {{ tecaj }}</h3>
    <input
      type="text"
      v-model="dollars"
      placeholder="Enter price in $"
      @input="validateInput"
    />

    <p>{{ dollars }}$ is equal to {{ dollarsToEuro }}€</p>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";

export default {
  data() {
    return {
      dollars: 0,
      tecaj: 0.97,
    };
  },
  components: {
    AppHeader,
  },
  computed: {
    dollarsToEuro() {
      if (typeof this.dollars !== "number" || isNaN(this.dollars)) {
        return "Error";
      }
      return (this.dollars * this.tecaj).toFixed(2);
    },
  },
  methods: {
    validateInput(event) {
      const value = event.target.value;
      if (value === "") {
        this.dollars = 0;
        return;
      }
      if (isNaN(value)) {
        this.dollars = 0;
      } else {
        this.dollars = parseFloat(value);
      }
    },
  },
};
</script>

<style scoped>
h2 {
  color: #2c3e50;
}
input {
  padding: 10px;
  margin-top: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
p {
  margin-top: 20px;
  font-size: 18px;
  color: #16a085;
}
</style>
