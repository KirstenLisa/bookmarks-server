function makeBookmarksArray() {
    return [
        {
        id: 1,
        title: 'Test-Bookmark 1',
        url: 'www.test-bookmark-1.com',
        description: 'Description test bookmark 1',
        rating: 5   
           },
           {
        id: 2,
        title: 'Test-Bookmark 2',
        url: 'www.test-bookmark-2.com',
        description: 'Description test bookmark 2',
        rating: 4   
            },
            {
        id: 3,
        title: 'Test-Bookmark 3',
        url: 'www.test-bookmark-3.com',
        description: 'Description test bookmark 3',
        rating: 3   
            },
            {
        id: 4,
        title: 'Test-Bookmark 4',
        url: 'www.test-bookmark-4.com',
        description: 'Description test bookmark 4',
        rating: 2   
            },
            {
        id: 5,
        title: 'Test-Bookmark 5',
        url: 'www.test-bookmark-5.com',
        description: 'Description test bookmark 5',
        rating: 1   
            },
         ];
}

function makeMaliciousBookmark() {
    const maliciousBookmark = {
      id: 911,
      title: 'Naughty naughty very naughty <script>alert("xss");</script>',
      url: 'https://www.hackers.com',
      description: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
      rating: 1,
    }
    const expectedBookmark = {
      ...maliciousBookmark,
      title: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
      description: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
    }
    return {
      maliciousBookmark,
      expectedBookmark,
    }
  }
  
  module.exports = {
    makeBookmarksArray,
    makeMaliciousBookmark,
  }