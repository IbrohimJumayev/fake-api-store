


const username = document.getElementsByName("user")[0];
        const password = document.getElementsByName("password")[0];
        const form = document.querySelector('form')
        const loginBtn = document.querySelector('#log')



        let user, passw;

      
init()
        function toglleBtn() {
            if (user && passw) {
                loginBtn.disabled = true;
            } else {
                loginBtn.disabled = false;
            }
        }
        function init() {
            redirect()
            

            username.oninput = function (event) {
                user = event.target.value.trim()
                if (user === '') {
                    loginBtn.disabled = true
                } else {
                    loginBtn.disabled = false
                }
            }
            password.oninput = function (event) {
                passw = event.target.value.trim()
                if (passw === '') {
                    loginBtn.disabled = true
                } else {
                    loginBtn.disabled = false
                }
            }
            form.onsubmit = async function (event) {
                event.preventDefault()


                const result = await login()
                saveToken(result.token)
                redirect()
            }

        }



        async function login() {
            const response = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                body: JSON.stringify({
                    username: user,
                    password: passw
                }),
                headers: {
                    "Content-Type": "application/json"
                }

            })
            const result = await response.json()

            return result
        }
        function saveToken(token) {
            localStorage.setItem("token", token)
        }

        function redirect() {
           
            const token = localStorage.getItem('token')
            if(token){
                window.location.href = 'http://127.0.0.1:5500/indexes/homePage.html'
            }
        }