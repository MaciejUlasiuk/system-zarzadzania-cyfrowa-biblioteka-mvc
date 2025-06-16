# Cyfrowa Biblioteka - System Zarządzania

## Opis projektu

Cyfrowa Biblioteka to prosty system do zarządzania kolekcją książek, stworzony w technologii Node.js z wykorzystaniem wzorca architektonicznego MVC oraz renderowania po stronie serwera (SSR).

## Funkcjonalności

*   **Dodawanie książek**: Użytkownik może dodać nową książkę do katalogu, podając jej tytuł, autora i rok wydania.
    ![Dodawanie książek](https://raw.githubusercontent.com/MaciejUlasiuk/system-zarzadzania-cyfrowa-biblioteka-mvc/refs/heads/main/screenshots/addBook.png)
*   **Przeglądanie katalogu**: Aplikacja wyświetla listę wszystkich książek w czytelnej formie.
![Przeglądanie katalogu](https://raw.githubusercontent.com/MaciejUlasiuk/system-zarzadzania-cyfrowa-biblioteka-mvc/refs/heads/main/screenshots/overview.png)
*   **Edycja danych**: Istnieje możliwość edycji informacji o każdej książce.
![Edycja danych](https://github.com/MaciejUlasiuk/system-zarzadzania-cyfrowa-biblioteka-mvc/blob/main/screenshots/editBook.png?raw=true)
*   **Usuwanie książek**: Użytkownik może trwale usunąć pozycję z biblioteki.
*   **Wyszukiwanie/Filtrowanie**: Możliwość filtrowania listy książek na podstawie tytułu lub autora.

## Instrukcja uruchomienia

1.  Upewnij się, że masz zainstalowany **Node.js** (wersja 14.x lub nowsza) oraz działającą instancję **MongoDB**.
2.  Sklonuj repozytorium: `git clone https://github.com/MaciejUlasiuk/system-zarzadzania-cyfrowa-biblioteka-mvc`
3.  Przejdź do folderu projektu
4.  Zainstaluj zależności: `npm install`
5.  Uruchom serwer w trybie deweloperskim (z automatycznym przeładowaniem): `npm run dev`
6.  Lub uruchom serwer w trybie produkcyjnym: `npm start`
7.  Otwórz przeglądarkę i przejdź pod adres: `http://localhost:3000`

## Wykorzystane biblioteki zewnętrzne

*   **Express.js**: Framework webowy dla Node.js.
*   **EJS**: Silnik szablonów do generowania HTML.
*   **Mongoose**: Biblioteka do modelowania obiektów dla MongoDB.
*   **body-parser**: Middleware do parsowania ciała zapytań HTTP.
*   **nodemon**: Narzędzie do automatycznego restartowania aplikacji podczas developmentu.

## Struktura aplikacji

*   **controllers/**: Zawiera logikę biznesową aplikacji.
    *   `bookController.js`: Obsługuje żądania związane z dodawaniem, edycją, usuwaniem i listowaniem książek.
    *   `errorController.js`: Obsługuje błędy, np. wyświetlanie strony 404.
*   **models/**: Definiuje schematy danych.
    *   `Book.js`: Model Mongoose reprezentujący książkę w bazie danych.
*   **views/**: Szablony EJS renderowane po stronie serwera.
    *   `list-books.ejs`: Widok wyświetlający katalog książek.
    *   `add-book.ejs`: Formularz dodawania nowej książki.
    *   `edit-book.ejs`: Formularz edycji istniejącej książki.
    *   `404.ejs`: Strona błędu.
    *   `partials/`: Fragmenty widoków do wielokrotnego użytku (nagłówek, nawigacja, stopka).
*   **routing/**: Definiuje ścieżki (endpointy) aplikacji.
    *   `book.js`: Trasy związane z operacjami na książkach.
    *   `main.js`: Główna trasa aplikacji.
*   **public/**: Pliki statyczne (CSS, obrazy).
*   **utils/**: Funkcje pomocnicze.
    *   `database.js`: Logika połączenia z bazą danych MongoDB.
*   `server.js`: Główny plik startowy serwera.
*   `config.js`: Plik konfiguracyjny (port, URI bazy danych).

## Przykładowe dane wejściowe

Aby dodać nową książkę, wypełnij formularz, podając:
*   **Tytuł**: np. "Wiedźmin: Ostatnie życzenie"
*   **Autor**: np. "Andrzej Sapkowski"
*   **Rok wydania**: np. 1993