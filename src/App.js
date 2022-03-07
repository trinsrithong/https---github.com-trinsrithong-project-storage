import React from "react";
import  ReactDOM  from "react-dom";
import { BrowserRouter,Route } from "react-router-dom";
import search from "../pages/search";
import addOther from "../pages/addOther";
import addPO from "../pages/addPO";
import Del from "../pages/Del";
import RTsite from "../pages/RTsite";
import RTware from "../pages/RTware";
import WDsite from "../pages/WDsite";
import WDware from "../pages/WDware";

const route = (
    <BrowserRouter>
        <div>
          <Route path="addOther" element={<addOther />} />
          <Route path="addPO" element={<addPO />} />
          <Route path="Del" element={<Del />} />
          <Route path="RTsite" element={<RTsite />} />
          <Route path="RTware" element={<RTware />} />
          <Route path="search" element={<search />} />
          <Route path="WDsite" element={<WDsite />} />
          <Route path="WDware" element={<WDware />} />
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes,document.getElementById('app'));