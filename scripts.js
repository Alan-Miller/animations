const red = document.getElementsByClassName('red')[0],
      blue = document.getElementsByClassName('blue')[0];

red.addEventListener('click', _ => { 
      if (red.classList.contains('animate-red')) red.classList.remove('animate-red'); 
      else red.classList.add('animate-red');
});

blue.addEventListener('click', _ => { 
      if (blue.classList.contains('animate-blue')) blue.classList.remove('animate-blue'); 
      else blue.classList.add('animate-blue'); 
});