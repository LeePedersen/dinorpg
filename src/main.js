// <!-- NOTE TO LEE: I would like to work on the testing process with you tomorrow, please do not undergo them without me! -->
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Equipment } from "./equipment.js";


$(document).ready(function() {

  let equipment = new Equipment;

  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `http://dinoipsum.herokuapp.com/api/?format=json&words=3&paragraphs=1`;
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });

  promise.then(function(response) {
    let body = JSON.parse(response);
    body = body[0];
    console.log(body);
    $('.dinosaur1').text(body[0]);
    $('.dinosaur2').text(body[1]);
    $('.dinosaur3').text(body[2]);
  }, function(error) {
    console.log(`There was an error processing your request: ${error.message}`);
  });

  equipment.addEquip1();
  equipment.addEquip2();
  equipment.addEquip3();
  equipment.addEquip4();
  equipment.addEquip5();
  equipment.addEquip6();
  $('.equipment1').text(equipment.equipment1);
  $('.equipment2').text(equipment.equipment2);
  $('.equipment3').text(equipment.equipment3);
  $('.equipment4').text(equipment.equipment4);
  $('.equipment5').text(equipment.equipment5);
  $('.equipment6').text(equipment.equipment6);
});

$(".questStart").click(function(event){
  event.preventDefault();
  $('.questStart').hide();
  $('#scenario1').show();
  $('.action1').show();
  $('#scenario2').hide();
  $('.action2').hide();
  $('#scenario3').hide();
  $('.action3').hide();
  $('#scenario1lucky').show();
  setTimeout(function(){
    $('#scenarioTimeOut').show();
    $('.timeRisk').hide();
  }, 30000);
});

$("#continue1").click(function(event){
  event.preventDefault();
  $('#scenario1').hide();
  $('.action1').hide();
  $('#scenario1lucky').hide();
  $('#scenario2').show();
  $('.action2').show();
  $('#scenario2lucky').show();
  setTimeout(function(){
    $('#scenarioTimeOut').show();
    $('.timeRisk').hide();
  }, 30000);
});

$("#continue2").click(function(event){
  event.preventDefault();
  $('#scenario2').hide();
  $('.action2').hide();
  $('#scenario2lucky').hide();
  $('#scenario3').show();
  $('.action3').show();
  $('#scenario3lucky').show();
  setTimeout(function(){
    $('#scenarioTimeOut').show();
    $('.timeRisk').hide();
  }, 30000);
});
