import FriendItem from './FriendItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendItem avatar={avatar} name={name} isOnline={isOnline} id={id} />
    ))}
  </ul>
);
export default FriendList;
