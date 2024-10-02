import { useState } from "react";

export function TwitterFollowCard({formatElement , userName , name , initialIsFollowing}){

    //Usamos la desestrucutacion de JavaScript para visualizar mucho mejor el estado .
    const [isFollowing , setIsFollowing] = useState(initialIsFollowing)

    //Permite validar que cuando sea trua isFollowing el valor en texto sea "Siguiendo" y si es false el valor sea "Seguir"
    const text = isFollowing ? "Siguiendo" : "Seguir"

    //Nos permitira cambiar los estilos dependiendo el estado del boton 
    const  buttonisFollowing = isFollowing 
    ? "tw-followCard-btnSeguir is-following"
    : "tw-followCard-btnSeguir"
    //Esta funcion permitira cambiar el estado de true a false o de false a true
    const handleClick =()=>{
        setIsFollowing (!isFollowing)
    }
    return (
        <article className="tw-followCard">
          <header className="tw-followCard-header">
              <img 
              className="tw-followCard-img"
              src="imagenes/Astrobot.jpg" 
              alt="Astrobot"/>
              <div className="tw-followCard-info">
                  <strong>{name}</strong>
                  <span className="tw-followCard-user">{formatElement(userName)}</span>
              </div>
          </header>
          <aside>
              <button className={buttonisFollowing} onClick={handleClick}>
                  <span className="tw-followCard-text">{text}</span>
                  <span className="tw-followCard-stopFollow">Dejar de seguir</span>
              </button>
          </aside>
        </article>
      )
}