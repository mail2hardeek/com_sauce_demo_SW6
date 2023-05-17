package com.sauce.demo.cucumbersw6.steps;

import com.sauce.demo.cucumbersw6.pages.InventoryPage;
import com.sauce.demo.cucumbersw6.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class LoginSteps {
    @Given("^User enters username$")
    public void userEntersUsername() {
        new LoginPage().enterUserName("standard_user");
    }

    @And("^User enters Password$")
    public void userEntersPassword() {
        new LoginPage().enterPassword("secret_sauce");
    }

    @When("^User clicks on Login button$")
    public void userClicksOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^User is able to Login and able to verify text Products$")
    public void userIsAbleToLoginAndAbleToVerifyTextProducts() {
        String expectedText = "Products";
        String actualText = new InventoryPage().getProductText();
        Assert.assertEquals(actualText, expectedText, "Expected Text does not displayed");
    }

    @Then("^User is able to verify six products are displayed$")
    public void userIsAbleToVerifySixProductsAreDisplayed() {
        int expectedNumberOfProducts=6;
        int actualNumberOfProducts= new InventoryPage().findActualNumberOfProducts();
        Assert.assertEquals(actualNumberOfProducts, expectedNumberOfProducts, "Number of products are not 6");
    }

}