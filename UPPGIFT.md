# Övningsuppgift: Från prop drilling till Context

## Läget just nu

Appen är en liten butik. Den fungerar redan, men datan skickas hela vägen ner
genom komponentträdet som props ("prop drilling"):

## Er uppgift

Ersätt prop drilling-kedjan med React Context.

### Obligatoriska deluppgifter

1. Skapa en `CartContext` (t.ex. i `src/context/CartContext.jsx`) med
   `createContext`.
2. Skapa en `CartProvider`-komponent som håller `cartItems` i `useState`
   samt funktionerna `addToCart` och `removeFromCart`, och gör dem
   tillgängliga via `<CartContext.Provider value={...}>`.
3. Wrappa appen i `CartProvider` i `App.jsx` (state och funktionerna kan nu
   flytta in i Provider-komponenten istället för att ligga i `App`).

   __________________________________________________________________________

4. Uppdatera `Header` så att den läser `cartCount` via `useContext` istället
   för som prop.
5. Uppdatera `ProductCard` så att den läser `addToCart` via `useContext`
   istället för `onAddToCart`-prop.
6. Uppdatera `Cart` så att den läser `cartItems` och `removeFromCart` via
   `useContext` istället för props.
7. Städa bort props:en som `Page`, `Shop` och `ProductList` inte längre
   behöver ta emot eller skicka vidare. Om allt är rätt gjort ska de bara
   rendera sina barnkomponenter utan att bry sig om varukorgen alls.

Appen ska bete sig exakt likadant för användaren efteråt – det är bara hur
datan flödar internt som ändras.

### Extrauppgifter (för er som blir klara)

- Räkna antal av samma produkt (`quantity`) istället för att lista varje
  tillägg som en egen rad.
- Lägg till en knapp för att rensa hela varukorgen.
- Skapa en till context, t.ex. `ThemeContext` för ljust/mörkt läge, för att
  öva på att kombinera flera context i samma app.
- Lägg varukorgen i `localStorage` så den finns kvar om man laddar om sidan.

## Komma igång

npm install
npm run dev
```
