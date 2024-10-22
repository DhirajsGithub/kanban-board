import React from 'react'
import "./Common.css"
const UserAvatar = ({img, available}) => {
    return (
        <div className="user-avatar">
            <img
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${img}`}
                alt={img}
                className="avatar"
            />
            <span className={`status-dot ${available ? 'available' : 'unavailable'}`} />
        </div>
    )
}

export default UserAvatar