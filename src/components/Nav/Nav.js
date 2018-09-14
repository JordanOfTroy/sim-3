import React from 'react' 
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'

function Nav (props) {
  let {pathname} = props.location
 
   {
     if (pathname === '/') {
      return (
        <h1>nav</h1>
      )
     } else {
      return (
        <div>
          <Link to = '/dashboard'>
            <button>Home</button>
          </Link>
          <Link to = '/new'>
            <button>New Post</button>
          </Link>
          <Link to = '/'>
            <button>Logout</button>
          </Link>
        </div>
      )
     }
   }

}

export default withRouter(Nav) 


