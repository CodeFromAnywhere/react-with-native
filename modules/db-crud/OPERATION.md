# 💣 db-crud

Add a CRUD for any model into your app. The only thing you need to do is this:

1. Add two pages named `db` and `upsert` to your routes, that import `DbPage` and `UpsertPage` respectively.

2. Add Typerepo-compatible login (e.g. `login-form` to your app). This component only works when the `api.authToken` is set to a token that is authorised to do the CRUD.
