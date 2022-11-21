# clone of FLIPKART E-commerce website .
![Screenshot (15)](https://user-images.githubusercontent.com/77377184/203068132-a3438d9c-06ff-48b4-9b9d-51d582e9f1c7.png)

 This project is clone of flipkart e-commerce website made using MERN stack.implemented paytm payment gateway for transaction. MUI-5 is used for styling.
 This project is complete responsive.
 
 ## Features ##
 * Login and register functionality.
 * Add to cart showing with total no.of products and total sum.
 * payment using paytm payment gateway.
 * complete responsive website.
 * Remove Item from cart.
 * search product using searchbar.
 
 ## Run Locally ##
 ### 1. Clone Repo ###
 ```
 $ git clone https://github.com/krishnadev7/flipkart.git
 $ npm install
 ```
 
 ### 2. create a .env folder ###
  * create a .env folder inside root folder.
  
 ### 3.  Setup MongoDB ###
  * create a Atlas Cloud MongoDB database at [ https://cloud.mongodb.com ]
  * In .env file update MONGO_URI = mongodb+srv://your-db-connection

 ### 4. creating Credentials for paytm payment gateway inside .env file
 ```
    PAYTM_MID=DIY12386817555501617
    PAYTM_WEBSITE=DIYtestingweb
    PAYTM_CHANNEL_ID=WEB
    PAYTM_INDUSTRY_TYPE_ID=Retail
    PAYTM_CUST_ID= [here you need to add your paytm user id ]
    PAYTM_MERCHANT_KEY=bKMfNxPPf_QdZppa
  ```
   for creating your paytm customer id go to (https://dashboard.paytm.com/login/)
   also refer for paytm test credentials on (https://mvcjaipur.wordpress.com/2017/01/23/test-credentials-for-testing-paytm/)
   
  ### 5. Run Backend ###
  ```
  $ cd server 
  $ npm install 
  $ npm start
  ```
  ### 6. Run Frontend ###
  ```
  $ cd client
  $ npm install
  $ npm start 
  ```
