<template>
  <div id="content">
    <div class="lobimail fadeInDown animated">
      <div class="row">
        <mail-sidebar></mail-sidebar>
        <mail-content></mail-content>
      </div>
    </div>
  </div>
</template>

<script>
import MailContent from './components/MailContent'
import MailSidebar from './components/MailSidebar'

export default {
  name: "mailing",
  components: {
    MailSidebar,
    MailContent
  }
}
</script>

<style scoped>

</style>
