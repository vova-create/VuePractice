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
.heart {
  position: relative;
  top: 70px;
  height: 30px;
  width: 30px
}

.catItems {
  box-sizing: border-box;
  flex-wrap: wrap;
}

.catPicture {
  height: 300px;
  width: 300px;
  margin: 10px;
  border: 1px solid gold;
}
</style>