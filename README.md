# customer-orders

## Project setup
```
npm install

npm install -g @vue/cli

npm install vue-router --save

npm install axios --save

npm install bootstrap --save

npm install jQuery --save

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

Search Orders Screen:
   - This is a Search screen for the orders.
   - if you provide "Order Name" and "Date Range", then show the filter data.
   - "Order Name" and "Date Range" both are optional values.
   - We can see maximum 5 orders per page.
   - Nvigate page by clicking on the page numbers below the table.
Uploads Screen:
   - This Screen is used to upload files. (Backend API will persist into the PostGres DB)
   - Select the file content type from the dropdown list.
   - Click on Choose file to browse the file. (supports CSV formate).
   - It will show a popup if the Upload is successfull.
   
```

### Compiles and minifies for production
```
npm run build
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
