var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Zoo express api</title>
    </head>
    <body>
      <h1>User Express</h1>
      <p>Welcome to my user Express API</p>
    </body>
    </html>
    `);
});

router.get('/learn-more', function(req, res, next) {
    res.send({
        "LongIntro":"I attended Merrill Highschool and graduated in 2017. After Highschool I attended UW-Marathon County and worked in multiple early childhood environments on my way to a bachelor’s degree in education. I wasn’t enjoying the education degree and decided it was time to switch majors. I decided to switch my major to Software Development and applied to NTC in December 2019. I am currently in my third semester at NTC and am on course to graduate in the Spring of 2022.",
        "ShortIntro":"a software developer student"
     });
});

router.get('/contact-form', function(req, res, next) {
    res.send({
        "FormTag":"<form class=\"contact-form\"><div class=\"form-title\">Contact Information</div><div class=\"form-body\"><div class=\"row\"><input class=\"first-name\" type=\"text\" placeholder=\"First Name*\"><input class=\"last-name\" type=\"text\" placeholder=\"Last Name*\"></div><div class=\"row\"><input class=\"phone\" type=\"tel\" placeholder=\"715 123-456*\"><input class=\"email\" type=\"email\" placeholder=\"Email Address*\"></div><div class=\"row\"><input class=\"comments\" type=\"text\" placeholder=\"Comments*\"></div></div><div class=\"rule\"></div><div class=\"form-footer\"><a type=\"submit\" class=\"formA submit\">Submit<span class=\"fa fa-thumbs-o-up\"></span></a><a class=\"formA cancel\">Cancel<span class=\"fa fa-ban\"></span></a></div></form>"
     });
});

router.get('/form', function(req, res, next) {
  res.send({
    "tag": "<div class=\"card-form\" id=\"last-form\"><form class=\"zoo-form\" id=\"guest-group-from\"><div class=\"zoo-form-title\">Group Form</div><div class=\"zoo-form-body\"><div class=\"row\"><label class=\"label\" for=\"group-number\">Number of guests</label><input class=\"zooField\" type=\"number\" name=\"group-number\" id=\"group-number\"></div<div class=\"rule\"></div><div class=\"form-footer\"><button class=\"confrim-group-button\" type=\"button\">Admit Group</button></div></form></div>"
});
});

/* GET users listing. */
router.get('/zoo', function(req, res, next) {
  res.send({
    "name": "Ben's Zoo",
    "guestCount": 496,
    "animalCount": 0,
    "animals": [
    {
        "id": 1,
        "name": "Perry",
        "age": 2,
        "gender": "Female",
        "weight": 3.2,
        "isPregnant": false
    },
    {
        "id": 2,
        "name": "Harry",
        "age": 2,
        "gender": "Male",
        "weight": 3.2,
        "isPregnant": false
    },
    {
        "id": 3,
        "name": "Sherry",
        "age": 2,
        "gender": "Female",
        "weight": 852,
        "isPregnant": true
    },
    {
        "id": 4,
        "name": "Cherry",
        "age": 2,
        "gender": "Female",
        "weight": 3.2,
        "isPregnant": true
    }],
    "guests": [
    {
        "id": 1,
        "name": "Ben",
        "age": 22,
        "gender": "Male",
        "moneyAmount": 100
    },
    {
        "id": 2,
        "name": "Ally",
        "age": 20,
        "gender": "Female",
        "moneyAmount": 200
    },
    {
        "id": 3,
        "name": "Jacob",
        "age": 21,
        "gender": "Male",
        "moneyAmount": 20
    },
    {
        "id": 4,
        "name": "Sierra",
        "age": 25,
        "gender": "Female",
        "moneyAmount": 35
    }]
});
});

module.exports = router;
