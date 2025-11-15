// async function getData(){
//     try{
//         console.log("Fetching data ....");

//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');

//         if(!response.ok){
//             throw new Error('data not found')
//         }

//         const data = await response.json();

//         console.log("get data", data)
//         console.log("get data", data[0].id)
//         console.log("get data", data[0].title)
//         console.log("get data", data[0].body)
//     }catch(error){
//         console.log("Error!!")
//     }
// }

// getData()




const post = async() =>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                title: "New Post",
                body : "Post Created",
                userId: 1
            })
        });

        const data = await response.json();
        console.log("Post response:", data)
    }catch(error){
        console.log("error", error)
    }
}

post();