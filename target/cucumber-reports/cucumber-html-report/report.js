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
  "name": "User Sends the GET HTTP Request with code \"\u003ccode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Recieve valid HTTP Response Code \"\u003cstatuscode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "validate capital for given inputvalue \"\u003ccapital\u003e\"",
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
        "statuscode",
        "code",
        "capital"
      ],
      "line": 11,
      "id": "findcapital-on-the-basis-of-name-and-code;performing-get-method;;1"
    },
    {
      "cells": [
        "https://restcountries.eu/rest/v2/alpha",
        "200",
        "NO",
        "Oslo"
      ],
      "line": 12,
      "id": "findcapital-on-the-basis-of-name-and-code;performing-get-method;;2"
    },
    {
      "cells": [
        "https://restcountries.eu/rest/v2/alpha",
        "200",
        "AL",
        "Mariehamn"
      ],
      "line": 13,
      "id": "findcapital-on-the-basis-of-name-and-code;performing-get-method;;3"
    },
    {
      "cells": [
        "https://restcountries.eu/rest/v2/alpha",
        "404",
        "EUR",
        "Åland Islands"
      ],
      "line": 14,
      "id": "findcapital-on-the-basis-of-name-and-code;performing-get-method;;4"
    },
    {
      "cells": [
        "https://restcountries.eu/rest/v2/alpha",
        "404",
        "DZD",
        "Algeria"
      ],
      "line": 15,
      "id": "findcapital-on-the-basis-of-name-and-code;performing-get-method;;5"
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
  "name": "Set Get  Service Api \"https://restcountries.eu/rest/v2/alpha\"",
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
  "name": "User Sends the GET HTTP Request with code \"NO\"",
  "matchedColumns": [
    2
  ],
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
  "name": "validate capital for given inputvalue \"Oslo\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://restcountries.eu/rest/v2/alpha",
      "offset": 22
    }
  ],
  "location": "StepDefinitionCapital.set_Get_Service_Api(String)"
});
formatter.result({
  "duration": 641669300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionCapital.set_request_HEADER()"
});
formatter.result({
  "duration": 316718200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NO",
      "offset": 43
    }
  ],
  "location": "StepDefinitionCapital.user_Sends_the_GET_HTTP_Request_with(String)"
});
formatter.result({
  "duration": 2567384800,
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
  "duration": 2479800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oslo",
      "offset": 39
    }
  ],
  "location": "StepDefinitionCapital.validate_capital_for_given_inputvalue(String)"
});
formatter.result({
  "duration": 88600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Performing GET method",
  "description": "",
  "id": "findcapital-on-the-basis-of-name-and-code;performing-get-method;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Set Get  Service Api \"https://restcountries.eu/rest/v2/alpha\"",
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
  "name": "User Sends the GET HTTP Request with code \"AL\"",
  "matchedColumns": [
    2
  ],
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
  "name": "validate capital for given inputvalue \"Mariehamn\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://restcountries.eu/rest/v2/alpha",
      "offset": 22
    }
  ],
  "location": "StepDefinitionCapital.set_Get_Service_Api(String)"
});
formatter.result({
  "duration": 162600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionCapital.set_request_HEADER()"
});
formatter.result({
  "duration": 2403000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AL",
      "offset": 43
    }
  ],
  "location": "StepDefinitionCapital.user_Sends_the_GET_HTTP_Request_with(String)"
});
formatter.result({
  "duration": 446301900,
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
  "duration": 435800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mariehamn",
      "offset": 39
    }
  ],
  "location": "StepDefinitionCapital.validate_capital_for_given_inputvalue(String)"
});
formatter.result({
  "duration": 65600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Performing GET method",
  "description": "",
  "id": "findcapital-on-the-basis-of-name-and-code;performing-get-method;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Set Get  Service Api \"https://restcountries.eu/rest/v2/alpha\"",
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
  "name": "User Sends the GET HTTP Request with code \"EUR\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Recieve valid HTTP Response Code \"404\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "validate capital for given inputvalue \"Åland Islands\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://restcountries.eu/rest/v2/alpha",
      "offset": 22
    }
  ],
  "location": "StepDefinitionCapital.set_Get_Service_Api(String)"
});
formatter.result({
  "duration": 71400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionCapital.set_request_HEADER()"
});
formatter.result({
  "duration": 1294800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EUR",
      "offset": 43
    }
  ],
  "location": "StepDefinitionCapital.user_Sends_the_GET_HTTP_Request_with(String)"
});
formatter.result({
  "duration": 300056600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 34
    }
  ],
  "location": "StepDefinitionCapital.recieve_valid_HTTP_Response_Code(int)"
});
formatter.result({
  "duration": 364200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Åland Islands",
      "offset": 39
    }
  ],
  "location": "StepDefinitionCapital.validate_capital_for_given_inputvalue(String)"
});
formatter.result({
  "duration": 64000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Performing GET method",
  "description": "",
  "id": "findcapital-on-the-basis-of-name-and-code;performing-get-method;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Set Get  Service Api \"https://restcountries.eu/rest/v2/alpha\"",
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
  "name": "User Sends the GET HTTP Request with code \"DZD\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Recieve valid HTTP Response Code \"404\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "validate capital for given inputvalue \"Algeria\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://restcountries.eu/rest/v2/alpha",
      "offset": 22
    }
  ],
  "location": "StepDefinitionCapital.set_Get_Service_Api(String)"
});
formatter.result({
  "duration": 71300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionCapital.set_request_HEADER()"
});
formatter.result({
  "duration": 1486800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DZD",
      "offset": 43
    }
  ],
  "location": "StepDefinitionCapital.user_Sends_the_GET_HTTP_Request_with(String)"
});
formatter.result({
  "duration": 381021000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 34
    }
  ],
  "location": "StepDefinitionCapital.recieve_valid_HTTP_Response_Code(int)"
});
formatter.result({
  "duration": 389200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Algeria",
      "offset": 39
    }
  ],
  "location": "StepDefinitionCapital.validate_capital_for_given_inputvalue(String)"
});
formatter.result({
  "duration": 79000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Performing GET by name method",
  "description": "",
  "id": "findcapital-on-the-basis-of-name-and-code;performing-get-by-name-method",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "Set Get  Service Api \"\u003cendpoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Set request HEADER",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User Sends the GET HTTP Request with name \"\u003cname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Recieve valid HTTP Response Code \"\u003cstatuscode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "validate capital for given inputvalue \"\u003ccapital\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "findcapital-on-the-basis-of-name-and-code;performing-get-by-name-method;",
  "rows": [
    {
      "cells": [
        "endpoint",
        "statuscode",
        "name",
        "capital"
      ],
      "line": 25,
      "id": "findcapital-on-the-basis-of-name-and-code;performing-get-by-name-method;;1"
    },
    {
      "cells": [
        "https://restcountries.eu/rest/v2/name",
        "200",
        "Norway",
        "Oslo"
      ],
      "line": 26,
      "id": "findcapital-on-the-basis-of-name-and-code;performing-get-by-name-method;;2"
    },
    {
      "cells": [
        "https://restcountries.eu/rest/v2/name",
        "200",
        "Åland Islands",
        "Mariehamn"
      ],
      "line": 27,
      "id": "findcapital-on-the-basis-of-name-and-code;performing-get-by-name-method;;3"
    },
    {
      "cells": [
        "https://restcountries.eu/rest/v2/name",
        "200",
        "Afghanistan",
        "Kabul"
      ],
      "line": 28,
      "id": "findcapital-on-the-basis-of-name-and-code;performing-get-by-name-method;;4"
    },
    {
      "cells": [
        "https://restcountries.eu/rest/v2/name",
        "200",
        "Algeria",
        "Algiers"
      ],
      "line": 29,
      "id": "findcapital-on-the-basis-of-name-and-code;performing-get-by-name-method;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Performing GET by name method",
  "description": "",
  "id": "findcapital-on-the-basis-of-name-and-code;performing-get-by-name-method;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "Set Get  Service Api \"https://restcountries.eu/rest/v2/name\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Set request HEADER",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User Sends the GET HTTP Request with name \"Norway\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Recieve valid HTTP Response Code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "validate capital for given inputvalue \"Oslo\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://restcountries.eu/rest/v2/name",
      "offset": 22
    }
  ],
  "location": "StepDefinitionCapital.set_Get_Service_Api(String)"
});
formatter.result({
  "duration": 79700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionCapital.set_request_HEADER()"
});
formatter.result({
  "duration": 1539600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Norway",
      "offset": 43
    }
  ],
  "location": "StepDefinitionCapital.user_sends_the_get_http_request_with_name_something(String)"
});
formatter.result({
  "duration": 411235800,
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
  "duration": 485900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oslo",
      "offset": 39
    }
  ],
  "location": "StepDefinitionCapital.validate_capital_for_given_inputvalue(String)"
});
formatter.result({
  "duration": 83000,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Performing GET by name method",
  "description": "",
  "id": "findcapital-on-the-basis-of-name-and-code;performing-get-by-name-method;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "Set Get  Service Api \"https://restcountries.eu/rest/v2/name\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Set request HEADER",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User Sends the GET HTTP Request with name \"Åland Islands\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Recieve valid HTTP Response Code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "validate capital for given inputvalue \"Mariehamn\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://restcountries.eu/rest/v2/name",
      "offset": 22
    }
  ],
  "location": "StepDefinitionCapital.set_Get_Service_Api(String)"
});
formatter.result({
  "duration": 103100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionCapital.set_request_HEADER()"
});
formatter.result({
  "duration": 3442500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Åland Islands",
      "offset": 43
    }
  ],
  "location": "StepDefinitionCapital.user_sends_the_get_http_request_with_name_something(String)"
});
formatter.result({
  "duration": 343838600,
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
  "duration": 741500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mariehamn",
      "offset": 39
    }
  ],
  "location": "StepDefinitionCapital.validate_capital_for_given_inputvalue(String)"
});
formatter.result({
  "duration": 95100,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Performing GET by name method",
  "description": "",
  "id": "findcapital-on-the-basis-of-name-and-code;performing-get-by-name-method;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "Set Get  Service Api \"https://restcountries.eu/rest/v2/name\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Set request HEADER",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User Sends the GET HTTP Request with name \"Afghanistan\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Recieve valid HTTP Response Code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "validate capital for given inputvalue \"Kabul\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://restcountries.eu/rest/v2/name",
      "offset": 22
    }
  ],
  "location": "StepDefinitionCapital.set_Get_Service_Api(String)"
});
formatter.result({
  "duration": 114700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionCapital.set_request_HEADER()"
});
formatter.result({
  "duration": 1254500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Afghanistan",
      "offset": 43
    }
  ],
  "location": "StepDefinitionCapital.user_sends_the_get_http_request_with_name_something(String)"
});
formatter.result({
  "duration": 638004300,
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
  "duration": 425000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kabul",
      "offset": 39
    }
  ],
  "location": "StepDefinitionCapital.validate_capital_for_given_inputvalue(String)"
});
formatter.result({
  "duration": 81800,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Performing GET by name method",
  "description": "",
  "id": "findcapital-on-the-basis-of-name-and-code;performing-get-by-name-method;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "Set Get  Service Api \"https://restcountries.eu/rest/v2/name\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Set request HEADER",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User Sends the GET HTTP Request with name \"Algeria\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Recieve valid HTTP Response Code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "validate capital for given inputvalue \"Algiers\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://restcountries.eu/rest/v2/name",
      "offset": 22
    }
  ],
  "location": "StepDefinitionCapital.set_Get_Service_Api(String)"
});
formatter.result({
  "duration": 82200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionCapital.set_request_HEADER()"
});
formatter.result({
  "duration": 1114100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Algeria",
      "offset": 43
    }
  ],
  "location": "StepDefinitionCapital.user_sends_the_get_http_request_with_name_something(String)"
});
formatter.result({
  "duration": 657353800,
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
  "duration": 2396500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Algiers",
      "offset": 39
    }
  ],
  "location": "StepDefinitionCapital.validate_capital_for_given_inputvalue(String)"
});
formatter.result({
  "duration": 89400,
  "status": "passed"
});
});