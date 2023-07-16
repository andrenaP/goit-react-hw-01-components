import css from './Statistics.module.css'
import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics= ({title ,stats}) =>{
    return (<section className={css.statistics}>
      {title && (
        <h2 className={css.title}>{title}</h2>
      )}
    <ul className={css.stat_list}>
    {stats.map(stat => (
      <li key={stat.id} style={{ backgroundColor: getRandomHexColor() }}>
        <span className={css.label}>{stat.label}</span>
        <span className={css.percentage}>{stat.percentage}%</span>
      </li>
    ))}
    </ul>
  </section>)
}


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};