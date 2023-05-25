// Function to handle form submission
 // Prevent form submission
 x=JSON.parse(localStorage.getItem("list"))
 var error=document.querySelector(".error-container")
 console.log(x)
 var previous_role
    // Get entered username and password

    const loginForm = document.querySelector('#loginForm');
    loginForm.addEventListener('click', ()=>
    {
        var username = document.querySelector('#userName').value;
        var password = document.querySelector('#password').value;
        const userIndex = x.findIndex((x) => x.userName === username && x.Password === password);
        if(userIndex!=-1)
        {
            const user = x[userIndex];
            const role = user.role;
            console.log("enter")
            console.log(role)
            
            switch(role)
            {
                case 'Arriving Manger':
                    console.log("to")
                     location.href="../html/arm.html"       
                    break;
                case 'General Manger':
                    console.log("po")
                    location.href="../html/general.html" 
                    break;
                case 'Arriving Worker':
                    console.log("ko")
                   location.href="../html/arw.html"
                    break;
                case 'Cutting Manger':
                    console.log("uo")
                    location.href="../html/cuttingm.html"
                    break;
                case 'Cutting worker':
                    console.log("ro")
                    location.href="../html/cuttingw.html"
                    break;
                case 'loading manger':
                    console.log("yo")
                    location.href="../html/loadingm.html"
                    break;
                case 'loading worker':
                    console.log("qo")
                    location.href="../html/loadingw.html"
                    break;

            }
            
            
        }
        else
        {
            console.log ("acces deny")
            error.classList.remove("d-none");
        }
       

    });

   
    
     
