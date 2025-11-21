export const Mostarhora = ({ horaDisplay}) => {
    const hora = () => {
        const agora = new Date()

        const dia = agora.getDate().toString().padStart(2, '0')
        const mes = agora.getMonth().toString().padStart(1, '0')
        const ano = agora.getFullYear().toString()
        const horas = agora.getHours().toString().padStart(2, '0')
        const minutos = agora.getMinutes().toString().padStart(2, '0')
        const segundos = agora.getSeconds().toString().padStart(2, '0')

        horaDisplay.textContent = `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`
    }

    hora()

    setInterval(hora, 1000)
}   
   
