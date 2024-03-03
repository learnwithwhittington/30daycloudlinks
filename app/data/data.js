

const USER_LINKS = [
    {
        displayHeading: 'Whittington',
        displaySubHeading: 'Whittington\'s 30 Days of Cloud Challenge',
        links: [
            {
                title: 'All Posts',
                url: 'https://whittington.blog/posts/30-days-cloud-challenge.html'
            },
        ]
    },
    // Duplicate this object and update the values to add a new user
    // DON'T FORGET TO REMOVE THE isSample PROPERTY, it will be excluded from the list on the site
    // if that property is present
    {
        displayHeading: 'Sample User 2',
        displaySubHeading: 'Sample User 2\'s 30 Days of Cloud Challenge',
        isSample: true,
        links: [
            {
                title: 'sample link 1',
                url: 'example.com'
            },
            {
                title: 'sample link 2',
                url: 'example.com'
            },
            {
                title: 'sample link 3',
                url: 'example.com'
            },
        ]
    },
];

module.exports = {
    USER_LINKS
};
