<template>
  <div class="downLoadForm">
    <h1>{{ selectedImage }}</h1>
    <input type="file">
    <button @click="upLoadImage">загрузить кота</button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "DownLoad",

  computed: mapGetters(['selectedImage']),
  methods: {
    selectFile(event) {
      this.selectedImage = event.target.files[0]
    },
    ...mapActions(['upLoadImage', 'selectFile'])
  },
}
</script>

<style scoped>

</style>