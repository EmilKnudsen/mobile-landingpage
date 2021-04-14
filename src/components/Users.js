import "./Users.scss";


function Users ({user, name, twitter, content}) {
  return (
    <div className="users">
      <div className="users__header">
        <div className="users__headerProfile">
        <img className="users__user" src={user} alt="profile"/>
        <p className="users__name">{name}</p>
        </div>
        <img className="users__twitter" src={twitter} alt="twitter"/>
      </div>
        <p className="users__content">{content}</p>
    </div>
  )
};

export default Users;