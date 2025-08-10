document.addEventListener('DOMContentLoaded', function() {
    const text = 'Oi,\neu sou o\nÁquila Filipe.';
    const typewriterElement = document.getElementById('typewriter-text');
    let index = 0;
    let displayedText = '';
    
    function typeWriter() {
        if (index < text.length) {
            const char = text.charAt(index);
            if (char === '\n') {
                displayedText += '<br>';
            } else {
                displayedText += char;
            }
            typewriterElement.innerHTML = displayedText + '<span class="cursor"></span>';
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    
    typeWriter();
});