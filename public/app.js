const serverUrl = '/urls';
const errorDiv = document.getElementById('shorten-error')
const createdSection= document.getElementById('created-section');
const formElement = document.getElementById('url-form');
const createdUrlElement = document.getElementById('createdTag');


async function submit(e) {
    e.preventDefault();
    e.stopPropagation();
    const form = new FormData(e.target);
    const url = form.get("url");
    const slug = form.get("slug");

    var error, created;

    var body = {
        url,
        slug
    }
    const response = await fetch(serverUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    const resBody = await response.json();
    if(response && response.status == 200) {
        created = `${window.location.href}${resBody}`; 
    } else {
        error = resBody.message || 'Toang rồi bạn êi!';
    }

    if(error) {
        errorDiv.innerHTML = error;
        errorDiv.style.display = "initial";
    } else {
        formElement.style.display = "none";
        createdUrlElement.innerHTML = created;
        createdUrlElement.href = created;
        createdSection.style.display="initial";
    }
}

formElement.addEventListener('submit', submit);