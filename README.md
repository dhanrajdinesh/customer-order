# customer-orders

## Project setup
```
Install npm (Node Package Manager)  

npm install -g @vue/cli

npm install vue-router --save

npm install axios --save

npm install vue2-datepicker --save

update the Property value with GO-API base URL in main.js file

E.g:
   Vue.prototype.$baseUrl='http://localhost:90';

```

### Compiles and hot-reloads for development
```
npm run serve
```

### accessing application 
```
Home URL / to open the application

once application successfully loaded there will be thow links to navigate.
* Search Orders
* Uploads

Orders Search Screen:

   - This is a Search screen for the orders.
   - Provide "Order Name" and "Date Range", and click on then Search button to show the filter data.
   - "Order Name" and "Date Range" both are optional values.
   - We can see maximum 5 orders per page.
   - Nvigate page by clicking on the page numbers below the table.
   - Click on "Order date" column to sort the records. 

Uploads Screen:

   - This Screen is used to upload files. (Backend API will persist data into the PostGres DB)
   - Select the file content type from the dropdown list.
   - Click on Choose file to browse the file. (supports CSV format).
   - It will show a po-pup if the Upload is successfull.
   
```

### Compiles and minifies for production
```
npm run build
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
