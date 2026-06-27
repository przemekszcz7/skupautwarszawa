# 🚗 Skup Aut Warszawa — GitHub Pages Deployment

Ten projekt jest gotowy do automatycznego wdrożenia na **GitHub Pages** za pomocą **GitHub Actions**.

Po każdym wypchnięciu (push) zmian do gałęzi `main` lub `master`, strona zostanie automatycznie zbudowana i opublikowana pod Twoim adresem `<nazwa-uzytkownika>.github.io/<nazwa-repozytorium>`.

---

## 🛠️ Jak uruchomić wdrożenie krok po kroku

### Krok 1: Utwórz repozytorium na GitHubie
1. Zaloguj się na swoje konto GitHub.
2. Utwórz nowe repozytorium (np. o nazwie `skup-aut-warszawa`).
3. Pozostaw je puste (nie dodawaj pliku README, `.gitignore` ani licencji).

### Krok 2: Powiąż projekt lokalny i wypchnij kod
W swoim lokalnym terminalu (lub poprzez eksport ZIP/GitHub z AI Studio) zainicjuj repozytorium i wyślij kod:

```bash
git init
git add .
git commit -m "Inicjalizacja strony Skup Aut Warszawa"
git branch -M main
git remote add origin https://github.com/TWOJA-NAZWA-UZYTKOWNIKA/NAZWA-REPOZYTORIUM.git
git push -u origin main
```

### Krok 3: Włącz uprawnienia dla GitHub Actions na GitHubie
Aby GitHub Actions miał prawo opublikować gotową stronę na GitHub Pages:
1. Wejdź w ustawienia swojego repozytorium na GitHubie: **Settings** (Ustawienia) -> **Actions** -> **General**.
2. Przewiń na sam dół do sekcji **Workflow permissions** (Uprawnienia przepływu pracy).
3. Zaznacz opcję **Read and write permissions** (Uprawnienia do odczytu i zapisu).
4. Kliknij **Save** (Zapisz).

### Krok 4: Skonfiguruj źródło GitHub Pages
1. Przejdź do **Settings** -> **Pages** w swoim repozytorium na GitHubie.
2. W sekcji **Build and deployment** -> **Source** wybierz z listy rozwijanej: **GitHub Actions**.

---

## 🚀 Automatyczne działanie

Po wykonaniu powyższych kroków, każde kolejne polecenie `git push` uruchomi automatyczny proces widoczny w zakładce **Actions** na GitHubie. Po około 1-2 minutach Twoja strona będzie w pełni dostępna online!

---

## 💻 Lokalne uruchamianie projektu

Jeśli chcesz rozwijać projekt lokalnie na swoim komputerze:

1. Zainstaluj zależności:
   ```bash
   npm install
   ```
2. Uruchom serwer deweloperski:
   ```bash
   npm run dev
   ```
3. Otwórz w przeglądarce adres: `http://localhost:3000`
