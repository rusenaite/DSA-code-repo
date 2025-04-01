document.addEventListener('DOMContentLoaded', function() {
    const feedContainer = document.querySelector('.feed-container');

    // Function to fetch code files from the repository
    async function fetchCodeFiles() {
        const response = await fetch('https://api.github.com/repos/rusenaite/DSA-code-repo/contents');
        const files = await response.json();
        return files.filter(file => file.name.endsWith('.py') || file.name.endsWith('.ipynb'));
    }

    // Function to fetch the content of a code file
    async function fetchCodeContent(fileUrl) {
        const response = await fetch(fileUrl);
        const fileContent = await response.json();
        return atob(fileContent.content);
    }

    // Function to render feed items
    async function renderFeedItems() {
        const codeFiles = await fetchCodeFiles();
        feedContainer.innerHTML = '';
        for (const file of codeFiles) {
            const content = await fetchCodeContent(file.download_url);
            const feedItem = document.createElement('div');
            feedItem.classList.add('feed-item');

            const feedItemHeader = document.createElement('div');
            feedItemHeader.classList.add('feed-item-header');

            const username = document.createElement('span');
            username.classList.add('feed-item-username');
            username.textContent = file.name;

            feedItemHeader.appendChild(username);

            const feedItemContent = document.createElement('div');
            feedItemContent.classList.add('feed-item-content');
            feedItemContent.textContent = content;

            feedItem.appendChild(feedItemHeader);
            feedItem.appendChild(feedItemContent);

            feedContainer.appendChild(feedItem);
        }
    }

    // Initial render
    renderFeedItems();
});
