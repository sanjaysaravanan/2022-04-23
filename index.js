var ele = document.getElementById('test-sample');
ele.style.backgroundColor = "blue";
ele.style.fontSize = "24px";
var classElements = document.getElementsByClassName('test-class'); // returns Array of tags/elements/Nodes
classElements[0].style.color = "green";
classElements[0].setAttribute('id', 'testing-id');
classElements[1].style.color = "red";



var newElement = document.createElement('h1');
newElement.innerText = "Sanjay";

var newDivElement = document.createElement('div');
newDivElement.innerHTML = "<h6 style='color: green;'>Saravanan</h6><a href='https://www.google.com'>Google Here</a>";

var bodyTag = document.getElementById('body-test');
bodyTag.appendChild(newElement);
bodyTag.append(newElement, newDivElement);


var sampleDiv = document.createElement('div');
sampleDiv.innerText = "Sample Content";
sampleDiv.setAttribute('id', 'sample-cont');
sampleDiv.setAttribute('style', 'color: blue;');
sampleDiv.setAttribute('class', 'sample-class');
sampleDiv.style.backgroundColor = "#f00";


bodyTag.appendChild(sampleDiv);


const testSampleEle = document.querySelector('#test-sample>h1');
const testSampleEles = document.querySelectorAll('.test-class>h1');

console.log(testSampleEle);
console.log(testSampleEles);
