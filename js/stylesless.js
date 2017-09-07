  $('.navbar-collapse').on('click', function() {
    $(".slider").toggleClass("sliderMove");  
}); 

var data = {
  d: [
    {id:1, Make: "Ford", Model:"F-250", Year: 2017, Color:"Two-Tone", Type:"Truck", Price:"$67,500"},
    {id:2, Make: "Honda", Model:"CRV", Year: 2014, Color:"White", Type:"SUV", Price:"$22,700"},
    {id:1, Make: "Ford", Model:"Ranger", Year: 2014, Color:"Red", Type:"Truck", Price:"$17,750"},
    {id:4, Make: "Chevy", Model:"Silverado", Year: 2017, Color:"Silver", Type:"Truck", Price:"$55,267"},
    {id:1, Make: "Ford", Model:"F-150", Year: 2017, Color:"Pearl White", Type:"Truck", Price:"$62,500"},
    {id:1, Make: "Ford", Model:"Ranger", Year: 2016, Color:"Orange", Type:"Truck", Price:"$46,500"},
    {id:3, Make: "Nissan", Model:"Titan", Year: 2017, Color:"Gun Metal", Type:"Truck", Price:"$64,420"},
    {id:3, Make: "Nissan", Model:"Titan", Year: 2017, Color:"Yellow", Type:"Truck", Price:"$71,900"},
    {id:5, Make: "GMC", Model:"Sierra", Year: 2015, Color:"Blue", Type:"Truck", Price:"$38,670"},
    ]
  };

for (var i = 0; i < data.d.length; i++) {
  $("#inventoryTable").after("<tr><td>" + data.d[i].Make 
  + "</td><td>" + data.d[i].Model 
  + "</td><td>" + data.d[i].Year 
  + "</td><td>" + data.d[i].Color 
  + "</td><td>" + data.d[i].Type 
  + "</td><td>" + data.d[i].Price 
  + "</td><td>");
}

$('#sub_tot').change(function(){
  $('#tax').val( ($(this).val()*0.08 ).toFixed(2) );
}).change()

let searchInput = document.getElementById('searchInput');
let ford = document.getElementById('1');
let honda = document.getElementById('2');
let nissan = document.getElementById('3');
let chevy = document.getElementById('4');
let gmc = document.getElementById('5');

function search() {
  if(search.value === 'ford') {
    ford.style = 'display: default;'
    honda.style = 'display: none';
    nissan.style = 'display: none';
    chevy.style = 'display: none';
    gmc.style = 'display: none';
  } else if (search.value === 'honda') {
    honda.style = 'display: default;'
    ford.style = 'display: none';
    nissan.style = 'display: none';
    chevy.style = 'display: none';
    gmc.style = 'display: none';
  } else if (search.value === 'nissan') {
    nissan.style = 'display: default;'
    honda.style = 'display: none';
    nissan.style = 'display: none';
    chevy.style = 'display: none';
    gmc.style = 'display: none';
  } else if (search.value === 'chevy') {
    chevy.style = 'display: default;'
    honda.style = 'display: none';
    nissan.style = 'display: none';
    ford.style = 'display: none';
    gmc.style = 'display: none';
  } else if (search.value === 'gmc') {
    gmc.style = 'display: default;'
    honda.style = 'display: none';
    nissan.style = 'display: none';
    chevy.style = 'display: none';
    ford.style = 'display: none';
  }
}


var notFoundElement = 'No Results Found'

$('#inventoryTable').tableFilter({
// input field to filter table rows
  'input' : 'input[type=search]',
    // trigger events and elements
  'trigger': {
    "event"   : "keyup",
    'element'   : 'td'
},
'caseSensitive' :  false,
  'timeout' : -1,
    'sort'  : false,
    // not found element
    // e.g. notFoundElement : ".not-found"
'notFoundElement' : notFoundElement,
    'callback'  : (function(){
      alert ('No Results Found');
    }),
  })