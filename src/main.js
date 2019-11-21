
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Equipment } from "./equipment.js";


$(document).ready(function() {

  let equipment = new Equipment;

  let dino1length;
  let dino2length;
  let dino3length;
  let aveLength = 12;

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
    dino1length = body[0].length;
    dino2length = body[1].length;
    dino3length = body[2].length;
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

  $(".questStart").click(function(event){
    event.preventDefault();
    $('.questStart').hide();
    $('#scenario1').show();
    $('.action1').show();
    $('#scenario2').hide();
    $('.action2').hide();
    $('#scenario3').hide();
    $('.action3').hide();
    setTimeout(function(){
      $('#scenarioTimeOut').show();
      $('.timeRisk').hide();
    }, 1200000);

  });

  $('.action1').click(function() {

    let used = $("input:radio[name=action]:checked").val();
    let result1 = aveLength;
    if (used === "equipment1") {
      result1 += 2;
    } else if (used === "equipment2") {
      result1 += 0;
    } else if (used === "equipment3") {
      result1 -= 1;
    }
    if (result1 > dino1length) {
      console.log(aveLength);
      console.log(result1);
      $('#scenario1lucky').show();
      $('.action1').hide();
    } else {
      console.log(aveLength);
      console.log(result1);
      $('#scenario1unlucky').show();
      $('.action1').hide();
    }
  });

  $("#continue1").click(function(event){
    event.preventDefault();
    $('#scenario1').hide();
    $('.action1').hide();
    $('#scenario1lucky').hide();
    $('#scenario2').show();
    $('.action2').show();
  });

  $('.action2').click(function() {

    let used = $("input:radio[name=action2]:checked").val();
    let result2 = aveLength;
    if (used === "equipment1") {
      result2 += 0;
    } else if (used === "equipment2") {
      result2 += 2;
    } else if (used === "equipment3") {
      result2 -= 3;
    }
    if (result2 > dino2length) {
      console.log(aveLength);
      console.log(result2);
      $('#scenario2lucky').show();
      $('.action2').hide();
    } else {
      console.log(aveLength);
      console.log(result2);
      $('#scenario2unlucky').show();
      $('.action2').hide();
    }
  });


  $("#continue2").click(function(event){
    event.preventDefault();
    $('#scenario2').hide();
    $('.action2').hide();
    $('#scenario2lucky').hide();
    $('#scenario3').show();
    $('.action3').show();
  });

  $('.action3').click(function() {

    let used = $("input:radio[name=action3]:checked").val();
    let result3 = aveLength;
    if (used === "equipment1") {
      result3 += 0;
    } else if (used === "equipment2") {
      result3 += 1;
    } else if (used === "equipment3") {
      result3 -= 1;
    }
    if (result3 > dino3length) {
      console.log(aveLength);
      console.log(result3);
      $('#scenario3lucky').show();
      $('.action3').hide();
    } else {
      console.log(aveLength);
      console.log(result3);
      $('#scenario3unlucky').show();
      $('.action3').hide();
    }
  });
});
