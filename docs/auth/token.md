# Dokumentasi Token
## **Method :**  `GET`
## **Route :**  `34.101.143.244/api/auth/token`
## **Authentication :**  `JWT`
Endpoint ini berfungsi untuk mendapatkan access token baru
## **Header :**
```json
{
    "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBvY29wMW8iLCJyb2xlIjoidXNlciIsImlhdCI6MTY0ODEzNzY0OCwiZXhwIjoxNjQ4MTM3Njc4fQ.kHFMk8wi7DHECDcTv3RzX-Ek2lfpTxBXG29i_Tml2-M",
    "Refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBvY29wMW8iLCJyb2xlIjoidXNlciIsImlhdCI6MTY0ODEzNzY0OCwiZXhwIjoxNjQ4MTQxMjQ4fQ.O2rmtfNHVWJx168wKP4WxuiMh1Sca-mSqB0sZo5ZCpg"
}
```
## **Response :**

- ### **Success**
    Status Code : 200 OK
    ```json
    {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBvY29wMW8iLCJyb2xlIjoidXNlciIsImlhdCI6MTY0ODE0MjI4MCwiZXhwIjoxNjQ4MTQyMzEwfQ.i8Y2o92LKAnnNg7OZVUnEfj5LmpJQOocqM7pgj_tly4"
    }
    ```
- ### **Error**
    Status Code : 400 Bad Request

    Error :
    - Invalid Token
    - JWT Expired
    - Not Logged In
    ```json
    {
        "message": "Salah",
        "error": "jwt expired"
    }
    ```

