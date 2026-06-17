import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Delete from "./components/Delete";
import Header from "./components/Header";
import Insert from "./components/Insert";
import SingleView from "./components/SingleView";
import Update from "./components/Update";
import View from "./components/View";
import Home from "./components/Home";
import Card from "./components/Card";
import EditForm from "./components/EditForm";


function App() {
  return (
    <>
      
        <Header />

        <main>
          <Navbar />

          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/insert" element={<Insert />} />
              <Route path="/view" element={<View />} />
              <Route path="/singleview" element={<SingleView />} />
              <Route path="/card/:id" element={<Card />} />
              <Route path="/update" element={<Update />} />
              <Route path="/update/:id" element={<EditForm />} />
              <Route path="/delete" element={<Delete />} />
            </Routes>
          </div>
        </main>
      
    </>
  );
}

export default App;