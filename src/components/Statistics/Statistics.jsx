import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section class="statistics">
    <h2 class="title">{title}</h2>

    <ul class={css.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li class="item" key={id}>
          <span class={css.label}>{label} </span>
          <span class={css.percentage}>{percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Statistics;
