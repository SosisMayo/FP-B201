# Dokumentasi Delete User
## **Method :**  `DELETE`
## **Route :**  `34.101.143.244/api/user/:username`
## **Authentication :**  `JWT`
Endpoint ini berfungsi untuk menghapus data user yang telah ada. Autentikasi dilakukan agar hanya admin yang dapat menghapus data tersebut.

## **Response :**

- ### **Success**
    Status Code : 200 OK
    ```json
    {
        "message": "Data User admin1 Telah Dihapus!"
    }
    ```
- ### **Error**
    Status Code : 400 Bad Request

    Error :
    - JWT Expired
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
    - Wrong Role
    ```json
    {
        "message": "User Dilarang Melakukan Delete !"
    }
    ```

    Status Code : 404 Not Found

    Error : 
    - User Not Found
    ```json
    {
        "message": "Not Found!",
        "error": "Data user dengan nama admin111 tidak ditemukan"
    }  
    ```

