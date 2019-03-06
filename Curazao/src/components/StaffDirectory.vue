<template>
  <div class="ui container">
    <input v-model="filterBy" placeholder="Filter By Last Name">
    <table class="ui celled table">
      <thead>
        <tr>
          <th>Avatar</th>
          <th @click="sortBy = 'firstName'">First Name</th>
          <th @click="sortBy = 'lastName'">Last Name</th>
          <th @click="sortBy = 'email'">Email</th>
          <th @click="sortBy = 'phone'">Phone</th>
          <th @click="sortBy = 'department'">Department</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, index) in sortedEmployees" :key="index">
          <td>
            <img :src="employee.photoUrl" class="ui mini rounded image">
          </td>
          <td>{{ employee.firstName }}</td>
          <td>{{ employee.lastName }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.phone }}</td>
          <td>{{ employee.department }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="6">{{sortedEmployees.length}} employees</th>
        </tr>
      </tfoot>
    </table>
    <SearchBox @search="onSearch"/>
    <div>Develope by: {{ developer }}</div>
    <ol>
      <slot>
        <li>All done!</li>
      </slot>
    </ol>
  </div>
</template>

<script>
import SearchBox from "./SearchBox.vue";

export default {
  components: {
    SearchBox
  },
  name: "StaffDirectory",
  props: {
    developer: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      filterBy: "",
      sortBy: "department",
      employees: [
        {
          id: 1,
          firstName: "amelia",
          lastName: "austin",
          photoUrl: "https://randomuser.me/api/portraits/thumb/women/9.jpg",
          email: "amelia.austin@example.com",
          phone: "(651)5073705",
          department: "Engineering"
        },
        {
          id: 2,
          firstName: "bobbie",
          lastName: "murphy",
          photoUrl: "https://randomuser.me/api/portraits/thumb/women/79.jpg",
          email: "bobbie.murphy@example.com",
          phone: "(225)6677604",
          department: "Management"
        }
      ]
    };
  },
  created() {
    /*
      fetch('https://randomuser.me/api/?nat=us,dk,fr,gb&results=5')
      .then(response => response.json())
      .then(json => this.employees = json.results)
      */
  },
  computed: {
    sortedEmployees() {
      return this.employees
        .filter(employee => employee.lastName.includes(this.filterBy))
        .sort((a, b) => a[this.sortBy].localeCompare(b[this.sortBy]));
    }
  },
  methods: {
    onSearch(terms) {
      // make API call with search terms
      console.log("Event->", terms);
      //this.developer = terms;
    }
  }
};
</script>

<style>
h1.ui.center.header {
  margin-top: 3em;;
}
.ui.table th:not(:first-child):hover {
  cursor: pointer;;
}
input {
  padding: 3px;;
}
</style>