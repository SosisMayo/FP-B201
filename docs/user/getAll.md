# Dokumentasi Get All User Data
## **Method :**  `GET`
## **Route :**  `34.101.143.244/api/user?page=1&limit=1`
## **Authentication :**  `JWT`
Endpoint ini berfungsi untuk mendapatkan seluruh data user. Query page dan limit dapat ditambahkan untuk melakukan pagination. Jika Query tidak ditambahkan maka otomatis semua data akan ditampilkan. Autentikasi dilakukan untuk mengecek role yang dimiliki. Jika role adalah admin, maka akan didapatkan data dari seluruh user, namun jika role adalah user hanya akan didapatkan data dari user itu sendiri.

## **Response :**

- ### **Success**
    Status Code : 200 OK
    ```json
    {
        "message": "Sukses!",
        "data": {
            "username": "pocop1o",
            "role": "user",
            "iat": 1648150588,
            "exp": 1648150618
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
    Status Code : 404 Not Found

    Error :
    - User not found
    ```json
    {
        "message" : "Data user Tidak Ditemukan!"
    }
    ```

