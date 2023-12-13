/**
 * Copyright 2023 Christina Frederikke Nissen, Elisabeth Fredrich
 *
 * This file is part of e-voting-system-auto-replace.
 *
 * e-voting-system-auto-replace is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * e-voting-system-auto-replace is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the 
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with e-voting-system-auto-replace. If not, see <https://www.gnu.org/licenses/>.
 */

import "./App.css";
import "./Info-Pages/InfoPages.css";
import "./Voting-System/VotingSystem.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import VoteVerification from "./Voting-System/VoteVerification/VoteVerification";
import IndividualVoteVerification from "./Voting-System/VoteVerification/IndividualVoteVerification";
import Confirmation from "./Voting-System/Confirmation/Confirmation";
import Voting from "./Voting-System/Voting/Voting";
import Info0 from "./Info-Pages/info-0";
import Info1 from "./Info-Pages/Info-1";
import Info2 from "./Info-Pages/Info-2";
import Info3 from "./Info-Pages/Info-3";
import Welcome from "./Voting-System/Welcome/Welcome";
import Reporting from "./Voting-System/Reporting/Reporting";
import Parse from "parse";
import VerificationCode from "./Voting-System/VerificationCode/VerificationCode";
import Error from "./Voting-System/Error/Error";

const PARSE_APPLICATION_ID = "MaAoTsKJsRyfyBlSktyLHRBhX5FPAY1lRUaFU4B1";
const PARSE_HOST_URL = "https://parseapi.back4app.com/";
const PARSE_JAVASCRIPT_KEY = "a9oo1X4u7pcPeccWqOO5scV1k9RD7QWaXhFhjpQc";

Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);

Parse.serverURL = PARSE_HOST_URL;

function App() {

  return (
    <div className="App">
      <div id="app-main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/start" />} />
            <Route path="/start" element={<Info0/>}/>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/info-1" element={<Info1 />} />
            <Route path="/verification-code" element={<VerificationCode />} />
            <Route path="/voting" element={<Voting />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/info-2" element={<Info2 />} />
            <Route path="/info-3" element={<Info3 />} />
            <Route path="/verification" element={<VoteVerification />} />
            <Route
              path="/verification/:id"
              element={<IndividualVoteVerification />}
            />
            <Route path="reporting" element={<Reporting />} />
            <Route path="/invalid-url" element={<Error />} />
            <Route path="/*" element={<Navigate to="/invalid-url" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
