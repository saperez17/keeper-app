import React from 'react';
import '../public/css/footer.css'

const Footer  = ()=>{
    return(
        <footer>
            <p>Keeper App copyright {`${new Date().getFullYear()}`}</p>
        </footer>
    )
}

export default Footer;