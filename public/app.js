var serverUrl = '/urls';
var btn = document.getElementById('btn')
var errorDiv = document.getElementById('btn')
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

    console.log(response);
    if(response && response.status == 'ok') {
        result = response.body.result; 
    } else {
        error = response.error ?? 'Error';
    }

    if(error) {
        document.getElementById('form').innerHTML = error;
        document.getElementById('resetBtn').style.display = 'block';
    } else {
        urlInput.style.disabled = true;
        slug.style.disabled = true;
        btn.style.disabled = true;
    }
}

btn.addEventListener('click', submit);
document.getElementById('reload').addEventListener('click', function() {
    window.location.reload();
});