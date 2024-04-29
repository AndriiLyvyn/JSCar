# Aplikacja do zakupów samochodów
## Opis
Ta aplikacja internetowa umożliwia użytkownikom przeglądanie, konfigurowanie i kupowanie samochodów wraz z akcesoriami online. Oferuje funkcje przeglądania szczegółów samochodu, dodawania akcesoriów samochodowych, obliczania całkowitych kosztów i zarządzania danymi użytkowników za pomocą pamięci lokalnej. Aplikacja obsługuje dynamiczne interakcje, takie jak wybór samochodu, sprawdzanie poprawności formularza, trwałość pamięci lokalnej i asynchroniczne pobieranie danych z pliku JSON.

## Cechy
Katalog samochodów: wyświetla listę samochodów pobraną z pliku JSON ze szczegółami, takimi jak nazwa, cena, wiek, przebieg i moc silnika.
Akcesoria samochodowe: Użytkownicy mogą wybierać akcesoria samochodowe, dostosowywać ich ilość i sprawdzać aktualizacje cen w czasie rzeczywistym.
Zakup i realizacja transakcji: udostępnia formularz umożliwiający wprowadzenie informacji o kupującym, sprawdzenie danych i sfinalizowanie zakupu.
Trwałość danych: wykorzystuje pamięć lokalną do utrwalania danych wprowadzanych przez użytkownika i wybranych szczegółów samochodu w sesjach przeglądarki.
Walidacja formularza: zapewnia wypełnienie wszystkich wymaganych pól i sprawdza wprowadzone przez użytkownika dane przed przesłaniem pod kątem błędów.
Dynamiczny wybór daty: umożliwia użytkownikom wybranie daty dostawy z dynamicznie generowanej listy.
## Technologie
- HTML5
- CSS3
- JavaScript (ES6+)

## Aby uruchomić ten projekt:

- Sklonuj repozytorium na komputer lokalny.
- Otwórz katalog główny projektu.
- Aby uruchomić aplikację, uruchom plik homePage.html w nowoczesnej przeglądarce internetowej.
- Użyj prostego serwera HTTP, jeśli Twoja przeglądarka ogranicza adresy URL plików przed dostępem do innych plików.
## Pliki i katalogi
- homePage.html - Główny punkt wejścia aplikacji.
- formPage.html - Główny punkt wejścia aplikacji.
- homePageStyle.css — zawiera styl storny Głownej.
- formPageStyle.css — zawiera styl strony z formularzem.
- Katalog image - zawiera zdjęcia samochodów.
- homePageScript.js — logika biznesowa do obsługi interakcji użytkownika, na stronie głównej .
- formPageScript.js — logika biznesowa do obsługi interakcji użytkownika, na stronie z formularzem oraz podsumowaniem.
- samochody.json - Przykładowy plik JSON zawierający dane o samochodach.
- README.md — dokumentacja zawierająca przegląd projektu, instrukcje konfiguracji i szczegóły użytkowania.
## Jak używać
 - Przeglądaj samochody: wyświetl listę samochodów i wybierz ten, który chcesz kupić.
-Dodaj akcesoria: Wybierz akcesoria z podanej listy; dostosować ilości według uznania.
- Wypełnij formularz: Wprowadź wymagane informacje, takie jak imię i nazwisko, adres, metoda płatności i data dostawy.
- Sfinalizuj zakup: przejrzyj swoje zamówienie i wyślij je, jeśli wszystkie weryfikacje przejdą pomyślnie. Wyświetli się wówczas podsumowanie zamówienia.
