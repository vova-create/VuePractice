<template>
  <div class="downLoadForm">
    <vue-upload-multiple-image
        @upload-success="uploadImageSuccess"
        @edit-image="editImage"
        @mark-is-primary="markIsPrimary"
        @limit-exceeded="limitExceeded"
        @before-remove="beforeRemove"
        id-upload="myIdUpload"
        id-edit="myIdEdit"
        :max-image=1
        primary-text="Default"
        browse-text="Browse picture(s)"
        drag-text="Drag pictures"
        mark-is-primary-text="Set as default"
        popup-text="This image will be displayed as default"
        :multiple=true
        :show-edit=true
        :show-delete=true
        :show-add=true
    >
    </vue-upload-multiple-image>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import VueUploadMultipleImage from 'vue-upload-multiple-image'
import axios from "axios";

export default {
  name: "DownLoad",
  components: {
    VueUploadMultipleImage,
  },
  data() {
    return {
      selectedFile: null
    }
  },
  methods: {
    uploadImageSuccess(formData, index, fileList) {
      console.log('data', formData, index, fileList)
      axios.defaults.headers.common['x-api-key'] = "bb841dd0-045d-4eae-b4f0-c9fc24733d87"
      axios.post('https://api.thecatapi.com/v1/images/upload', formData, {headers: {'Content-Type': 'multipart/form-data'}})
          .then((response) => {
            console.log(response);
          })
          .then(() => {
            Swal.fire('Your picture was uploaded')
          })
          .catch((error) => {
            if (error.response) {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Your picture was not uploaded!',
              })
            }
          });
    },
    beforeRemove(index, removeCallBack) {
      console.log('index', index)
      let r = confirm("remove image")
      if (r == true) {
        removeCallBack()
      }
    },
    editImage(formData, index, fileList) {
      console.log('edit data', formData, index, fileList)
    },
    markIsPrimary(index, fileList) {
      console.log('markIsPrimary data', index, fileList)
    },
    limitExceeded(amount) {
      console.log('limitExceeded data', amount)
    }
  },

}
</script>

<style scoped>
.downLoadForm {
  display: flex;
  justify-content: center;
}
</style>