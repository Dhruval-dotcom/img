var rotation = 0;
var img_index = 0;

var img_array = [
  "http://bricho.com/img/gallery_image_1.jpg", 
  "http://bricho.com/img/gallery_image_2.jpg", 
  "http://bricho.com/img/gallery_image_3.jpg", 
  "http://bricho.com/img/gallery_image_4.jpg"
];

//Loads the first image that comes in the array
$(document).ready(function(){
  $('.slide-1').css({
    'background': 'url(' + img_array[img_index] + ')',
    'background-size': 'contain',
    'background-repeat': 'no-repeat'
  });
  counter++;
});

//When someone clicks the next but load the next image
$('#next-btn').click(function(){
  rotation += 360;
  img_index++;
  if(img_index == img_array.length){
    img_index = 0;
  }
  
  $('.slide-1').css({
    'background': 'url(' + img_array[img_index] + ')',
    'background-size': 'contain',
    'background-repeat': 'no-repeat'
  });
  
  $('.img-container').css({
    'transform': 'rotateY(' + rotation + 'deg)'
  });
});

//When some clicks the back button load the previous pic
$('#back-btn').click(function(){
  rotation -= 360;
  img_index--;
  if(img_index == -1){
    img_index = img_array.length - 1;
  }
  
  $('.slide-1').css({
    'background': 'url(' + img_array[img_index] + ')',
    'background-size': 'contain',
    'background-repeat': 'no-repeat'
  });
  
  $('.img-container').css({
    'transform': 'rotateY(' + rotation + 'deg)'
  });
});