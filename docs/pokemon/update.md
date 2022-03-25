# Dokumentasi Update Pokemon
## **Method :**  `PUT`
## **Route :**  `34.101.143.244/api/pokemon/:name`
## **Authentication :**  `JWT`
Endpoint ini berfungsi untuk mengubah data dari sebuah pokemon melalui nama. Autentikasi dilakukan agar hanya admin yang dapat melakukan perubahan data

## **Body :** 
```json
{
    "type1" :"[String, valid value is 'normal','fight','flying','poison','ground','rock','bug','ghost','steel','fire','water','grass','electric','psychic','ice','dragon','dark','fairy']",
    "type2" :"[String, valid value is 'normal','fight','flying','poison','ground','rock','bug','ghost','steel','fire','water','grass','electric','psychic','ice','dragon','dark','fairy']",
    "total" :"[number, min 100, max 999]",
    "hp" :"[number, min 20, max 999]",
    "attack" :"[number, min 20, max 999]",
    "defense" :"[number, min 20, max 999]",
    "spAtt" :"[number, min 20, max 999]",
    "spDef" :"[number, min 20, max 999]",
    "speed" :"[number, min 20, max 999]",
}
```
#### *Example :* 
```json
{
    "hp" : 500
}
```

## **Response :**

- ### **Success**
    Status Code : 200 OK
    ```json
    {
    "message": "Sukses!",
    "data": {
        "spDeff": 50,
        "_id": "623c410b024f2fc7115c1fd2",
        "name": "bulbasaur",
        "type1": "grass",
        "type2": "poison",
        "total": 318,
        "hp": 500,
        "attack": 49,
        "defense": 49,
        "spAtt": 65,
        "spDef": "65",
        "speed": 45,
        "generation": 1,
        "legendary": false
        }
    }   
    ```
- ### **Error**
    Status Code : 400 Bad Request

    Error :
    - Cannot update name, generation, and legendary status
    - Body validation failed
    - JWT Expired
    - Invalid Token
    ```json
    {
        "message": "Bad Request!",
        "error": "Nama,Generasi, dan status Legendary Pokemon Tidak Dapat Diubah"
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
        "message": "User dilarang melakukan perubahan data"
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

