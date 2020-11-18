$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/com/teckarch/findcapitalrestcountries/findcapital.feature");
formatter.feature({
  "line": 1,
  "name": "FindCapital on the basis of name and code",
  "description": "",
  "id": "findcapital-on-the-basis-of-name-and-code",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Performing GET method",
  "description": "",
  "id": "findcapital-on-the-basis-of-name-and-code;performing-get-method",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Set Get  Service Api \"\u003cendpoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Set request HEADER",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User Sends the GET HTTP Request with \"AFN\" or \"Afghanistan\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Recieve valid HTTP Response Code \"\u003cstatuscode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "validate capital for given inputvalue",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "findcapital-on-the-basis-of-name-and-code;performing-get-method;",
  "rows": [
    {
      "cells": [
        "endpoint",
        "statuscode"
      ],
      "line": 11,
      "id": "findcapital-on-the-basis-of-name-and-code;performing-get-method;;1"
    },
    {
      "cells": [
        "https://restcountries.eu/rest/v2/all",
        "200"
      ],
      "line": 12,
      "id": "findcapital-on-the-basis-of-name-and-code;performing-get-method;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Performing GET method",
  "description": "",
  "id": "findcapital-on-the-basis-of-name-and-code;performing-get-method;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Set Get  Service Api \"https://restcountries.eu/rest/v2/all\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Set request HEADER",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User Sends the GET HTTP Request with \"AFN\" or \"Afghanistan\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Recieve valid HTTP Response Code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "validate capital for given inputvalue",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://restcountries.eu/rest/v2/all",
      "offset": 22
    }
  ],
  "location": "StepDefinitionCapital.set_Get_Service_Api(String)"
});
formatter.result({
  "duration": 757090400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionCapital.set_request_HEADER()"
});
formatter.result({
  "duration": 315834000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AFN",
      "offset": 38
    },
    {
      "val": "Afghanistan",
      "offset": 47
    }
  ],
  "location": "StepDefinitionCapital.user_Sends_the_GET_HTTP_Request_on_the_basis_of_or(String,String)"
});
formatter.result({
  "duration": 3277203700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 34
    }
  ],
  "location": "StepDefinitionCapital.recieve_valid_HTTP_Response_Code(int)"
});
formatter.result({
  "duration": 2831800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionCapital.validate_capital_for_given_inputvalue()"
});
formatter.result({
  "duration": 58900,
  "status": "passed"
});
});