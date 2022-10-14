import './AsideProfile.css'

export const AsideProfile = () => {
    return (
        <aside className="ps-5">
            <div className="infoAsideProfile">
                <h2>Nombre de usuario</h2>
                <img src="./assets/default-profile.svg" alt="Imagen de perfil" />
                <p>Tu perfil</p>
            </div>
            <div className="help"><p>Centro de ayuda</p> </div>
        </aside>
    );
}

