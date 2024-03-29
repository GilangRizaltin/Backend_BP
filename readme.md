# Bintang Pelajar Back-End Express JS

## Technologies used in this project

- [Express JS](https://pkg.go.dev/github.com/gin-gonic/gin#section-readme) \
  Express JS is a minimalist and flexible Node.js web application framework.

- [JSON Web Token](https://jwt.io/introduction) \
  JSON Web Token (JWT) is a compact, URL-safe means of representing claims between two parties.

- [PG](https://github.com/brianc/node-postgres) \
  Node-Postgres, commonly abbreviated as pg, is a Node.js driver for PostgreSQL databases.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in your root directory

```bash
  DB_HOST = "YOUR DB_HOST"
  DB_NAME = "YOUR DB_NAME"
  DB_USER = "YOUR DB_USER"
  DB_PASSWORD = "YOUR DB_PASSWORD"
  JWT_KEY = "YOUR JWT_KEY"
  ISSUER = "YOUR ISSUER"
```

## Run Locally

1. Clone the project

```bash
  $ git clone https://github.com/GilangRizaltin/Backend_BP
```

2. Go to the project directory

```bash
  $ cd Backend_BP
```

3. Install dependencies

```bash
  $ npm install
```

4. Start the server

```bash
  $ npm run dev
```

## API Reference

#### Authentication & Authorization

| Method | Endpoint           | Description                     |
| :----- | :----------------- | :------------------------------ |
| `post` | `"/auth/register"` | register user                   |
| `post` | `"/auth/login"`    | get access and identity of user |

#### Users

| Method   | Endpoint                      | Description                    |
| :------- | :---------------------------- | :----------------------------- |
| `get`    | `"/user/student"`             | Get all student                |
| `get`    | `"/user/profile"`             | Get student's profile          |
| `patch`  | `"/user/profile"`             | Update student's profile       |
| `patch`  | `"/user/profile/:student_id"` | Get student's profile by admin |
| `delete` | `"/user/:student_id"`         | Delete student                 |

## Documentation

[Postman Documentation](https://documenter.getpostman.com/view/29696636/2s9YywfKWF)

## Related Project

[Front End BP (React JS)](https://github.com/GilangRizaltin/Frontend_BP)

## Support

For support, email gilangzaltin@gmail.com
