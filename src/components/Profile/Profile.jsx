import data from '../../user.json';
import css from './Profile.module.css';

const Profile = () => (
  <div className={css.container}>
    <div class={css.profile}>
      <div class={css.description}>
        <img src={data.avatar} alt="User avatar" class={css.avatar} />
        <p class={css.name}>{data.username}</p>
        <p class={css.tag}>@{data.tag}</p>
        <p class={css.location}>{data.location}</p>
      </div>

      <ul class={css.stats}>
        <li>
          <span class={css.label}>Followers </span>
          <span class={css.quantity}>{data.stats.followers}</span>
        </li>
        <li>
          <span class={css.label}>Views </span>
          <span class={css.quantity}>{data.stats.views}</span>
        </li>
        <li>
          <span class={css.label}>Likes </span>
          <span class={css.quantity}>{data.stats.likes}</span>
        </li>
      </ul>
    </div>
  </div>
);

export default Profile;
