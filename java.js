async function buscar() {
  const cidade = document.getElementById("cidade").value;
  const key = '52e4534a21f2350b6198fd187e80bba7'; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade},BR&appid=${key}&units=metric&lang=pt`;

  try {
    const resp = await fetch(url);
    const dados = await resp.json();

    if (dados.cod === 200) {
      document.getElementById("resposta").innerHTML =
        `${dados.name}: ${parseInt(dados.main.temp)}°C - ${dados.weather[0].description}`;
    } else {
      document.getElementById("resposta").innerText = "Cidade não encontrada.";
    }
  } catch (error) {
    document.getElementById("resposta").innerText = "Erro ao buscar dados.";
    console.error(error);
  }
}
