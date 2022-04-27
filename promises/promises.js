const posts=[
    {title: 'Post one', body:'this is post one'},
    {title: 'Post two', body:'this is post two'},
];

function getPosts(){
    setTimeout(() => {
        let output='';
        posts.forEach((post, index) => {
            output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000);
}

function createPost(post,callback){

    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            posts.push(post);

            const error=false;

            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong');
            }
        },2000);
    });
}

// async await
async function init(){
    await createPost({title: 'Post three', body:'this is post three'});

    getPosts();
}

init();


//async await fetch
// async function fetchData(){
//     const res=await fetch('https://jsonplaceholder.typicode.com/users');
//     const data=await res.json();

//     console.log(data);

// }
// fetchData();

createPost({title: 'Post three', body:'this is post three'}).then(getPosts).catch(err => console.log(err));

// const promise1=Promise.resolve('hello harsha');
// const promise2=10;
// const promise3=new Promise((resolve,reject) => setTimeout(resolve,2000,'goodbye'));

//const promise4= fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()); //we can also pass this promise in promise all

// Promise.all([promise1,promise2,promise3]).then(values => console.log(values));