# API de Gerenciamento de Biblioteca Virtual

## Introdução

API simples para efetuar operações de CRUD em um sistema de biblioteca.

### Versão
1.0

## Recursos Principais

- CRUD Livros
- CRUD Autores
- CRUD Editoras

## Endpoints

### Listar Autores
- **Método:** GET
- **URL:** `/autores`
- **Parâmetros de Consulta:** Nenhum
- **Exemplo de Resposta:**
    ```json
    [
        {
            "_id": "65ed063b500d81fbd34167c4",
            "primeiro_nome": "Paulo",
            "segundo_nome": "Guedes",
            "createdAt": "2024-03-10T01:00:43.458Z",
            "updatedAt": "2024-03-10T01:00:43.458Z",
            "__v": 0
        },
        {
            "_id": "65edc3b0bc320def96b1f6e0",
            "primeiro_nome": "Júlia",
            "segundo_nome": "Alboredo",
            "createdAt": "2024-03-10T14:29:04.093Z",
            "updatedAt": "2024-03-10T14:29:04.093Z",
            "__v": 0
        }
    ]
    ```

### Adicionar Autor
- **Método:** POST
- **URL:** `/autores`
- **Especificações**: 
    primeiro e segundo nome sem caracteres especiais
- **Parâmetros de Consulta:** 
    ```json
    {
        "primeiro_nome":"Nícolas",
        "segundo_nome":"Cassiano"
    }
- **Exemplo de Resposta:**
    ```json
    {
        "resposta": {
            "primeiro_nome": "Nícolas",
            "segundo_nome": "Cassiano",
            "_id": "65edc471bc320def96b1f6e3",
            "createdAt": "2024-03-10T14:32:17.252Z",
            "updatedAt": "2024-03-10T14:32:17.252Z",
            "__v": 0
        },
        "msg": "Autor adicionado com sucesso!"
    }
    ```
