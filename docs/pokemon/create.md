# Dokumentasi Create Pokemon
## **Method :**  `POST`
## **Route :**  `34.101.143.244/api/pokemon`
## **Authentication :**  `JWT`
Endpoint ini berfungsi untuk menambahkan data pokemon baru. Autentikasi dilakukan agar hanya admin yang dapat menambahkan data baru.

## **Body :** 
```json
{
    "name" : "[Alphanumerical value, min 4, max 10, required]",
    "type1" :"[String, required, valid value is 'normal','fight','flying','poison','ground','rock','bug','ghost','steel','fire','water','grass','electric','psychic','ice','dragon','dark','fairy']",
    "type2" :"[String, valid value is 'normal','fight','flying','poison','ground','rock','bug','ghost','steel','fire','water','grass','electric','psychic','ice','dragon','dark','fairy']",
    "total" :"[number, min 100, max 999]",
    "hp" :"[number, min 20, max 999]",
    "attack" :"[number, min 20, max 999]",
    "defense" :"[number, min 20, max 999]",
    "spAtt" :"[number, min 20, max 999]",
    "spDef" :"[number, min 20, max 999]",
    "speed" :"[number, min 20, max 999]",
    "generation" :"[number, min 1, max 9",
    "legendary" :"[boolean]",
}
```
#### *Example :* 
```json
{
    "spDeff": 50,
    "_id": "623c410b024f2fc7115c1fd2",
    "name": "bulbasaur",
    "type1": "grass",
    "type2": "poison",
    "total": 318,
    "hp": 45,
    "attack": 49,
    "defense": 49,
    "spAtt": 65,
    "spDef": "65",
    "speed": 45,
    "generation": 1,
    "legendary": false
}
```

## **Response :**

- ### **Success**
    Status Code : 200 OK
    ```json
    {
    "message": "Sukses!",
    "data": [
        {
            "spDeff": 50,
            "_id": "623c410b024f2fc7115c1fd2",
            "name": "bulbasaur",
            "type1": "grass",
            "type2": "poison",
            "total": 318,
            "hp": 45,
            "attack": 49,
            "defense": 49,
            "spAtt": 65,
            "spDef": "65",
            "speed": 45,
            "generation": 1,
            "legendary": false
        }]
    }
    ```
- ### **Error**
    Status Code : 400 Bad Request

    Error :
    - Name not unique
    - JWT expired
    - Name validation failed
    - Data type wrong
    - Body not contain required field
    ```json
    {
        "message": "Bad Request!",
        "error": "pokemons validation failed: name: Pokemon Harus Memiliki Nama"
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
        "message": "User dilarang melakukan POST"
    }
    ```

