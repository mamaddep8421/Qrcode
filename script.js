const generateBtn = document.querySelector('form button');
const Qrcodbox = document.querySelector('.Qr-code');
const Qrinput = document.querySelector('form input');
const qrimage = document.querySelector('.Qr-code img');

generateBtn.addEventListener('click', () => {
    let qrvalue = Qrinput.value;
    
    if (!qrvalue) {
        return alert('لطفا یک متن یا آدرس وارد بکن😐')
    }
    // Qrcodbox.classList.remove('hidden')
    
    generateBtn.innerText = 'درحال دریافت Qr Code ';
  
    qrimage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`

    qrimage.addEventListener('load', () => {
        Qrcodbox.classList.remove('hidden');
        generateBtn.innerText = 'تولید Qr code اختصاصی';
    });
});

Qrinput.addEventListener('keyup', () => {
    if (!Qrinput.value) {
        Qrcodbox.classList.add('hidden')
    }
});
// Type-auto functions:
function autotype() {
let string = `تهیه شده توسط ❤️`
let str = document.getElementById("str");
let splits = string.split("");
(function anim() {
    splits.length > 0 ? str.innerHTML += splits.shift() : clearTimeout(runing);
    let runing = setTimeout(anim, 90)
})();
}
// loop for infinity
autotype()
