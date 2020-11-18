package com.teckarch.findcapitalrestcountries;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;

import java.util.List;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertEquals;


public class StepDefinitionCapital {
    public RequestSpecification request;
    public Response response;
    private ValidatableResponse json;
    String capital;
    String city;

    @Given("^Set Get  Service Api \"([^\"]*)\"$")
    public void set_Get_Service_Api(String URL) throws Throwable {
        RestAssured.baseURI=URL;

    }

    @When("^Set request HEADER$")
    public void set_request_HEADER() throws Throwable {
        request= given().log().all().contentType(ContentType.JSON);

    }
    @When("^User Sends the GET HTTP Request with code \"([^\"]*)\"$")
    public void user_Sends_the_GET_HTTP_Request_with(String code) throws Throwable {

        response =request.
                pathParam("code", code).
                when().
                get( "/{code}").then().extract().response();
        JsonPath extractor = new JsonPath(response.asString());
        capital= extractor.get("capital");
       // city=extractor.get("name");
       // System.out.println(city);
//        for(int i=0;i<capital.size();i++) {
//            city=extractor.get("name");
//            if (name.equals(city.get(i))) {
//                System.out.println("matched");
//                System.out.println("The capital of " + name + " is " + capital.get(i));
//            }
//        }
        System.out.println("The capital of " + code + " is " + capital);
    }
    @When("^User Sends the GET HTTP Request with name \"([^\"]*)\"$")
    public void user_sends_the_get_http_request_with_name_something(String name) throws Throwable {
        response =request.
                pathParam("name", name).
                when().
                get( "/{name}").then().extract().response();
        JsonPath extractor = new JsonPath(response.asString());
        List<String> capital = extractor.get("capital");
        System.out.println("The capital of "+ name +" is " + capital);

    }

    @Then("^Recieve valid HTTP Response Code \"([^\"]*)\"$")
    public void recieve_valid_HTTP_Response_Code(int statuscode ) throws Throwable {

        int statusCode1=response.then().extract().statusCode();
        System.out.println(statusCode1);
        assertEquals(statuscode,statusCode1);

    }

    @Then("^validate capital for given inputvalue \"([^\"]*)\"$")
    public void validate_capital_for_given_inputvalue(String capital) throws Throwable {
        String expectedvalue=capital;
        assertEquals(capital,expectedvalue);
    }
}


