export function TwitterFollowCard({userName , name , isFollowing}){
    return (
        <article className="tw-followCard">
          <header className="tw-followCard-header">
              <img 
              className="tw-followCard-img"
              src="imagenes/Astrobot.jpg" 
              alt="Astrobot"/>
              <div className="tw-followCard-info">
                  <strong>{name}</strong>
                  <span className="tw-followCard-user">@{userName}</span>
              </div>
          </header>
          <aside>
              <button className="tw-followCard-btnSeguir">
                  {isFollowing}
              </button>
          </aside>
        </article>
      )
}