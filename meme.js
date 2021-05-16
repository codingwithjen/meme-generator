document.addEventListener('DOMContentLoaded', function() {
    let memeForm = document.querySelector('#meme-form');
    const button = document.querySelector('#button');
    let img = document.getElementsByTagName('img');
    let submittedMeme = document.querySelector('#submitted-meme');

    memeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const meme = document.createElement('div');
        const topText = document.createElement('div');
        const bottomText = document.createElement('div');
        const removeMeme = document.createElement('div');

        const img = document.createElement('img');
        img.src = document.getElementById('img-url').value;

        topText.classList.add('topText');
        topText.innerText = document.getElementById('top-text').value;

        bottomText.classList.add('bottomText');
        bottomText.innerText = document.getElementById('bottom-text').value;

        removeMeme.classList.add('remove-meme');
        removeMeme.innerText = '';
        removeMeme.style.color = 'red';

        meme.classList.add('meme');
        meme.append(topText);
        meme.append(bottomText);
        meme.append(img);
        meme.append(removeMeme);
        let submittedMeme = document.getElementById('submitted-meme');
        submittedMeme.append(meme);

        memeForm.reset();

    });

    function remove(event) {
        event.target.parentNode.remove();
    }

    submittedMeme.addEventListener('click', remove, false);

    });


