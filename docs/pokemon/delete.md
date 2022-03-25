# Dokumentasi Delete Pokemon
## **Method :**  `DELETE`
## **Route :**  `34.101.143.244/api/pokemon/:name`
## **Authentication :**  `JWT`
Endpoint ini berfungsi untuk menghapus data pokemon yang telah ada. Autentikasi dilakukan agar hanya admin yang dapat menghapus data tersebut. 

## **Response :**

- ### **Success**
    Status Code : 200 OK
    ```json
    {
        "message": "Data Pokemon bulbasaur Telah Dihapus!"
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
        "message": "User dilarang melakukan delete"
    }
    ```

    Status Code : 404 Not Found

    Error : 
    - Pokemon Not Found
    ```json
    {
        "message": "Not Found!",
        "error": "Data Pokemon bulbasau Tidak Ditemukan!"
    }   
    ```

