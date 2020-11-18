package com.teckarch.findcapitalrestcountries;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\main\\java\\com\\teckarch\\findcapitalrestcountries\\findcapital.feature",
        plugin={"pretty:target\\cucumber-reports\\cucumber-pretty.txt","html:target\\cucumber-reports\\cucumber-html-report", "json:target\\cucumber-reports\\CucumberTestReport.json",
                "junit:target\\cucumber-reports\\cucumber-results.xml"})
public class TestRunner {

}
