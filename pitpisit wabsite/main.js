function createPostItem(text, selectedUser) {
    const post = document.createElement('article');
    post.classList.add('post-item');

    const meta = document.createElement('span');
    meta.classList.add('post-meta');

    const name = document.createElement('span');
    name.classList.add('post-author');
    name.textContent = selectedUser;

    meta.appendChild(name);

    const content = document.createElement('p')
    content.textContent = text;

    post.appendChild(meta);
    post.appendChild(content);

    return post;
}

function createFeedComponent() {
    const container = document.createElement('section');
    container.classList.add('post-feed');
    return container;
}

function createPostInputComponent(postFeed) {
    const container = document.createElement('section');
    container.classList.add('post-input');

    //dropdonw user
    const userSelect = document.createElement('select');
    user.forEach(user => {
        const option = document.createElement('option');
        option.value = user;
        option.textContent = user;
        userSelect.appendChild(option);
    });

    //textarea
    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Write...';
    //button
    const button = document.createElement('button');
    button.textContent = 'Post';
    
    //button function
    button.addEventListener('click', () => {
        const text = textarea.value.trim();
        if (text === '') return;

        const selectedUser = userSelect.value;
        const newPost = createPostItem(text, selectedUser);
        postFeed.prepend(newPost);
        textarea.value = '';
    })
    container.appendChild(userSelect);
    container.appendChild(textarea);
    container.appendChild(button);

    return container;
}

const user = ['Pitpisit', 'Top', 'Titat'];

const app = document.getElementById('app');
const postFeed = createFeedComponent();
const postInput = createPostInputComponent(postFeed);

app.appendChild(postInput);
app.appendChild(postFeed);