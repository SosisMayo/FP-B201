# Dokumentasi Get User Data By Username
## **Method :**  `GET`
## **Route :**  `34.101.143.244/api/user/:username`
## **Authentication :**  `JWT`
Endpoint ini berfungsi untuk mendapatkan data user sesuai username yang dicari. Autentikasi dilakukan untuk mengecek role yang dimiliki. Jika role adalah admin, maka bisa untuk mendapatkan data dari user mana saja, namun jika role adalah user hanya akan bisa mendapatkan data dari user itu sendiri.

## **Response :**

- ### **Success**
    Status Code : 200 OK
    ```json
    {
        "message": "Sukses!",
        "data": {
            "username": "pocop1o",
            "role": "admin",
            "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBvY29wMW8iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NDgxNTA3NDUsImV4cCI6MTY0ODE1NDM0NX0.HjKF87p5HqFy4GJic7hagX8_5ekTJ39VZInhfSBTkS8"
        }
    } 
    ```
- ### **Error**
    Status Code : 400 Bad Request

    Error :
    - JWT expired
    - Invalid Token
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
    - Access other user data
    ```json
    {
        "message": "Dilarang mengakses data user lain"
    }
    ```

    Status Code : 404 Not Found

    Error :
    - User not found
    ```json
    {
        "message" : "Data user Tidak Ditemukan!"
    }
    ```

