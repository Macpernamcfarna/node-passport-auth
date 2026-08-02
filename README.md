```markdown
# Node Passport Login

A modern Node.js authentication starter built with Express, Passport, MongoDB, Mongoose, EJS, and Bootstrap.

## Features

- **Local Authentication**: Handled seamlessly via Passport.js using modern async/await patterns.
- **User Registration & Login**: Secure user management flow with validation.
- **Password Security**: Password hashing using `bcryptjs`.
- **Protected Routes**: Middleware authorization for protected pages like `/dashboard`.
- **Flash Messages**: Interactive user feedback for form errors and authentication states.
- **EJS & Bootstrap 5**: Clean views rendered with template inheritance and mobile-first UI components.

---

## Prerequisites

- **Node.js**: v22.0.0 or higher recommended
- **npm**: v10.0.0 or higher
- **MongoDB**: A running instance of MongoDB Atlas or a local MongoDB database

---

## Installation

1. **Clone the repository** (or download source files):
   ```bash
   git clone [https://github.com/Macpernamcfarna/node-passport-auth.git](https://github.com/Macpernamcfarna/node-passport-auth.git)
   cd node-passport-login

```

2. **Install dependencies**:
```bash
npm install

```
> ⚠️ **Important:** This project requires its node modules (dependencies) to be installed before it can run. The dependencies are **not** included in the repository, so you must install them first.



---

## Database Configuration

1. Open `config/keys.js` and set your MongoDB URI:
```javascript
// Example: Local MongoDB connection
const dbPassword = 'mongodb://127.0.0.1:27017/node_passport_login';

module.exports = {
  mongoURI: dbPassword
};

```


2. For **MongoDB Atlas**, copy your connection string from the Atlas dashboard:
```javascript
module.exports = {
  mongoURI: 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/node_passport_login?retryWrites=true&w=majority'
};

```



> **Security Note:** Do not commit production database credentials or connection secrets to public GitHub repositories. Consider using environment variables (`dotenv`) for sensitive credentials.

---

## Usage

### Running in Production Mode

```bash
npm start

```

### Running in Development Mode (with Nodemon)

```bash
npm run dev

```

Once running, access the application in your browser at:
`http://localhost:5000`

---

## API & Route Reference

| HTTP Method | Path | Access | Description |
| --- | --- | --- | --- |
| `GET` | `/` | Public | Welcome / Splash page |
| `GET` | `/users/register` | Public | Registration page |
| `POST` | `/users/register` | Public | Create new user account |
| `GET` | `/users/login` | Public | Login page |
| `POST` | `/users/login` | Public | Authenticate user session |
| `GET` | `/dashboard` | Protected | Authenticated user dashboard |
| `GET` | `/users/logout` | Protected | Terminate user session & logout |

---

## Key Dependencies

This project uses modern versions of core ecosystem packages:

* [Express](https://expressjs.com/) (v5) - Web framework
* [Mongoose](https://mongoosejs.com/) (v9) - MongoDB object modeling
* [Passport](https://www.passportjs.org/) (v0.7) - Authentication middleware
* [bcryptjs](https://www.google.com/search?q=https://github.com/dcodeIO/bcrypt.js) - Password hashing
* [EJS](https://ejs.co/) - Templating engine
* [Bootstrap](https://getbootstrap.com/) (v5) - Front-end UI framework

---

## License

Distributed under the MIT License.

```

```
