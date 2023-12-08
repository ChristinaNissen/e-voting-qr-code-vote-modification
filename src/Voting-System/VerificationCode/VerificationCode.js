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

import { useEffect, useState } from "react";
import { Button, Text, Checkbox, Grid } from "@chakra-ui/react";
import "./VerificationCode.css";
import { useNavigate } from "react-router-dom";
import getCurrentUser, { saveVerificationCode } from "../../API/Voter";
import Navbar from "../Navbar/Navbar";
import PDFgenerator from "./PDFgenerator";

export default function VerificationCode() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [disabledButton, setDisabled] = useState(true);

  const voter = getCurrentUser();



  function handleChange() {
    if (checked) {
      setChecked(false);
      setDisabled(true);
    } else {
      setChecked(true);
      setInvalid(false);
      setDisabled(false);
    }
  }

  function handleSubmitVerificationCode(values) {
    saveVerificationCode("bAdJhFVz6aFrJTa-F86I5HTe");
    if (checked) {
      navigate("/voting");
    } else {
      setInvalid(true);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="outer-page-container">
        <div className="inner-page-container-wide">
          <h1 className="blue-text">Verification Code</h1>

          <Text className="text-margin-top">
            You find your unique verification code in the box below. Please
            download your code or save it somewhere, where you can find it
            again. Do not share your code with others!
          </Text>

          <Text className="text-margin-top">
            In the downloaded file, you will also find your verification code as
            a QR code.
          </Text>

          <Text className="text-margin-top" fontWeight="600">
            NB! You need to keep this code until the end of the election!
          </Text>

          <Grid className="verification-code-box centered-text">
            <h3>bAdJhFVz6aFrJTa-F86I5HTe</h3>

            <Button className="blue-btn" width={"15rem"}>
              <Text display={"flex"}>
                <span className="material-symbols-outlined medium-icon margin-right-icon">
                  download
                </span>
              </Text>
              {<PDFgenerator voterId={voter.attributes.username} />}
            </Button>
          </Grid>
          <Checkbox
            className="check-box"
            id="checkBox"
            isChecked={checked}
            onChange={handleChange}
            isInvalid={invalid}
          >
            I have downloaded or saved my verification code.
          </Checkbox>
          <Button
            onClick={handleSubmitVerificationCode}
            className="blue-btn"
            disabled={disabledButton}
          >
            Vote now
          </Button>
        </div>
      </div>
    </div>
  );
}
