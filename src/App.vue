<template>
<h1 class="text-5xl aboslute w-screen p-auto animate-pulse top-16">HauMail</h1>  
<!-- <h1>{{selectedEmails.emails.size}} emails selected</h1>      -->
  <suspense>
    <MailTable />
    <template #fallback>
      Loading...
    </template>
  </suspense>
</template>

<script lang="ts">
import MailTable from "./components/MailTable.vue";
import selectedEmails from './composables/use-emails-selection'

export default {
  setup() {
    return { selectedEmails: selectedEmails() }
  },
  name: 'App',
  props: {
    type: Object as ProtoType<Email>
  },
  components: {
    MailTable
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
