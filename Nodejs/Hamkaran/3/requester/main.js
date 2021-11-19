// TODO
const urls = document.getElementById('urls');
const btn = document.getElementById('send-requests');
const results = document.getElementById('results');

btn.addEventListener('click',async ()=>{
    const arr = await urls.value.split('\n').map(item=>item.trim()).filter(item=>item.length>0);
    results.innerHTML='';
    const urlAll = [];
    await arr.forEach(async url => {

    //     const result = await fetch(url)
    //             .then(res=>{
    //                 if(res.status==200)
    //                     return res.json()        
    //                 else
    //                     return 'error';
    //             })
    //             .then(result=>{
    //                 if(result!='error')
    //                     return JSON.stringify(result);
    //                 else
    //                     return null;    
    //             })
    //             .catch(err=>{
    //                 return 'error';
    //             });

    //             results.innerHTML+=`<div>${result}</div>`;        

    // });

    urlAll.push(
     fetch(url).then(res=>res.json())
    );

    Promise.all(urlAll)
    .then(res=>{
        console.log('then',res);
        //results.innerHTML+=`<div>${JSON.stringify(res)}</div>`;        
    })
    .catch(err=>{
        console.log('catch',err);
        //results.innerHTML+=`<div>${err}</div>`;        
    })
    ;

});
    console.log(arr);
});

