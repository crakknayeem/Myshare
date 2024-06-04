var postInfoo = [
   { filename: 'Posts/post1', date: '04-03-2024' },
   { filename: 'Posts/post2', date: '09-03-2024' },
   { filename: 'Posts/post3', date: '08-03-2024' },
   { filename: 'Posts/post4', date: '07-03-2024' },
   { filename: 'Posts/about_eee', date: '12-03-2024' },
   { filename: 'Posts/susteee', date: '13-03-2024' },
   { filename: 'Posts/sust_eee_post', date: '16-03-2024' },

  
   // Add more posts with their respective dates
];

// Clone with the date formatted as year-month-day
var postInfo = postInfoo.map(post => {
   const [day, month, year] = post.date.split('-');
   const formattedDate = `${year}-${month}-${day}`;
   return { filename: post.filename, date: formattedDate };
});

// Sort the postInfo array based on the date in descending order (newest to oldest)
postInfo.sort((a, b) => new Date(b.date) - new Date(a.date));

// Reverse the order to display posts from newest to oldest


// Display the reversed postInfo array in the console
console.log("sorted luicca ",postInfo);
