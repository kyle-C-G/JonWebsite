import { useState } from "react";
import Content from "./Main/Content";
import Footer from "./Main/Footer";
import Header from "./Main/Header";
import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
