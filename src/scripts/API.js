export async function api(){

  const requisicao = await fetch("https://openmusic-fake-api.onrender.com/api/musics")
  const resultado = await requisicao.json()
  return resultado

}