# Dokumentasi Get All Pokemon Data
## **Method :**  `GET`
## **Route :**  `34.101.143.244/api/pokemon?page=1&limit=1`
## **Authentication :**  `None`
Endpoint ini berfungsi untuk mendapatkan seluruh data pokemon. Query page dan limit dapat ditambahkan untuk melakukan pagination. Jika Query tidak ditambahkan maka otomatis semua data akan ditampilkan.

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
    Status Code : 404 Not Found

    Error :
    - Pokemon not found
    ```json
    {
        "message" : "Data Pokemon Tidak Ditemukan!"
    }
    ```

