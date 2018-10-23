# 6th Practical Class: DB and ORM

# Docs

- [Sequelize docs](http://docs.sequelizejs.com/)
  - [Migrations Tutorial](http://docs.sequelizejs.com/manual/tutorial/migrations.html)

# Install

# Config backend

1. In `backend/src/config/` rename `config.js.example` to `config.js`
2. In both `development` and `production`: fill out your MySQL user, password and database

# Create tables + seed

```bash
cd backend
yarn sequelize db:migrate
yarn sequelize db:seed:all --debug
```

# Run `build:watch`

```bash
npm run build:watch
```

---

## Create `ContactForm` Model

```bash
yarn sequelize model:generate --name ContactForm --attributes name:string,email:string,message:text
```

---

## Formik

- [Formik Docs](https://jaredpalmer.com/formik)
  - [Tutorial](https://jaredpalmer.com/formik/docs/tutorial)


```js
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log('---> submit', values);
          actions.setSubmitting(false);
        }}
        render={({
          values,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          // ...
        )}
      />
```
