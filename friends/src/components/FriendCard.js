import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../utilities/AxiosWithAuth'

import AddFriend from '../hooks/useForm'
import Friends from "./Friends.js"

const FriendCard = () => {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    axiosWithAuth()
    .get("/friends")
    .then(res => setFriends(res.data))
    .catch(err => console.error(err))
  })

  return(
    <div>
      <AddFriend/>
      <h1>Friends List</h1>
      {friends.map(friend => (
        <div key={friend.id}>
          <Friends banana={friend} />
        </div>
      ))}
    </div>
  )

}

export default FriendCard;