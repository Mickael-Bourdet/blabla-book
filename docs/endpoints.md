| VERB     | PATH                | DESCRIPTION                              |
| -------- | ------------------- | ---------------------------------------- |
| `GET`    | `/books`            | renvoie tous les livres existants        |
| `GET`    | `/books/:id`        | renvoie les détails d'un livre           |
| `POST`   | `/user/library`     | crée une nouvelle bibliothèque           |
| `PATCH`  | `/user/library/:id` | modifie une bibliothèque                 |
| `DELETE` | `/user/library/:id` | supprime une bibliothèque                |
| `POST`   | `/register   `      | traitement d'un formulaire d'inscription |
|          |                     |                                          |

Route Bonus :
| VERB | PATH | DESCRIPTION |
| -------- | ------------------ | ---------------------------------------------------------------------------- |
| `GET` | `/books/:author` | renvoie tous les livres d'un auteur |
| `GET` | `/books/:category` | renvoie tous les livres selon une catégorie |
