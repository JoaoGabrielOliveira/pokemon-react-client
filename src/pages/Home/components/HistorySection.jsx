import React from "react"
export default props =>
<div id="topo1">
    <h2 className='titulo'> Historia do Pokémon </h2>
        <div className="text">
            Quando jovem, o criador dos monstrinhos, Satoshi Tajiri, gostava bastante de observar e estudar os insetos.<br />
            Assim, baseado no conceito da metamorfose, o japonês idealizou um mundo no qual os jogadores batalhavam uns com os outros usando monstros que, com o passar do tempo e com os ganhos de experiência, evoluíam e ficavam mais poderosos.<br />
            Foi a partir dessa ideia que nasceu Pokémon, em 1994.
        </div>

    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
        <img src="https://i.pinimg.com/originals/d8/48/95/d848953a7d952445d996b5387ce20352.png" width="auto" height="250px"/>
        <a href="https://www.historiadetudo.com/pokemon" className="btn"><strong>Ler Mais</strong></a>
    </div> 
</div>