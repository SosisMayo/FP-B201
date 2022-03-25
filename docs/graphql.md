# Dokumentasi Graphql
## **Method** : `GET`
## **Route** : `34.101.143.244/graphql`
## **Authentication** : `None`
Endpoint ini merupakan jalan masuk menuju Graphql Playground. Pada Graphql Playground ini kita bisa melakukan request sesuai dengan keinginan kita.
Data yang bisa diakses melalui Graphql yaitu :

- ## User
    Memiliki field :
    - username : string
    - password : string
    - role : enum(role)
- ## Pokemon
    Memiliki field :
    - name : string
    - type1  : string
    - type2 : string
    - total : int
    - hp : int
    - attack : int
    - defense : int
    - spAtt  : int
    - spDef : int
    - speed : int
    - generation : int
    - legendary : boolean

 Untuk Query yang dapat digunakan yaitu :
- ## getAllPokemon
    Query ini akan menghasilkan list dari seluruh data pokemon
- ## getPokemonByName
    Query ini menerima parameter name yang bertipe string dan menghasilkan data dari pokemon dengan nama tersebut