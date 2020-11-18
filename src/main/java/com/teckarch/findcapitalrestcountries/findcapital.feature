Feature:FindCapital on the basis of name and code

Scenario Outline:Performing GET method
  Given Set Get  Service Api "<endpoint>"
  When Set request HEADER
  And User Sends the GET HTTP Request with code "<code>"
  Then Recieve valid HTTP Response Code "<statuscode>"
  And validate capital for given inputvalue "<capital>"

  Examples:
  |endpoint|statuscode|code|capital|
  |https://restcountries.eu/rest/v2/alpha|200|NO|Oslo|
  |https://restcountries.eu/rest/v2/alpha |200|AL|Mariehamn|
  |https://restcountries.eu/rest/v2/alpha |404|EUR|Åland Islands|
  |https://restcountries.eu/rest/v2/alpha |404|DZD|Algeria|

Scenario Outline:Performing GET by name method
    Given Set Get  Service Api "<endpoint>"
    When Set request HEADER
    And User Sends the GET HTTP Request with name "<name>"
    Then Recieve valid HTTP Response Code "<statuscode>"
    And validate capital for given inputvalue "<capital>"

    Examples:
      |endpoint|statuscode|name|capital|
      |https://restcountries.eu/rest/v2/name |200|Norway|Oslo|
      |https://restcountries.eu/rest/v2/name |200|Åland Islands|Mariehamn|
      |https://restcountries.eu/rest/v2/name |200|Afghanistan|Kabul|
      |https://restcountries.eu/rest/v2/name |200|Algeria|Algiers|




