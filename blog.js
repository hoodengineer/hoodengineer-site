const blogTitle = "Thoughts"

const posts = [ 
    {
    title:`Expense-tracker`,
    date:`6-1-26`,
    tag:`Javascript`,
    body:`Currently setting up the repository for this project. I want the design to be simple. Some of the expense
    
    trackers I've seen have the usual section for recent transactions , breakdown - with a circle graph, and etc.
    
    The purpose of this tracker is to simplify the visual data, and the process.
    
    input description of expense -> input expense ammount in format 0.00 -> select drop-down menu of category -> press Add button.
    
    After this process is complete, a data point is added to a line graph. It will merely show a increase in expenses /, a decrease \. 
    
    I have no idea ho to use javascript, or any other language to create this, but I'll use claude to teach me without actually writing any code for me.
    
    - I'll check in later.`,

    },
    
    { 
    title: 'New Territory: Javascript',
    date: '6-1-26',
    tag: 'Project',
    body: `The whole purpose of this expense tracker is to allow myself to see a visual representation by way of a reactive line graph.

    This being my first actual project, I plan to take things very slow. Personally, I dont want to rush to push commits for the hell of it.

    I mean when you get into a new relationship asking shawty if she's ready to committ off-the-rip is hella aggressive. I want to spend time with javascript for over a year while documenting all of it.
    
    I think it makes the process more interesting as I see my thought pattern. For readers it also give you access to how I think about problems, and I'd like
    
    feedback from you also to help me on this journey. 
    
    I'm currently learning while I build. I believe that approach may have a better ROI. It beats the whole syntax tutorials thing.
    
    Right now I'm setting up the current page you are reading this on, so that I can blog simultaneously. 
    
    Thanks for reading my g's!`

},
]

const postList = document.getElementById('post-list');

posts.forEach(post => {
  const div = document.createElement('div');
  div.classList.add('post');
  div.innerHTML = `
    <h2>${post.title}</h2>
    <p class="meta">${post.date} · ${post.tag}</p>
    <p>${post.body}</p>
  `;
  postList.appendChild(div);
});