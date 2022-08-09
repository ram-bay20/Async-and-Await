const blogs = [
     { title: 'Cinematic', body: 'Marvel Cinematic Universe announced all projects of phase 5 which contains thanos level threats like secret wars and multiverse saga.' },
     { title: 'Sports', body: 'India won the ODI series against West Indies with 3-0 lead as Subhman  Gill becoming player of the series.' }
];

function getBlog() {
     setTimeout(() => {
          let output = '';
          blogs.forEach((blog) => {
               output += `<h2><li> ${blog.title}:</li></h2><p style= "font-style:italic;"> ${blog.body} </p>`;
          });
          document.body.innerHTML = output;
          document.body.style.fontFamily = 'Arial,Helvetica,sans-serif';
          document.body.style.fontSize = '25px';
          document.body.style.color = '#f00';
          document.body.style.background = '#adc';
     }, 1000);
}

function createBlog(blog) {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               blogs.push(blog);

               const error = false;
               //const error = true;

               if (!error) {
                    resolve();
               } else {
                    reject('Error : Something went wrong..');
               }
          }, 2000);
     })

}

//--Async / Await--

async function initiate(){
     await createBlog({ title: 'Politics', body: 'I don\'t take intrest in this bloody politics. So I don\'t know anything about it.' });

     getBlog();
}

initiate();