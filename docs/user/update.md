# Dokumentasi Update User
## **Method :**  `PUT`
## **Route :**  `34.101.143.244/api/user/:username`
## **Authentication :**  `JWT`
Endpoint ini berfungsi untuk mengubah data dari user dengan username tertentu. Autentikasi dilakukan untuk mengetahui role yang dimiliki. Ketika role adalah admin maka bisa untuk mengubah data user lain, namun ketika role adalah user maka hanya bisa mengubah data dari user itu sendiri.

## **Body :** 
```json
{
    "username" : "[Alphanumerical value, min 4, max 10]",
    "password" : "[Min 8 Character with at least 1 Uppercase, 1 Lowercase, 1 Number, and 1 Special Character]"
}
```
#### *Example :* 
```json
{
    "username" : "popcop11"
}
```

## **Response :**

- ### **Success**
    Status Code : 200 OK
    ```json
    {
        "message": "Sukses!",
        "data": {
            "_id": "623c9492843353f6129a142f",
            "username": "popcop11",
            "password": "$2b$05$h1vcumi5SKOoYgOPqomLAeGc8GbRRFkfH6/dMSsno3wO3xjk/EK0S",
            "role": "admin",
            "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBvY29wMW8iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NDgxNTE0MDIsImV4cCI6MTY0ODE1NTAwMn0.PgRsVDun9Rl_7PbovYX2P47O_J5hWjLDW2ze9cGxmGc",
            "__v": 0
        }
    }   
    ```
- ### **Error**
    Status Code : 400 Bad Request

    Error :
    - JWT expired
    - Invalid token
    - Cannot change role
    - Body not contain username or password
    - Username not alphanumeric
    - Username too long
    - Password not fulfilled the pattern
    ```json
    {
        "message": "Bad Request!",
        "error": "jwt expired"
    }
    ```

    Status Code : 401 Unauthorized

    Error : 
    - Not Logged In
    ```json
    {
        "message": "Akses Ditolak!"
    }
    ```

    Status Code : 403 Forbidden

    Error : 
    - User want to change other user data
    ```json
    {
        "message": "Dilarang mengubah data user lain!"
    }
    ```

    Status Code : 404 Not Found

    Error : 
    - User Not Found
    ```json
    {
        "message": "Not Found!",
        "error": "Data user dengan nama popcop11111 tidak ditemukan"
    }   
    ```

