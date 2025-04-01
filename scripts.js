document.addEventListener('DOMContentLoaded', function() {
    const feedContainer = document.querySelector('.feed-container');

    // Sample feed items data
    const feedItems = [
        {
            username: 'John Doe',
            profilePic: 'https://via.placeholder.com/40',
            content: 'This is a sample post content.',
            likes: 0,
            comments: []
        },
        {
            username: 'Jane Smith',
            profilePic: 'https://via.placeholder.com/40',
            content: 'Another sample post content.',
            likes: 0,
            comments: []
        }
    ];

    // Function to render feed items
    function renderFeedItems() {
        feedContainer.innerHTML = '';
        feedItems.forEach((item, index) => {
            const feedItem = document.createElement('div');
            feedItem.classList.add('feed-item');

            const feedItemHeader = document.createElement('div');
            feedItemHeader.classList.add('feed-item-header');

            const profilePic = document.createElement('img');
            profilePic.classList.add('feed-item-profile-pic');
            profilePic.src = item.profilePic;

            const username = document.createElement('span');
            username.classList.add('feed-item-username');
            username.textContent = item.username;

            feedItemHeader.appendChild(profilePic);
            feedItemHeader.appendChild(username);

            const feedItemContent = document.createElement('div');
            feedItemContent.classList.add('feed-item-content');
            feedItemContent.textContent = item.content;

            const feedItemActions = document.createElement('div');
            feedItemActions.classList.add('feed-item-actions');

            const likeButton = document.createElement('button');
            likeButton.textContent = `Like (${item.likes})`;
            likeButton.addEventListener('click', () => {
                item.likes++;
                renderFeedItems();
            });

            const commentButton = document.createElement('button');
            commentButton.textContent = 'Comment';
            commentButton.addEventListener('click', () => {
                const comment = prompt('Enter your comment:');
                if (comment) {
                    item.comments.push(comment);
                    renderFeedItems();
                }
            });

            feedItemActions.appendChild(likeButton);
            feedItemActions.appendChild(commentButton);

            feedItem.appendChild(feedItemHeader);
            feedItem.appendChild(feedItemContent);
            feedItem.appendChild(feedItemActions);

            feedContainer.appendChild(feedItem);
        });
    }

    // Initial render
    renderFeedItems();
});
