# Dokumentasi Login
## **Method :**  `POST`
## **Route :**  `34.101.143.244/api/auth/login`
## **Authentication :**  `None`
Endpoint ini berfungsi untuk login dan mendapatkan access token untuk pertama kali.
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
    Status Code : 200 OK
    ```json
    {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBvY29wMW8iLCJyb2xlIjoidXNlciIsImlhdCI6MTY0ODEzNzY0OCwiZXhwIjoxNjQ4MTM3Njc4fQ.kHFMk8wi7DHECDcTv3RzX-Ek2lfpTxBXG29i_Tml2-M",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBvY29wMW8iLCJyb2xlIjoidXNlciIsImlhdCI6MTY0ODEzNzY0OCwiZXhwIjoxNjQ4MTQxMjQ4fQ.O2rmtfNHVWJx168wKP4WxuiMh1Sca-mSqB0sZo5ZCpg"
    }
    ```
- ### **Error**
    Status Code : 400 Bad Request

    Error :
    - Body not contain username or password
    - Password not match
    - Username not alphanumeric
    - Username too long
    - Password not fulfilled the pattern
    ```json
    {
        "message": "Bad Request!",
        "error": "data and hash arguments required"
    }
    ```
    Status Code : 404 Not Found

    Error :
    - User not found
    ```json
    {
        "message": "User Tidak Ditemukan!"
    }
    ```



