$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/jitu/migration/selenium/Cucumbar_Java/src/main/java/Features/AddJobTitle.feature");
formatter.feature({
  "line": 1,
  "name": "orange HRM Add New Job",
  "description": "",
  "id": "orange-hrm-add-new-job",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Add new Job",
  "description": "",
  "id": "orange-hrm-add-new-job;add-new-job",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is free OrangeHRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "go to Add Job",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Add Job",
  "rows": [
    {
      "cells": [
        "HR IT",
        "HR",
        "HR"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AddJobTitleDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 14090729657,
  "status": "passed"
});
formatter.match({
  "location": "AddJobTitleDefinition.title_of_login_page_is_free_OrangeHRM()"
});
formatter.result({
  "duration": 15674692,
  "status": "passed"
});
formatter.match({
  "location": "AddJobTitleDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 156887093,
  "status": "passed"
});
formatter.match({
  "location": "AddJobTitleDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 6177627895,
  "status": "passed"
});
formatter.match({
  "location": "AddJobTitleDefinition.go_to_Add_Job()"
});
formatter.result({
  "duration": 2579051588,
  "status": "passed"
});
formatter.match({
  "location": "AddJobTitleDefinition.add_Job(DataTable)"
});
formatter.result({
  "duration": 1667422857,
  "status": "passed"
});
formatter.match({
  "location": "AddJobTitleDefinition.close_the_Browser()"
});
formatter.result({
  "duration": 215274869,
  "status": "passed"
});
});