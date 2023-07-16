import css from './FriendListItem.module.css'
import PropTypes from 'prop-types';

export const FriendListItem= ({avatar,name,isOnline}) =>{
    return (
<li className={css.item}>
{isOnline ? (
        <span className={css.status} style={{backgroundColor:"#009908"}}></span>
      ) : (
        <span className={css.status} style={{backgroundColor:"#d60505"}}></span>
      )}
  
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={css.name}>{name}</p>
</li>
    )
}

 FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
     };