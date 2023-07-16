import css from './FriendList.module.css'
import PropTypes from 'prop-types';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList= ({friends}) =>{
    return (
<ul className={css.friend_list}>
{
friends.map(({avatar,name,isOnline,id}) => (
    <FriendListItem      
    avatar={avatar}
    name={name}
    isOnline={isOnline}
    key={id}
    />
    ))}
</ul>
    )}

 FriendList.propTypes = {
     friends: PropTypes.array.isRequired,
    };

