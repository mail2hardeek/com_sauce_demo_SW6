$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Sauce Demo",
  "description": "",
  "id": "sauce-demo",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "duration": 12947925500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User enters username",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters Password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userEntersUsername()"
});
formatter.result({
  "duration": 1993492300,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 9,
  "name": "User should Login Successfully with valid Credentials",
  "description": "",
  "id": "sauce-demo;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User is able to Login and able to verify text Products",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1771928900,
  "status": "passed"
});
formatter.before({
  "duration": 5985204600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User enters username",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters Password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userEntersUsername()"
});
formatter.result({
  "duration": 569088700,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 13,
  "name": "User should able to verify that Six Products are displayed on page",
  "description": "",
  "id": "sauce-demo;user-should-able-to-verify-that-six-products-are-displayed-on-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User is able to verify six products are displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1794850300,
  "status": "passed"
});
});