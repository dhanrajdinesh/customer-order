<template>
   <div id="orders" class="col-sm-12">
      <div>
         <button class="button" v-on:click="getOrders" >Search</button> <input type = 'text' v-model="searchValue" style="width: 1000px;" placeholder="Search Order or Product">
         <br/>
         Created Date
         <div>
            <date-picker v-model="date"  lang="en" range type="date" format="YYYY-MM-DD" valueType="YYYY-MM-DD" placeholder="Start date - End date"></date-picker>
         </div>
      </div>
      <br/>
      <div class="offset">
         <table class="table table-bordered">
            <thead>
               <tr>
                  <th> Order Name </th>
                  <th> Customer Company name </th>
                  <th> Customer name </th>
                  <th> Order date </th>
                  <th> Delivered amount </th>
                  <th> Total Amount  </th>
               </tr>
            </thead>
            <tbody>
               <tr class = "notfirst" v-for="post in displayedPosts" v-bind:key="post">
                  <td> {{post.OrderName}} </td>
                  <td> {{post.CustomerCompany}} </td>
                  <td> {{post.CustomerName}} </td>
                  <td> {{post.OrderDate}} </td>
                  <td> {{post.DeliveredAmount}} </td>
                  <td> {{post.TotalAmount}} </td>
               </tr>
            </tbody>
         </table>
         <nav aria-label="Page navigation example">
            <ul class="pagination">
               <li class="page-item">
                  <button type="button" class="page-link" v-if="page != 1" @click="page--"> Previous </button>
               </li>
               <li class="page-item">
                  <button type="button" class="page-link" v-for="pageNumber in pages.slice(page-1, page+5)" v-bind:key="pageNumber" @click="page = pageNumber"> {{pageNumber}} </button>
               </li>
               <li class="page-item">
                  <button type="button" @click="page++" v-if="page < pages.length" class="page-link"> Next </button>
               </li>
            </ul>
         </nav>
      </div>
   </div>
</template>
<script>
import Vue from "vue";
import axios from 'axios';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
Vue.prototype.GO_URL = "";
DatePicker.install(Vue);
DatePicker.locale('en');
DatePicker.mounted;
export default {
  props: {
    msg: String
  },
  
  components: {
    DatePicker
  },

  data : function()  {
		return {
		posts : [''],
		page: 1,
		perPage: 5,
      pages: [],
      searchValue:'',
      tempData:'',
      responseData:null,
      date:'',
      datePath:'',
      URL:'',
      path : this.$baseUrl + '/api/v1/orders'		
		};
	},
	methods:{
		getOrders () {	
      this.tempData = '';
      if(this.date != '' && this.date != ",") {
          this.URL = this.path + '/' + this.date;
       } else {
          this.URL = this.path;
       }
        axios.get(this.URL,{ 
            headers: {
               'Token' : 'hunter2'
         }}).then(response =>  {
            this.tempData = response.data;
            this.filteredData();
            }).catch(function(error) {
           console.log(error)
           alert("Erro occurred..!!");
         }).finally(function() {
           //
         });
    },
    filteredData() {    
        this.page= 1
        this.pages= []
        this.searchValue = this.searchValue.trim().toUpperCase();
        if(this.searchValue != '') {
            this.posts = this.tempData.filter(post => post.OrderName.toUpperCase() == this.searchValue)
            console.log(this.posts);
          } else {
            this.posts = this.tempData
          }
		},
		setPages () {
			let numberOfPages = Math.ceil(this.posts.length / this.perPage);
			for (let index = 1; index <= numberOfPages; index++) {
				this.pages.push(index);
			}
		},
		paginate (posts) {
			let page = this.page;
			let perPage = this.perPage;
			let from = (page * perPage) - perPage;
			let to = (page * perPage);
			return  posts.slice(from, to);
		}
	},
	computed: {
		displayedPosts () {
			return this.paginate(this.posts);
		}
	},
	watch: {
		posts () {
			this.setPages();
		}
	},
	filters: {
		trimWords(value){
			return value.split(" ").splice(0,20).join(" ") + '...';
		}
	}
}
</script>


<style scoped>
button.page-link {
	display: inline-block;
}
button.page-link {
    font-size: 20px;
    color: #29b3ed;
    font-weight: 500;
}
.offset{
  width: 1000px !important;
  margin: 20px auto;  
}

.bi{
 cursor : pointer;   
 color: green;
}
#result {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  border: white;
  width: 100%;
}

#result td, #result th {
  border: 0;
  padding: 8px;
  border-bottom: 1px solid rgb(88, 110, 93);
}


.notfirst:hover {background-color: rgb(208, 240, 238);}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: middle;
  color: rgb(37, 43, 37);
}

.button {
  background-color: rgb(176, 223, 178); /* Green */
  border: none;
  color: black;
  padding: 6px 20px;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;
}


</style>
