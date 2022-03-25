# Dokumentasi Register
## **Method :**  `POST`
## **Route :**  `34.101.143.244/api/auth/register`
## **Authentication :**  `None`
Endpoint ini berfungsi untuk register user baru
## **Body :** 
```json
{
    "username" : "[Alphanumerical value, min 4, max 10, required]",
    "password" : "[Min 8 Character with at least 1 Uppercase, 1 Lowercase, 1 Number, and 1 Special Character, required]"
}
```
#### *Example :* 
```json
{
    "username" : "testuser",
    "password" : "!t3stUser!"
}
```

## **Response :**

- ### **Success**
    Status Code : 201 Created
    ```json
    {
        "message": "User berhasil dibuat",
        "data": {
            "username": "testuser",
            "password": "$2b$05$Fzj8.bRMbW.Q.ooqyep7/u4Ct5T4vNTghVV/2ycziu0ptyhv.iVnS",
            "role": "user",
            "refreshToken": null,
            "_id": "623c8c2965549cdbe9b06d81",
            "__v": 0
        }
    }
    ```
- ### **Error**
    Status Code : 400 Bad Request

    Error :
    - Body not contain username
    - Body not contain password
    - Username not unique
    - Username not alphanumeric
    - Username too long
    - Password not fulfilled the pattern
    ```json
    {
        "message": "Bad Request!",
        "error": "users validation failed: username: Path `username` is required."
    }
    ```


