import React from "react";
import HeaderPage from "./page/header.page";
import FooterPage from "./page/footer.page";
import HomePage from "./page/home.page"

function App() {
  return (
    <div>
      <HeaderPage />
      <br/>
      <HomePage/>
      <FooterPage />
    </div>
  );
}
export default App;
