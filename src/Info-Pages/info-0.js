/**
 * Copyright 2023 Christina Frederikke Nissen, Elisabeth Fredrich
 *
 * This file is part of e-voting-system-self-replace.
 *
 * e-voting-system-self-replace is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * e-voting-system-self-replace is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with e-voting-system-self-replace. If not, see <https://www.gnu.org/licenses/>.
 */

import React from "react";
import "./InfoPages.css";
import { useState } from "react";
import {
  Button,
  Checkbox,
  Text,
  Spinner,
  Box,
  Link,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
/* import { getNumberOfVoters } from "../API/Voter"; */

export default function Welcome() {
  const [checked, setChecked] = useState(false);
  const [disabledButton, setDisabled] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChangeCheckbox() {
    if (checked) {
      setChecked(false);
      setDisabled(true);
    } else {
      setChecked(true);
      setDisabled(false);
    }
  }

  const assignARandomRepository = () => {
    setIsSubmitting(true);
    document
      .querySelector("#submit-button")
      .setAttribute("disabled", isSubmitting);
      window.location.href =
      "https://e-voting-system-2-study.netlify.app/info-1";
     
  };

  return (
    <div className="container-info-pages">
      <Box className="inner-box-info padding-top-info-page" maxW={"35rem"}>
        <h1 className="h1-info-pages">Welcome to our study!</h1>
        <Text>
          The purpose of this study is to investigate user experience and trust
          in an online voting system intended for general elections.
        </Text>
        <h3 className="title-margin-top">Description of research</h3>
        <Text>
          Before entering the voting system, you will be asked to download an
          instruction paper for the voting system. After entering the system,
          you are asked to test the voting system by following the instruction
          paper. This will be followed by a questionnaire, which you will get
          redirected to from the last page of the voting system. Once you have
          completed the questionnaire, you will be redirected to Prolific. The
          total duration of the study is approximately 20 minutes. We highly
          recommend using a desktop device for the study.
        </Text>
        <h3 className="title-margin-top">Withdrawal</h3>
        <Text>
          You can withdraw your consent about being part of the study at any
          time before the completion of the study, meaning before you submit the
          survey. In this case your collected data will be deleted by the
          researchers. For more information on how to withdraw from a study
          before completion in Prolific, see this link:{" "}
          <Link
            className="info-link"
            href="https://participant-help.prolific.co/hc/en-gb/articles/360022342094-How-do-I-withdraw-my-participation-in-a-study"
            target={"_blank"}
          >
            https://participant-help.prolific.co/hc/
            en-gb/articles/360022342094-How-do-I-withdraw-my-participation-in-a-study
          </Link>
          . Please note that we cannot delete your data after you have completed
          the study, since the data we collect is anonymised and we therefore
          have no chance to identify you (unless you choose to disclose
          identifying information about yourself when using the voting system or
          answering the questionnaire, in which case your data will be
          anonymised as described below).
        </Text>
        <h3 className="title-margin-top">Compensation</h3>
        <Text>
          Each participant will receive 3 £ at the conclusion of the study
          through Prolific.
        </Text>
        <h3 className="title-margin-top">How we handle and delete the data</h3>
        <Text>
          If a participant discloses any personal information about themselves
          or other people in the voting system or when answering the
          questionnaire, the researchers will remove this from the dataset and
          replace it with a placeholder.{" "}
          {/* The non-anonymised data set will be
          deleted after the study has been completed (latest 31st of December
          2023). */}
        </Text>
        <h3 className="title-margin-top">What data we collect</h3>
        <Text>
          The participants will be asked to share the following personal data:
        </Text>

        <UnorderedList className="text-margin-top">
          <ListItem>Gender</ListItem>
          <ListItem>Age</ListItem>
          <ListItem>Nationality</ListItem>
          <ListItem>Level of education</ListItem>
        </UnorderedList>
        <Text className="text-margin-top">
          We further collect the answers that the participants give to the
          questions in the questionnaire, as well as data related to voting and
          vote verification that the participants are asked to provide within
          the voting system. Please note that all candidates on the digital
          voting paper are fictional and the participants are asked to vote for
          a specific candidate before they enter the voting system. Therefore,
          we do not collect any sensitive personal data on political interests.
        </Text>
        <h3 className="title-margin-top">How we use the data</h3>
        <Text>
          These data will be used to derive statistical measures of users'
          attitudes towards internet voting systems. The data might be
          referenced or quoted, but not printed in full unless it is completely
          anonymized, in the published research reports and other academic
          publications.
        </Text>
        <h3 className="title-margin-top">Who has access to the data?</h3>
        <Text>
          The researchers have access to the original data until it has been
          edited to replace given personal information with placeholders as to
          anonymize it.
        </Text>
        <h3 className="title-margin-top">Third Parties</h3>
        <Text>
          We use the following third party services in connection with this
          study:
        </Text>
        <UnorderedList>
          <ListItem className="text-margin-top">
            <span className="bold-text">SurveyXact:</span> We use SurveyXact to
            carry out the survey. Personal data (gender, age, nationality, level
            of education) will be collected through the questions and stored on
            the SurveyXact platform. The third parties mentioned below will not
            have access to this data. Please refer to SurveyXact’s privacy
            policy for more information:{" "}
            <Link
              className="info-link"
              href="https://rambollxact.com/cookie-and-privacy-policy"
              target={"_blank"}
            >
              https://rambollxact.com/cookie-and-privacy-policy
            </Link>
          </ListItem>
          <ListItem className="text-margin-top">
            <span className="bold-text">Netlify:</span> We use Netlify to host
            the voting system. Netlify might collect your IP address and other
            personal data, however, we will not have access to this data and
            netlify is not sharing any IP addresses or other personal data.
            Please refer to netlify’s privacy policy for more information:{" "}
            <Link
              className="info-link"
              href="https://www.netlify.com/privacy/"
              target={"_blank"}
            >
              https://www.netlify.com/privacy/
            </Link>
          </ListItem>
          <ListItem className="text-margin-top">
            <span className="bold-text">Back4App:</span> We use Back4App to
            store data connected to your testing of the voting system. This data
            is not considered personal (unless you choose to disclose
            identifying information about yourself when using the voting
            system). Back4app might collect personal data which we will not have
            access to. Please refer to Back4App’s privacy policy for more
            information:{" "}
            <Link
              className="info-link"
              href="https://www.back4app.com/privacy.pdf"
              target={"_blank"}
            >
              https://www.back4app.com/privacy.pdf
            </Link>
          </ListItem>

          <ListItem className="text-margin-top">
            <span className="bold-text">Google Fonts:</span> We use the font
            library Google Fonts to display the fonts in the voting system.
            Calling up script libraries or font libraries automatically triggers
            a connection to the operator of the library. It is possible that the
            operators of such libraries collect data. You can find the privacy
            policy of the library operator Google here:{" "}
            <Link
              className="info-link"
              href="https://www.google.com/policies/privacy/"
              target={"_blank"}
            >
              https://www.google.com/policies/privacy/
            </Link>
          </ListItem>
        </UnorderedList>
        <h3 className="title-margin-top">Researchers</h3>
        <UnorderedList>
          <ListItem>
            Christina Frederikke Nissen (
            <Link
              className="info-link"
              href="mailto:chfn@itu.dk"
              target={"_blank"}
            >
              chfn@itu.dk
            </Link>
            )
          </ListItem>
          <ListItem>
            Oksana Kulyk (
            <Link
              className="info-link"
              href="mailto:okku@itu.dk"
              target={"_blank"}
            >
              okku@itu.dk
            </Link>
            )
          </ListItem>
        </UnorderedList>
        <Text className="text-margin-top">
          Researchers at the IT University of Copenhagen
        </Text>
        <h3 className="title-margin-top">Questions</h3>
        <Text>
          For any questions concerning our processing of your personal data,
          please contact the researchers involved in the project (see contact
          details above).
        </Text>
        <Checkbox
          className="check-box check-box-red"
          id="checkBox-vote-info"
          isChecked={checked}
          onChange={handleChangeCheckbox}
        >
          I consent to serve as a subject in the research investigation
          described above. I confirm that I am fluent in English.
        </Checkbox>
        <Button
          onClick={() => assignARandomRepository()}
          className="red-btn"
          disabled={disabledButton}
          id="submit-button"
          color="white"
        >
          {isSubmitting && <Spinner size="sm" mr={"1rem"} />}
          Start
        </Button>
      </Box>
    </div>
  );
}
