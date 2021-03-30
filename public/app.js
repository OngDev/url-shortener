var serverUrl = '';
var btn = document.getElementById('btn')
var urlInput= document.getElementById('url_lnk');
var slugInput= document.getElementById('slug');

async function submit() {
    var url = urlInput.value;
    var slug = slugInput.value;
    var error, result;

    var body = {
        'url': url,
        'slug': slug
    
    }
    const response = await fetch(serverUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(body)
    });

    if(response && response == 'ok') {
        result = response.body.result; 
    } else {
        error = response.error ?? 'Error';
    }

    if(error) {
        document.getElementById('form').innerHTML = error;
    } else {
        urlInput.style.disabled = true;
        slug.style.disabled = true;
        btn.style.disabled = true;
    }
}

btn.addEventListener('click', submit);