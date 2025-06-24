document.getElementById('login-button').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (username === "admin" && password === "1234") {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('home-screen').classList.remove('hidden');
        document.getElementById('welcome-message').innerText = `Bem-vindo, funcionário!`;
    } else {
        message.innerText = "Usuário ou senha incorretos.";
    }
});

document.getElementById('logout-button').addEventListener('click', function() {
    // Verifica se todos os EPIs estão marcados
    const capaceteChecked = document.getElementById('capacete').checked;
    const oculosChecked = document.getElementById('oculos').checked;
    const luvasChecked = document.getElementById('luvas').checked;
    const botasChecked = document.getElementById('botas').checked;

    if (capaceteChecked && oculosChecked && luvasChecked && botasChecked) {
        // Se todos os EPIs estão marcados, permite sair
        document.getElementById('home-screen').classList.add('hidden');
        document.getElementById('login-screen').classList.remove('hidden');
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('message').innerText = '';
    } else {
        // Se não, exibe uma mensagem de erro
        alert("Por favor, marque todos os EPIs antes de sair.");
    }
});
