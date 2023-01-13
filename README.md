## Disney plus Clon

### Description

Simple clone of Disney plus website. This was built with NextJS, NodeJS and integration with cloudinary services.

### Installation

#### First Step

**1.** Make sure you have a version of Node +16.

**2.** Download this repository.

**3.** Enter in backend and frotend folder, then run `npm install` in both folders.

---

### Backend installation

**1.** Prepare a SQL-based database.

**2.** Copy .env.example content inside of a new .env and fill all the env variables, for example:

```plaintext
MODE:'dev'
PORT=8080

#Database
DB='mysql'
DB_USER='root'
DB_PASSWORD='root'
DB_HOST='localhost'
DB_NAME='yourDatabase'
DB_PORT='3306'

#production uri
DATABASE_URL=''

#User admin
ADMIN_USERNAME ='admin' 
ADMIN_USER_EMAIL ='admin@example.com'
ADMIN_USER_PASSWORD ='admin'

# JWT
SECRET_JWT='yourSecret'

# CLOUDINARY
CLOUDINARY_NAME=''
CLOUDINARY_API_KEY=''
CLOUDINARY_API_SECRET=''
```

**3.** run `npm run migrations:run` to generate migrations in your database table.

**4.** **(optional)** run `npm run seeds:run` to fill your database with data, if you take this step take into consideration that **this** **will not use cloudinary**, will use the files in public folder. You will need to manually **use the API endpoints** to create elements with images stored in your cloudinary account.

**5.** Finally, run `npm start` to start the server or, `npm run dev` in case you want to be in development mode.

**6\.** Use the auth endpoint with your admin user because you will need the JWT for CRUD actions such as create, update and delete.

---

### Frontend installation

**1.** Enter in frontend folder.

**2.** Copy .env.example content inside of a new .env and fill all the env variables, for example:

```plaintext
NEXT_PUBLIC_API_SERVER="http://localhost:8080/api/v1"
NEXT_PUBLIC_HOST="http://localhost:3000" 
```

**3.**  run `npm start` to start the server or, `npm run dev` in case you want to be in development mode.

**4.**  Enjoy 👀.
