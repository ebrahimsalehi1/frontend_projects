
colorInput = document.getElementById('color_input');
colorPreview = document.getElementById('color_preview');

function changeColor(color){
    console.log('change '+color);
    colorPreview.style.backgroundColor=CSS.supports('color',`#${color}`) ? `#${color}`:'#000';
}

colorInput.addEventListener('keyup',e=>{changeColor(e.target.value);});
colorInput.addEventListener('change',e=>{changeColor(e.target.value);});
