import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Equipment } from "./classA.js";


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
    $('#dinosaur1').text(body[0]);
    $('.dinosaur2').text(body[1]);
    $('.dinosaur3').text(body[2]);
  }, function(error) {
    console.log(`There was an error processing your request: ${error.message}`);
  });

  equipment.addEquip1();
  equipment.addEquip2();
  equipment.addEquip3();
  $('.equipment1').text(equipment.equipment1);
  $('.equipment2').text(equipment.equipment2);
  $('.equipment3').text(equipment.equipment3);
});
