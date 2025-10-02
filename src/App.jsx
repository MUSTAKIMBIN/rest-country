import { Suspense } from "react";
import "./App.css";
import Countries from "./components/countryes/Countries";

const countryPromise = fetch(
  `https://openapi.programming-hero.com/api/all`
).then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<p>country is commig.....</p>}>
        <Countries countryPromise={countryPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
