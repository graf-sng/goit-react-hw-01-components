import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>

    <ul className={css.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li
          className={css.item}
          key={id}
          style={{ backgroundColor: rendColor() }}
        >
          <span className={css.label}>{label} </span>
          <span className={css.percentage}>{percentage} %</span>
        </li>
      ))}
    </ul>
  </section>
);

function rendColor() {
  let color =
    '#' + ((Math.random() * 0x1000000) | 0x1000000).toString(16).slice(1);
  return color;
}

export default Statistics;
