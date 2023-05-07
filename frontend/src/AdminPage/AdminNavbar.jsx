import React from 'react'

const AdminNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#" style={{color:"#4A148C"}}>Welcome Admin</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/admindashboard">Dashboard <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/allusers">Users</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/adminproducts">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/adminproducts">Orders</a>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default AdminNavbar;
