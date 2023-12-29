import css from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li className={css.item} key={id}>
        <span className={`${css.status} ${isOnline && css.online}`}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    ))}
  </ul>
);
export default FriendList;
