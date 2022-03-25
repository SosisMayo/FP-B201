# Dokumentasi myPOKE API

myPOKE API adalah sebuah API yang akan memberikan data-data pokemon. Terdapat kurang lebih 800 data pokemon di dalamnya. API ini dibuat dengan menggunakan [express.js](https://expressjs.com/) dan [mongodb](https://www.mongodb.com/). Di dalam API ini terdapat 2 jenis endpoint, yaitu yang terbuka untuk umum dan yang memerlukan autentikasi berupa token [JTW](https://jwt.io/). Dalam API ini juga sudah ada beberapa implementasi [Graphql](https://graphql.org/). Untuk melakukan request, dapat dilakukan dengan mengakses ip berikut :

**IP**: `34.101.143.244`

Dalam API ini terdapat beberapa endpoint yang dapat dikelompokkan menjadi 4 :
- Endpoint User (`34.101.143.244/api/user`)
- Endpoint Pokemon (`34.101.143.244/api/pokemon`)
- Endpoint Auth (`34.101.143.244/api/auth`)
- Endpoint Graphql (`34.101.143.244/graphql`)

## Endpoint User

Endpoint ini menghandle mengenai data user

- [Get All User Data (Need Authentication)](user/getAll.md) : `GET 34.101.143.244/api/user`
- [Get User Data By Username (Need Authentication)](user/getByUsername.md) : `GET 34.101.143.244/api/user/:username`
- [Update User Data By Username (Need Authentication)](user/update.md) : `PUT 34.101.143.244/api/user/:username`
- [Delete User Data By Username (Need Authentication)](user/delete.md) : `DELETE 34.101.143.244/api/user/:username`

## Endpoint Pokemon

Endpoint ini menghandle mengenai data pokemon

- [Create Pokemon (Need Authentication)](pokemon/create.md) : `GET 34.101.143.244/api/pokemon`
- [Get All Pokemon](pokemon/getAll.md) : `GET 34.101.143.244/api/pokemon/:name`
- [Get Pokemon By Name](pokemon/getByName.md) : `GET 34.101.143.244/api/pokemon/:name`
- [Update Pokemon By Name (Need Authentication)](pokemon/update.md) : `PUT 34.101.143.244/api/pokemon/:name`
- [Delete Pokemon By Name (Need Authentication)](pokemon/delete.md) : `DELETE 34.101.143.244/api/pokemon/:name`

## Endpoint Auth

Endpoint ini menghandle mengenai autentikasi user

- [Register](auth/register.md) : `POST 34.101.143.244/api/auth/register`
- [Login](auth/login.md) : `POST 34.101.143.244/api/auth/login`
- [Generate New Access Token (Need Authentication)](auth/token.md) : `GET 34.101.143.244/api/auth/token`
- [Logout (Need Authentication)](auth/logout.md) : `GET 34.101.143.244/api/auth/logout`

## Endpoint Graphql

Endpoint ini menghandle mengenai request menggunakan graphql

- [Go To Graphql Playground](./graphql.md) : `GET 34.101.143.244/graphql`

## Postman Documentation

- [Link Dokumentasi Postman](https://go.postman.co/workspace/My-Workspace~b0e07789-162a-493d-8d36-05844951bada/collection/15275790-5c607b26-c244-44b7-8d1e-258e9aaa8945?action=share&creator=15275790)