# Dokumentasi Logout
## **Method :**  `GET`
## **Route :**  `34.101.143.244/api/auth/logout`
## **Authentication :**  `JWT`
Endpoint ini berfungsi untuk mendapatkan access code baru
## **Header :**
```json
{
    "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBvY29wMW8iLCJyb2xlIjoidXNlciIsImlhdCI6MTY0ODEzNzY0OCwiZXhwIjoxNjQ4MTM3Njc4fQ.kHFMk8wi7DHECDcTv3RzX-Ek2lfpTxBXG29i_Tml2-M"
}
```
## **Response :**

- ### **Success**
    Status Code : 200 OK
    ```json
    {
        "message" : "Sukses Logout!"
    }
    ```
- ### **Error**
    Status Code : 400 Bad Request

    Error :
    - Invalid Token
    - JWT Expired
    ```json
    {
        "message": "Salah",
        "error": "jwt expired"
    }
    ```

