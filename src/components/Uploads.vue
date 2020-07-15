<template>
   <div id = "wrapper">
      <div id="app"  class="control">
         <label for="cars">Select file type to Upload  </label>
         &nbsp;
         <select  id="uploadList"  @change="onChange($event)">
            <option value=""> - Select -</option>
            <option value="orders">Orders</option>
            <option value="customers">Customers</option>
            <option value="deliveries">Deliveries</option>
            <option value="orderItems">Order Items</option>
            <option value="customerCompanies">Customer Companies</option>
         </select>
      </div>
      <br>
      <div id = "orderItems">
         <label>
         <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" />
         </label>
         <button v-on:click="submitFile()" class="searchFile">Upload</button>
      </div>
   </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.js"></script>

<script>

import axios from 'axios';
export default {
  data : function()  {
		return {
       file: '',
       path: '',
       URL: this.$baseUrl + '/api/v1/data/'
    }
   }, 
  
  methods: {
    submitFile() {
      if(this.path != '' && this.file != '') { 
      let formData = new FormData();
      formData.append('file', this.file);
      axios.post(this.URL + this.path,
          this.file, {
            headers: {
              'Content-Type': 'application/octet-stream',
              'Token' : 'hunter2'
            }
          }
        ).then(function () {
          console.log('SUCCESS!!');
          alert("Succfully Uploaded");
        })
        .catch(function () {
          console.log('FAILURE!!');
          alert("Issue during upload, Please check the flie");
        });
      } else {
        alert("Select File type & Choosefile..");
      }
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    onChange(event) {
        this.path = event.target.value
    }
  }
}
</script>

<style scoped>
.searchFile {
  background-color: rgb(176, 223, 178); /* Green */
  border: none;
  color: black;
  padding: 6px 20px;
  text-decoration: bold;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
