import React from "react";
import  ReactDOM  from "react-dom";
import { BrowserRouter,Route } from "react-router-dom";
import search from "../public/pages/search";
import addOther from "../public/pages/addOther";
import addPO from "../public/pages/addPO";
import Del from "../public/pages/Del";
import RTsite from "../public/pages/RTsite";
import RTware from "../public/pages/RTware";
import WDsite from "../public/pages/WDsite";
import WDware from "../public/pages/WDware";

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